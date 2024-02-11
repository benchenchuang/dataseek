'use client';
import React, { useEffect, useState } from 'react'
import { Button, Input, Spinner } from '@nextui-org/react'
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';
import { redirect, useRouter } from 'next/navigation';
import { login } from '@/api/login';
import { setCache } from '@/libs/session';
import toast from 'react-hot-toast';

const LoginForm = () => {
    let router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorUsername, setErrorUsername] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState<string>('')
    const [isLoading,setLoading] = useState<boolean>(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    useEffect(() => {
        if (username) {
            setErrorUsername('')
        }
        if (password) {
            setErrorPassword('')
        }
    }, [username, password])

    const handleSubmit = async () => {
        try {
            if (!username) {
                toast.error('请输入登录账号')
                setErrorUsername('请输入登录账号')
                return false;
            };
            if (!password) {
                toast.error('请输入登录密码')
                setErrorPassword('请输入登录密码')
                return false;
            }
            setLoading(true)
            let res = await login({username,password})
            let {token,...userInfo} = res.data;
            toast.success('登录成功')
            setCache('token',token)
            setCache('userInfo',userInfo)
            router.push('/admin/consult')
        }catch(err:any){
            // toast.error(err.message)
        }finally {
            setTimeout(()=>{
                setLoading(false);
            },1500)
        }
    }

    return (
        <div className='relative'>
            <div className='mt-[30px] text-left'>
                <Input
                    size='md'
                    type="text"
                    label="用户名"
                    value={username}
                    onChange={e => setUsername(e.currentTarget.value)}
                    errorMessage={errorUsername} />
            </div>
            <div className='mt-[40px] text-left'>
                <Input
                    label="密码"
                    size='md'
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)}
                    errorMessage={errorPassword}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                />
            </div>
            <div className='mt-[40px]'>
                <Button className='w-full bg-[#010c27] text-white h-[48px]' onClick={handleSubmit}>登 录</Button>
            </div>
            
            {
                isLoading && (
                    <div className='absolute z-10 flex flex-row justify-center left-0 top-0 right-0 bottom-0 bg-[#fff] opacity-80'>
                        <Spinner />
                    </div>    
                )
            }
        </div>
    )
}

export default LoginForm