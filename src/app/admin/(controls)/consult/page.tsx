'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Button, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, useDisclosure } from '@nextui-org/react'
import { statusTypes } from './consult.type'
import { deleteInfo, remoteList, updateInfo } from '@/api/consult';
import { formatDate } from '@/libs/utils';
import toast from 'react-hot-toast';

const Consult = () => {
    const [page, setPage] = React.useState<number>(1);
    const [phone, setPhone] = React.useState<string>('');
    const currentPhone = useRef('');
    const [done, setDone] = React.useState<string>('-1');
    const currentDone = useRef('');
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [pages, setPages] = React.useState<number>(0)
    const [data, setData] = React.useState<any[]>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectItem,setItem] = useState<any>()
    const [event,setEvent] = useState<number>(0)

    const dealStatus: statusTypes[] = [
        {
            label: '全部',
            value: '-1'
        },
        {
            label: '未处理',
            value: '0'
        },
        {
            label: '已处理',
            value: '1'
        }
    ]

    useEffect(() => {
        search(page);
    }, [page])
    //搜索
    const search = async (page: number = 1) => {
        setLoading(true)
        try {
            setPage(page)
            let form: any = { page, size: 10 };
            if (currentPhone.current) {
                form.phone = currentPhone.current
            }
            if (currentDone.current) {
                form.status = currentDone.current
            }
            let res = await remoteList(form);
            let { list, total, size } = res.data;
            setData(list);
            setPages(Math.ceil(total / size))
        } finally {
            setLoading(false)
        }
    }
    //重置
    const reset = () => {
        setPhone('');
        currentPhone.current = '';
        setDone('-1')
        currentDone.current = ''
        search(1)
    }
    /**
     * 处理 删除操作按钮
     * @param item 对应单元
     * @param type 0 删除 1办理
     */
    const dealConsult = (item:any,type:number)=>{
        setItem(item);
        setEvent(type)
        onOpen();
    }
    //处理操作
    const dealItem = async ()=>{
        try{
            if(event==1){
                //更新状态
                await updateInfo({...selectItem,status:'1'});
                toast.success('处理成功');
            }else{
                //删除
                await deleteInfo({ids:[selectItem.id]});
                toast.success('删除成功')
            }
            onClose();
            search()
        }finally{}
    }

    return (
        <div>
            <div className='flex flex-row'>
                <Input
                    type="string"
                    aria-label="手机号"
                    labelPlacement="outside-left"
                    placeholder='请输入查询手机号'
                    className="max-w-[200px]"
                    value={phone}
                    onChange={e => {
                        currentPhone.current=e.target.value;
                        setPhone(e.target.value)
                    }} />
                <Select
                    aria-label="状态"
                    placeholder="选择状态"
                    className="max-w-[200px]"
                    labelPlacement="outside-left"
                    selectedKeys={[done]}
                    onChange={e => {
                        currentDone.current = e.target.value;
                        setDone(e.target.value)
                    }}
                >
                    {dealStatus.map((deal: statusTypes) => (
                        <SelectItem key={deal.value} value={deal.value}>{deal.label}</SelectItem>
                    ))}
                </Select>
                <div className="flex flex-wrap gap-[20px] items-center ml-[20px]">
                    <Button color="primary" onClick={() => search(1)}>查询</Button>
                    <Button color="primary" variant="bordered" onClick={reset}>重置</Button>
                </div>
            </div>
            <div className='mt-[20px]'>
                <Table
                    removeWrapper
                    isCompact
                    isHeaderSticky
                    aria-label="咨询列表表单数据"
                    bottomContent={
                        pages > 0 ? (
                            <div className="flex w-full justify-end">
                                <Pagination
                                    showControls
                                    color="primary"
                                    page={page}
                                    total={pages}
                                    onChange={(page) => setPage(page)}
                                />
                            </div>
                        ) : null
                    }
                >
                    <TableHeader>
                        <TableColumn key="companyName">公司名称</TableColumn>
                        <TableColumn key="type">需求类别</TableColumn>
                        <TableColumn key="user">联系人</TableColumn>
                        <TableColumn key="phone">联系方式</TableColumn>
                        <TableColumn key="email">邮箱地址</TableColumn>
                        <TableColumn key="comment">留言内容</TableColumn>
                        <TableColumn key="status">是否处理</TableColumn>
                        <TableColumn key="createTime">提交时间</TableColumn>
                        <TableColumn key="action">操作</TableColumn>
                    </TableHeader>
                    <TableBody
                        items={data ?? []}
                        loadingContent={<Spinner />}
                        isLoading={isLoading}
                        loadingState={isLoading ? 'loading' : 'idle'}
                        emptyContent={"暂无数据内容"}
                    >
                        {(item) => (
                            <TableRow className='h-[54px] hover:bg-[#e4e4e4] cursor-pointer border-b-[1px] border-bottom' key={item?.name}>
                                {(columnKey) => (
                                    columnKey == 'action' ? <TableCell className='flex flex-wrap gap-4 mt-[6px]'>
                                        {
                                            getKeyValue(item, 'status')=='0' && <Button color="primary" size='sm' onClick={()=>dealConsult(item,1)}>处理</Button>
                                        }
                                        <Button size='sm' color='warning' className='text-white' onClick={()=>dealConsult(item,0)}>删除</Button>
                                    </TableCell> : columnKey == 'createTime' ? <TableCell>{formatDate(getKeyValue(item, columnKey))}</TableCell> :
                                        <TableCell className='max-w-[200px]'>{columnKey == 'status' ? getKeyValue(item, columnKey)=='1' ? <Chip size="sm" variant="flat" color='success'>已处理</Chip> : <Chip color='warning' size="sm" variant="flat">未处理</Chip> :
                                            getKeyValue(item, columnKey)}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">操作提示</ModalHeader>
                    <ModalBody>
                        <p>确认{event==1?'已处理':'删除'}该条咨询？</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>取消</Button>
                        <Button color="primary" onPress={dealItem}>确定</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Consult