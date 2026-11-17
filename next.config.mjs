/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/Resume.pdf",
        destination: "/Kay%27s_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
