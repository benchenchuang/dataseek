/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-08 10:58:38
 * @LastEditTime: 2024-02-13 10:45:33
 * @FilePath: /dataseek-website/src/components/FormRequirement/index.tsx
 */
'use client';
import React, { useCallback, useEffect, useState } from 'react'
import Captcha from 'react-captcha-code';
import { originalCharacter, randomNum } from '@/libs/code';
import toast from 'react-hot-toast';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { budgetList, serverList } from './dictionary';
import { addInfo } from '@/api/consult';

const FormRequirement = () => {
    //获取验证码
    const getCodeString = () => {
        let str = "";
        for (let i = 0; i < 4; i++) {
            const temp =
                originalCharacter[randomNum(0, originalCharacter.length - 1)];
            str = `${str}${temp}`;
        }
        return str;
    }
    const [code, setCode] = useState<string>(getCodeString() as string);
    const [isFocus, setFocus] = useState<boolean>(false);
    //变换code验证码
    const handleClick = useCallback(() => {
        let str = getCodeString();
        setCode(str);
    }, []);
    const templateContent = `1.公司或需求名称（开发/设计对象）<br/>
    例：***公司，设计及开发一套H5活动页<br/>
    2.设计对象简介（网址、文字介绍等）<br/>
    例：***公司做线上化妆品售卖，针对18~35年轻女性，成立1年左右<br/>
    3.明确具体的要求：<br/>
    例：自适应网站，活动报名表单收集、开发时间要求，预算范围等<br/>`;
    //聚焦输入框
    const enterArea = (e:any) => {
        setFocus(true)
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        console.log('enterArea')
    }
    //移除输入框
    const leaveArea = () => {
        setFocus(false)
    }
    const stopTemplate = (e:any)=>{
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
    }
    //使用模版
    const useTemplate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.stopPropagation();
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
    }
    useEffect(()=>{
        window.onclick=()=>{
            leaveArea()
        }
    },[])

    //提交
    const submit = async ()=>{
        let res = await addInfo({});
        console.log(res)
    }

    return (
        <div className='bg-[#f1f1f1] h-[120px]'>
            <div className='fixed z-20 left-0 right-0 bottom-0 bg-[#000] py-6 bg-opacity-60'>
                <div className='max-w-[1200px] mx-auto flex flex-row gap-4'>
                    <div className='flex-1'>
                        <Textarea
                            label=""
                            aria-label="说说您的具体需求"
                            size='md'
                            placeholder="说说您的具体需求"
                            minRows={isFocus ? 14 : 2}
                            onClick={e=>enterArea(e)}
                            disableAnimation
                            disableAutosize
                            classNames={{
                                input: `resize-y ${isFocus ? 'min-h-[275px]' : 'h-[40px]'} pt-3 box-border`,
                            }}
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-4'>
                            <div className='w-[130px]'>
                                <Select
                                    label=""
                                    size='md'
                                    aria-label="项目预算"
                                    placeholder="项目预算">
                                    {
                                        budgetList.map((budget) => (
                                            <SelectItem key={budget.value} value={budget.value}>
                                                {budget.label}
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className='w-[130px]'>
                                <Select
                                    label=""
                                    size='md'
                                    aria-label="服务类型"
                                    placeholder="服务类型">
                                    {
                                        serverList.map((server) => (
                                            <SelectItem key={server.value} value={server.value}>
                                                {server.label}
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className=''>
                                <Input
                                    type="phone"
                                    label=""
                                    className='text-[16px]'
                                    size='md'
                                    aria-label="请输入您的手机号"
                                    placeholder="请输入您的手机号"
                                />
                            </div>
                        </div>
                        <div className={`bg-white rounded-[8px] p-3 text-[13px] text-[#666] ${isFocus?'flex flex-col':'hidden'}`} onClick={e=>stopTemplate(e)}>
                            <div className='flex flex-row items-center'>
                                <p>自己描述需求，建议您参考以下模板。</p>
                                <Button
                                    color="primary"
                                    size='sm'
                                    radius="full"
                                    className='bg-block-primary'
                                    onClick={e=>useTemplate(e)}>使用模版</Button>
                            </div>
                            <p className='text-site-primary my-1 font-[600]'>好的需求描述，让人更容易理解，更好的为您进行服务。</p>
                            <div className=''>
                                <p>模版参考：</p>
                                <div dangerouslySetInnerHTML={{__html: templateContent}}></div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[120px]'>
                        <Input
                            type="phone"
                            className='text-[16px]'
                            label=""
                            size='md'
                            aria-label="请输入验证码"
                            placeholder="请输入验证码"
                        />
                    </div>
                    <div>
                        <Captcha
                            onClick={handleClick}
                            code={code}
                            fontSize={30}
                            bgColor='#F2F2F2'
                            className="text-black sm:w-full md:w-[120px] h-[54px] rounded-[8px]" />
                    </div>
                    <div>
                        <Button 
                            color="primary" size='md' 
                            className='h-[54px] bg-block-primary'
                            onClick={submit}
                            >我要定制需求</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRequirement