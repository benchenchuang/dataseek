/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-11 17:08:07
 * @LastEditTime: 2024-02-11 17:28:47
 * @FilePath: /dataseek-website/src/app/(pages)/cases/_components/tempList.tsx
 */
'use client';
import React, { useState } from 'react'
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import Link from 'next/link'

const TempList = () => {
    const [active,setActive] = useState<Number>(-1);
    const tempList = [
        {
            id:1,
            profile:'https://sz-source.chisalsoft.co/website2023/web/pro/chisasoft/bugx.jpg',
            name:'BugX管理平台'
        },
        {
            id:2,
            profile:'https://sz-source.chisalsoft.co/website2023/web/pro/chisasoft/hxxc.jpg',
            name:'火星学车'
        },
        {
            id:3,
            profile:'https://sz-source.chisalsoft.co/website2023/web/pro/chisasoft/tymc.jpg',
            name:'太阳买车'
        },
        {
            id:4,
            profile:'https://sz-source.chisalsoft.co/website2023/web/pro/chisasoft/mps.jpg',
            name:'MPS Management'
        },
        {
            id:5,
            profile:'https://sz-source.chisalsoft.co/website2023/web/pro/chisasoft/ts.jpg',
            name:'Trouble Shooting'
        }
    ]
    return (
        <div className='max-w-[1200px] mx-auto my-[100px] grid grid-cols-3 gap-6'>
            {
                tempList.map(temp=>{
                    return(
                        <div
                            className='relative overflow-hidden rounded-[10px]'
                            key={temp.id}
                            onMouseEnter={()=>setActive(temp.id)} onMouseLeave={()=>setActive(-1)}
                            >
                            <Image className={`${active==temp.id && 'scale-110'}`} src={temp.profile} alt={siteConfig.name}/>
                            <div className='relative z-10 mx-8 -mt-8 bg-white py-7 px-6'>
                                <h3 className='text-[#333] font-[600] text-[20px]'>{temp.name}</h3>
                                <div className={`flex flex-row mt-3`}>
                                    <Link href={''} className={`text-site-primary ${active==temp.id?'mr-4':'mr-2'} text-[14px] transition-all`}>查看全部</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-site-primary
                                    ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TempList