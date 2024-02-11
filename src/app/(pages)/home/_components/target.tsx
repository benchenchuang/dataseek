/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-10 15:39:43
 * @LastEditTime: 2024-02-10 16:11:20
 * @FilePath: /dataseek-website/src/app/(pages)/home/_components/target.tsx
 */
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import React from 'react'

const TargetModule = () => {
  return (
    <div className='relative bg-white'>
        <div className='max-w-[1200px] py-[80px] mx-auto'>
            <h2 className='wow bounceIn text-[#333] text-center text-[44px] tracking-[6px] font-[600]'>追求极致体验、精益求精，是我们永恒的目标</h2>
            <p className='wow fadeInUp text-[#666] text-center text-[24px] mt-2'>公司成立11年，我们已经为100+公司提供专业技术解决方案和软件技术开发服务</p>
            <div className='mt-16 grid grid-cols-4 gap-4'>
                {
                    [1,2,3,4,5,6,7,8].map(item=>{
                        return (
                            <div className='bg-[#f5f5f5] py-8 flex flex-col items-center
                                transition-all hover:scale-90' key={item}>
                                <Image alt={siteConfig.name} src='https://sz-source.chisalsoft.co/website2023/web/banner/clients_dr_coffee.png'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TargetModule