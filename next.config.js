/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_API_URL: "https://uapi-search-microservice-f4.ew.r.appspot.com",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
