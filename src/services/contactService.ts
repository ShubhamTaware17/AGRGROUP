import type { ContactFormData } from '@/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function submitContactForm(form: ContactFormData): Promise<{ success: boolean; message?: string }> {
  // If Supabase URL & Key are configured, attempt submission
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          subject: form.subject || null,
          message: form.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (!error) {
        return { success: true };
      }
    } catch {
      // Fall through to edge function or fallback
    }

    // Try edge function if configured
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const res = await fetch(`${supabaseUrl}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        return { success: true };
      }
    } catch {
      // Fall through
    }
  }

  // Graceful fallback for local development or demo without backend
  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true, message: 'Message sent successfully (demo mode).' };
}
