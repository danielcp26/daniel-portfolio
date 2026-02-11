// Base path for GitHub Pages deployment
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/daniel-portfolio' : '';

// Helper function to prefix paths with base path
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
