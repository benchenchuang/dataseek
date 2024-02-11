/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-07 20:33:19
 * @LastEditTime: 2024-02-10 15:40:01
 * @FilePath: /dataseek-website/src/app/(pages)/home/page.tsx
 */
import React from 'react'
import { Metadata } from 'next'
import BannerShow from '@/components/BannerShow'
import AboutUs from './_components/us'
import WhySelected from './_components/why'
import TargetModule from './_components/target'

export const metadata: Metadata = {
    title: '首页'
}

const Home = () => {
    const banner = {
        bgColor: '#222',
        textColor: 'text-white',
        title: '南京数琛信息',
        subTitle: '以高品质、高效率实现您的最终业务目标',
        imagePath: '/images/home/banner_02.png',
        position:'items-center',
        description: '专业的定制化解决方案提供商，拥有一支技术硬核、经验丰富、管理科学，高效的执行团队。'
    }
    return (
        <div>
            <BannerShow {...banner}/>
            <AboutUs/>
            <WhySelected />
            <TargetModule />
        </div>
    )
}

export default Home