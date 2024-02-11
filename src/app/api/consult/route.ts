import { prisma } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { getParamsData, requestData, responseData } from "../base.interface";

export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        let page = Number(getParamsData(searchParams, 'page')) || 1;
        let size = Number(getParamsData(searchParams, 'size')) || 10;
        let phone = getParamsData(searchParams, 'phone');
        let status = getParamsData(searchParams, 'status');
        let where: any = {};
        if (phone) {
            where.phone = phone;
        }
        if (status) {
            where.status = status;
        }
        let query = requestData(page, size, where)
        let data = await prisma.consult.findMany({
            ...query,
            orderBy: {
                'createTime': 'desc'
            }
        });
        let total = await prisma.consult.count({ where })
        return NextResponse.json(responseData(200, '操作成功', { list: data, page, size, total: total }))
    } catch (err: any) {
        return NextResponse.json(responseData(0, '操作失败'))
    }
}

export const POST = async (req: NextRequest) => {
    try {
        let data = await req.json();
        let { companyName, user,phone } = data;
        if (!companyName) {
            return NextResponse.json(responseData(0, '公司不能为空'))
        }
        if (!user) {
            return NextResponse.json(responseData(0, '联系人不能为空'))
        }
        if (!phone) {
            return NextResponse.json(responseData(0, '联系方式不能为空'))
        }
        await prisma.consult.create({ data });
        return NextResponse.json(responseData(200, '操作成功'))
    } catch (err: any) {
        console.log(err)
        return NextResponse.json(responseData(0, '操作失败'))
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        let ids = searchParams.getAll('ids[]');
        if (!ids || ids.length == 0) {
            return NextResponse.json(responseData(0, '缺少删除信息Id'))
        }
        await prisma.consult.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
        return NextResponse.json(responseData(200, '操作成功'))
    } catch (err: any) {
        return NextResponse.json(responseData(0, '操作失败'))
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        let { id, ...data } = await req.json();
        if (!id) {
            return NextResponse.json(responseData(0, '缺少更新信息Id'))
        }
        const res = await prisma.consult.update({
            where: {
                id,
            },
            data
        });
        return NextResponse.json(responseData(200, '操作成功', res))
    } catch (err: any) {
        return NextResponse.json(responseData(0, '操作失败'))
    }
}