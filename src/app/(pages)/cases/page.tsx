/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-07 21:22:34
 * @LastEditTime: 2024-02-11 17:07:34
 * @FilePath: /dataseek-website/src/app/(pages)/cases/page.tsx
 */
import React from 'react'
import BannerShow from '@/components/BannerShow'
import TempList from './_components/tempList'

const Cases = () => {
    const banner = {
        bgColor: '#222',
        textColor: 'text-white',
        title: '极致的用户体验是我们一直追寻的',
        subTitle: '提供可靠的软件解决方案与软件开发服务',
        imagePath: 'https://sz-source.chisalsoft.co/website2023/web/banner/success_stories_0.png',
        position: 'items-center',
    }
    return (
        <div>
            <BannerShow {...banner} />
            <TempList/>
        </div>
    )
}

export default Cases