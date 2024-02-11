/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-02-07 20:37:14
 * @FilePath: /dataseek-website/src/app/page.tsx
 */
'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push('/home')
    }, []);
}
