import { useEffect } from 'react';

const BASE = 'AGRGROUPS';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} | Building Value Across Industries`;
    return () => {
      document.title = `${BASE} | Building Value Across Industries`;
    };
  }, [title]);
}
