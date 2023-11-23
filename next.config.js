/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // if your website has no www, drop it
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/search/:search',
        destination: '/:search', // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: '/favourites/search/:search',
        destination: '/favourites/:search', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
};

module.exports = nextConfig;
