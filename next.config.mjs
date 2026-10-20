/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://*.oncehub.com; style-src 'self' 'unsafe-inline' https://*.oncehub.com; img-src 'self' data: blob: https:; font-src 'self' data:; frame-src https://go.oncehub.com https://*.oncehub.com; connect-src 'self' https://acrtracking.stealthagents.us https://*.oncehub.com; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
  async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }], destination: 'https://legalbillingassistant.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.legalbillingassistant.com' }], destination: 'https://legalbillingassistant.com/:path*', permanent: true },
    ];
  },
};
export default nextConfig;
