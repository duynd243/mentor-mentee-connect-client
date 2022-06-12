/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: "https://mentor-mentee-connect-api.tk/api/v1",
    sampleUrl: "https://obscure-shelf-38503.herokuapp.com",
  },
};

module.exports = nextConfig;
