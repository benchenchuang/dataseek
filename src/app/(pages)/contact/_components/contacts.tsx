/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-11 17:35:53
 * @LastEditTime: 2024-02-11 18:12:32
 * @FilePath: /dataseek-website/src/app/(pages)/contact/_components/contacts.tsx
 */
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const OurContact = () => {
    const list = [
        {
            icon:'https://sz-source.chisalsoft.co/assets/images/contact/info-1.png',
            label:'给我们打电话',
            content:'1995-1111-282',
            type:'phone'
        },
        {
            icon:'https://sz-source.chisalsoft.co/assets/images/contact/info-2.png',
            label:'给我们发邮件',
            content:'bd@chisalsoft.com',
            type:'email'
        },
        {
            icon:'https://sz-source.chisalsoft.co/assets/images/contact/info-3.png',
            label:'来办公室洽谈',
            content:'苏州工业园区星湖街328号创意产业园16-B501'
        }
    ]
  return (
    <div className='max-w-[1200px] mx-auto my-[100px] grid grid-cols-3 gap-10'>
        {
            list.map((item,key)=>{
                return (
                    <div className='flex flex-col items-center py-[40px] bg-[#f1f1f1]' key={key}>
                        <Image src={item.icon} alt={siteConfig.name}/>
                        <p className='text-[#333] font-[600] text-[18px] mt-3'>{item.label}</p>
                        {
                            item.type?(
                                <Link
                                    className='text-[#666] text-[14px] mt-3'
                                    href={`${item.type=='phone'?`tel:${item.content}`:`mailto:${item.content}`}`}>{item.content}</Link>
                            ):(
                                <p className='text-[#666] text-[14px] mt-3'>{item.content}</p>
                            )
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default OurContact