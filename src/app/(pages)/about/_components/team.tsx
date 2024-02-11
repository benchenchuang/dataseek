'use client';
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'

const MyTeam = () => {
    const [active,setActive] = useState<Number>(-1);
    const teamList = [
        {
            name:'陈晨',
            position:'CEO',
            phone:'158****8888',
            email:'chenchen@feishu.com',
            image:"https://sz-source.chisalsoft.co/website2023/web/banner/Ahsun0.png"
        },
        {
            name:'陈晨',
            position:'CEO',
            phone:'158****8888',
            email:'chenchen@feishu.com',
            image:"https://sz-source.chisalsoft.co/website2023/web/banner/ben.png"
        },
        {
            name:'陈晨',
            position:'CEO',
            phone:'158****8888',
            email:'chenchen@feishu.com',
            image:"https://sz-source.chisalsoft.co/website2023/web/banner/Sarah0.png"
        },
        {
            name:'陈晨',
            position:'CEO',
            phone:'158****8888',
            email:'chenchen@feishu.com',
            image:"https://sz-source.chisalsoft.co/website2023/web/banner/Toby.png"
        }
    ]
    return (
        <div className='max-w-[1200px] mx-auto my-[80px] grid grid-cols-4 gap-6'>
            {
                teamList.map((team,key)=>{
                    return (
                        <div className='relative' key={key} onMouseEnter={()=>setActive(key)} onMouseLeave={()=>setActive(-1)}>
                            <div className={`
                                absolute z-10 left-0 bottom-0 right-0 text-white text-[15px] font-[300]
                                p-5 transition-all bg-opacity-80
                                ${active==key?'bg-block-primary':''}
                            `}>
                                <p>{team.name}</p>
                                <p>{team.position}</p>
                                <p>{team.email}</p>
                            </div>
                            <Image className={`relative z-0 transition-all ${active==key?'scale-95':''}`} src={team.image} radius='none' alt={siteConfig.name}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyTeam