/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "4bxg2e7sah.ufs.sh",
            },
        ],
    },
};

export default nextConfig;
