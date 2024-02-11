/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 15:23:15
 * @LastEditTime: 2024-02-10 09:42:45
 * @FilePath: /dataseek-website/src/components/BackTop/index.jsx
 */
'use client';
import React, { useEffect, useState } from 'react'
import { Button, Image } from "@nextui-org/react";
import {siteConfig} from '@/config/site'

const BackTop = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    }, [])
    //监听滚动
    const handleScroll = () => {
        const isScrolledDown = document.documentElement.scrollTop > 300;
        if (isScrolledDown) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };
    //返回顶部
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div>
            {showBtn && (
                <Button
                    disableRipple
                    onClick={scrollToTop}
                    className="fixed z-50 bottom-12 right-6 overflow-visible rounded-full px-unit-0 min-w-unit-12 hover:-translate-y-1 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                >
                    <Image
                        className='text-color-site-primary w-6'
                        src='/images/common/backtop.svg'
                        alt={siteConfig.name}></Image>
                </Button>
            )
            }
        </div>
    )
}

export default BackTop