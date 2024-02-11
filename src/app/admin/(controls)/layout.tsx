/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 16:44:01
 * @LastEditTime: 2024-01-12 19:49:01
 * @FilePath: /minum-website/src/app/admin/(controls)/layout.tsx
 */
import React, { ReactNode, Suspense } from 'react'
import { ScrollShadow } from '@nextui-org/react'
import Spinning from '../_components/Spinning'
import SideBar from '../_components/SideBar'
import AdminHeader from '../_components/AdminHeader'

const AdminLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Suspense fallback={<Spinning />}>
                <div className='flex flex-col w-full h-screen'>
                    <div className='flex flex-row text-white h-[60px] bg-[#1d24ae] items-center'>
                        <AdminHeader />
                    </div>
                    <div className='flex flex-row flex-1 bg-[#f1f3fc]'>
                        <div className='w-[180px] bg-[#010c27]'>
                            <SideBar />
                        </div>
                        <div className='flex flex-col flex-1 m-[20px]'>
                            <ScrollShadow className='flex-1 bg-white p-[20px]'>
                                {children}
                            </ScrollShadow >
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default AdminLayout