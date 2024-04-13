/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 800, // 매 초 변경사항을 확인
            aggregateTimeout: 300, // 재빌드 전 지연 시간
        };
        return config;
    },
};

export default nextConfig;
