/**
 * Resolves a path with Astro's configured BASE_URL so assets work in both local dev and GitHub Pages subpaths.
 */
export function asset(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
