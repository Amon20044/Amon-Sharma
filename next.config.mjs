/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['skillicons.dev'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable compression
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // PoweredByHeader
  poweredByHeader: false,
  
  // Optimize for SEO
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any redirects here if you have old URLs to redirect
    ];
  },
  
  // Rewrites for SEO (if needed)
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ];
  },
};
  
  export default nextConfig;
  