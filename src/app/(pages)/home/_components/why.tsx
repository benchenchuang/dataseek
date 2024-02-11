/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-10 15:16:10
 * @LastEditTime: 2024-02-10 15:38:40
 * @FilePath: /dataseek-website/src/app/(pages)/home/_components/why.tsx
 */
import { Image } from '@nextui-org/react'
import React from 'react'

const WhySelected = () => {
    const reasonList = [
        {
            label:'丰富的技术经验',
            path:'https://sz-source.chisalsoft.co/website2023/web/pro/banner/advantage_sc.png'
        },
        {
            label:'一流的开发技术',
            path:'https://sz-source.chisalsoft.co/website2023/web/pro/banner/advantage_top.png'
        },
        {
            label:'稳定的售后服务',
            path:'https://sz-source.chisalsoft.co/website2023/web/pro/banner/advantage_high.png'
        }
    ]
  return (
    <div className='relative bg-[#f2f2f2]'>
        <div className='max-w-[1200px] py-[80px] mx-auto'>
            <h2 className='wow bounceIn text-[#333] text-center text-[44px] tracking-[6px] font-[600]'>为什么选择我们？</h2>
            <div className='flex flex-row gap-10 mt-[60px]'>
                {
                    reasonList.map((item,key)=>{
                        return (
                            <div
                                className='wow rollIn flex-1 flex flex-col items-center'
                                key={key}>
                                    <div className='bg-white p-8 rounded-lg 
                                    transition-all hover:shadow-lg hover:-translate-y-unit-lg'>
                                        <Image radius='none' className='w-16' src={item.path} alt={item.label}/>
                                    </div>
                                    <p className='text-[#666] mt-4 text-[16px]'>{item.label}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default WhySelected