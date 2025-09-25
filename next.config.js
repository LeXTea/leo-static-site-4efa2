/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

// module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/01997f34-333a-3988-8da1-fda071145554',
        permanent: false,
      },
    ]
  },
}