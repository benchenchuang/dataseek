/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:37:44
 * @LastEditTime: 2024-02-08 10:43:02
 * @FilePath: /dataseek-website/src/components/SiteFooter/index.tsx
 */
import React from 'react'
import { menuList, siteConfig } from '@/config/site'
import { formatPhone } from '@/libs/utils'
import { Image} from "@nextui-org/react";
import Link from 'next/link'

const SiteFooter = () => {
    const today = new Date().getFullYear();
    return (
        <div className='bg-[#f1f1f1]'>
            <div className='max-w-[1200px] mx-auto flex flex-row py-10 before:backdrop-blur-lg'>
                <div className='flex-1 flex flex-row'>
                    <div className='side_logo_box flex flex-col max-w-[200px]'>
                        <Image src='/images/common/logo.png' alt={siteConfig.companyName}/>
                        <p className='text-[#666] text-[14px]'>我们帮助您以高品质、高效率实现您的最终业务目标</p>
                    </div>
                    <div className='mx-20 flex-1 flex flex-row gap-x-12 font-[300]'>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-[#333] text-[16px] mb-3 font-[500]'>快捷链接</h3>
                            <div className='grid grid-cols-2 gap-x-4'>
                                {
                                    menuList.map((menu)=>{
                                        return (
                                            <Link className='text-[#888] leading-9 text-[12px]' href={menu.path} key={menu.path}>{menu.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <h3 className='text-[#333] text-[16px] mb-4 font-[500]'>战略合作伙伴</h3>
                            <div className='grid grid-cols-2 gap-x-4'>
                                {
                                    menuList.map((menu)=>{
                                        return (
                                            <Link className='text-[#888] leading-9 text-[12px]' href={menu.path} key={menu.path}>{menu.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-black text-[18px]'>{siteConfig.companyName}</h2>
                    <div className='text-[#999] font-[300] flex flex-col mt-3 text-[13px] leading-9'>
                        <p>地址：{siteConfig.address}</p>
                        <Link href={`tel:${siteConfig.phone}`}>手机：{formatPhone(siteConfig.phone)}</Link>
                        <Link href={`mailto:${siteConfig.email}`}>邮箱：{siteConfig.email}</Link>
                    </div>
                </div>
            </div>
            <div className='border-t-1 border-[#ddd] text-center py-5 text-[12px] text-[#999] font-[300]'>
                <p>© 2018-{today} {siteConfig.companyName}版权所有。</p>
                <p className=' flex flex-row justify-center gap-2 pt-2'>
                    <Link href={''}>苏ICP备13060847号-11</Link>
                    <Link href={''}>苏公网安备 32059002004138号</Link>
                </p>
            </div>
        </div>
    )
}

export default SiteFooter