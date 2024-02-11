/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 17:00:46
 * @LastEditTime: 2024-02-05 18:42:47
 * @FilePath: /minum-website/src/app/admin/_components/AdminHeader.tsx
 */
'use client'
import React from 'react'
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { logout } from '@/api/login';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

const AdminHeader = () => {
    let router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    //退出操作提示
    const handleQuit = () => {
        onOpen();
    }
    //退出执行
    const quitEvent = async () => {
        try{
            await logout();
            router.push('/admin/login')
            toast.success('退出成功')
        }finally{}
    }

    return (
        <div className='w-full flex flex-row px-[20px] text-white'>
            <h1 className='text-[20px]'>密数云管理平台</h1>
            <div className='flex-1 flex flex-row justify-end items-center text-[14px]'>
                <span className='mr-[20px]'>欢迎您使用</span>
                <div className='cursor-pointer hover:opacity-70' onClick={handleQuit}>
                    <Image className='w-[28px]' src='/quit.svg' alt='退出登录' />
                </div>
            </div>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">退出提示</ModalHeader>
                    <ModalBody>
                        <p>确认退出当前管理账号？</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>取消</Button>
                        <Button color="primary" onPress={quitEvent}>确定</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AdminHeader