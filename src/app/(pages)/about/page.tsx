/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-07 21:22:46
 * @LastEditTime: 2024-02-11 16:26:06
 * @FilePath: /dataseek-website/src/app/(pages)/about/page.tsx
 */
import React from 'react'
import BannerShow from '@/components/BannerShow'
import AboutContent from './_components/content'
import MyTeam from './_components/team'

const About = () => {
    const banner = {
        bgColor: '#222',
        textColor: 'text-white',
        title: '一群热爱互联网事业的攻城狮 :-)',
        subTitle: '诚信、专注、专业、高效',
        imagePath: 'https://sz-source.chisalsoft.co/website2023/web/banner/about_us_0.png',
        position: 'items-center',
    }
    return (
        <div>
            <BannerShow {...banner} />
            <AboutContent/>
            <MyTeam/>
        </div>
    )
}

export default About