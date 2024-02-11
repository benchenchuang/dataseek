/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 15:01:25
 * @LastEditTime: 2024-02-05 18:42:15
 * @FilePath: /minum-website/src/app/admin/login/page.tsx
 */
import React from 'react'
import LoginForm from './_components/form';

const Login = () => {
    
    return (
        <div
            className='w-full bg-cover flex flex-row justify-center items-center h-screen'
            style={{ backgroundImage: "url('/login.png')" }}>
            <div className='flex flex-1 flex-col items-center justify-center'>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-[48px] text-white font-[600] tracking-[15px]'>密数云管理平台</h1>
                    <div className='bg-white p-[25px] border-box mt-[30px] rounded-[10px] w-[520px]' style={{ minHeight: '200px' }}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login