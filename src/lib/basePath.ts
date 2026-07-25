/**
 * Must stay in sync with `basePath` / `assetPrefix` in next.config.ts.
 * Used for public assets (`next/image` unoptimized + raw `<a>`/`<img>`),
 * which do not get Next.js basePath prefixing automatically.
 */
export const basePath =
  process.env.NODE_ENV === "production" ? "/techportfolio" : "";

/** Prefix a root-relative public asset path for GitHub Pages project hosting. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  if (!basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }
  return `${basePath}${path}`;
}
