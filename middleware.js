import { rewrite } from '@vercel/edge';

export default function middleware(request) {
  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/markdown')) {
    const url = new URL('/api/markdown', request.url);
    return rewrite(url);
  }
}

export const config = {
  matcher: '/:path*',
};
