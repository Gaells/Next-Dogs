/** @type {import('next').NextConfig} */
const nextConfig = {
  //api externa deve ser definida aqui
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dogsapi.origamid.dev'
      }
    ]
  }
};

export default nextConfig;
