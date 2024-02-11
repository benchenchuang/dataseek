'use client';
import React, { useState } from 'react'
import { Image } from '@nextui-org/react'

const SideBar = () => {
    const [path, setPath] = useState<string>('/admin/consult');
    const items = [
        {
            name: '客户咨询',
            icon: '/consult.svg',
            path: '/admin/consult'
        }
    ]
    return (
        <div className='flex flex-col text-white mt-[10px]'>
            {
                items.map(item => {
                    return (
                        <div
                            key={item.path}
                            className={`flex flex-row items-center h-[48px] px-[20px] cursor-pointer ${path == item.path && 'bg-[#283043]'} hover:bg-[#283043]`}>
                            <Image className='w-[24px]' src={item.icon} alt={item.name} />
                            <span className='ml-[10px] text-[14px]'>{item.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar