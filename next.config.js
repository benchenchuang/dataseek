/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-02-04 11:41:30
 * @FilePath: /minum-website/next.config.js
 */
/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}

module.exports = nextConfig
