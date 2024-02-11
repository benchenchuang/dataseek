/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-07 21:22:10
 * @LastEditTime: 2024-02-11 18:05:11
 * @FilePath: /dataseek-website/src/app/(pages)/contact/page.tsx
*/
import React from 'react'
import BannerShow from '@/components/BannerShow'
import OurContact from './_components/contacts'
import dynamic from 'next/dynamic';
const OurMap = dynamic(
    ()=>import('./_components/ourMap'),
    {ssr:false}
);

const Contact = () => {
    const banner = {
        bgColor: '#222',
        textColor: 'text-white',
        title: '联系我们',
        subTitle: '我们随时恭候您的来访，带您感受专业开发团队的独特魅力',
        imagePath: 'https://sz-source.chisalsoft.co/website2023/web/banner/contact_us_0.png',
        position: 'items-center',
    }
    return (
        <div>
            <BannerShow {...banner} />
            <OurContact/>
            <OurMap/>
        </div>
    )
}

export default Contact