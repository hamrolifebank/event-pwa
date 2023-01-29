/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    clientIdfromgoogle: process.env.clientIdfromgoogle,
  },
};

module.exports = nextConfig;
