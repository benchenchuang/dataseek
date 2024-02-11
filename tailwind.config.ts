/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-02-07 21:54:27
 * @FilePath: /dataseek-website/tailwind.config.ts
 */
import { nextui } from "@nextui-org/react";
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            'sm': '320px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                'site-primary': '#425cc8',
                'sub-primary': '#6387C9',
                'site-gray': '#888',
            },
            backgroundColor: {
                "block-light": '#F6F9FC',
                'block-black': "#010717",
                'block-primary': "#425cc8",
            },
            backgroundImage: {
                "navbar-gradient": "linear-gradient(90deg, rgba(13, 24, 66, 0.8) 0%,rgba(13, 24, 66, 0.8) 100%)",
                "navbar-active": "linear-gradient(0, #425cc8 0%, rgba(72, 122, 217, 0.4) 100%)",
            },
            animation: {
                bounceOne: 'bounce 1s'
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()]
}
export default config
