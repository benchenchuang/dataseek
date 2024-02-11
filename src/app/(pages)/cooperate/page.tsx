/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-07 21:21:55
 * @LastEditTime: 2024-02-11 11:38:26
 * @FilePath: /dataseek-website/src/app/(pages)/cooperate/page.tsx
 */
import React from 'react'
import BannerShow from '@/components/BannerShow'
import CooperateWays from './_components/ways'

const Cooperate = () => {
    const banner = {
        bgColor: '#222',
        textColor: 'text-white',
        title: '与智奇胜的合作方式 灵活多样',
        subTitle: '项目整包、人力外包、协助您打造属于自己的专业开发团队',
        imagePath: 'https://sz-source.chisalsoft.co/website2023/web/banner/how_chisalsoft_works_0.png',
        position: 'items-center',
    }
    return (
        <div>
            <BannerShow {...banner} />
            <CooperateWays/>
        </div>
    )
}

export default Cooperate