/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-12 12:41:59
 * @LastEditTime: 2024-02-13 12:05:59
 * @FilePath: /dataseek-website/src/app/api/consult/route.ts
 */
import { prisma } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { getParamsData, requestData, responseData } from "../base.interface";
import { signJWT } from "../jwt";
const lark = require('@larksuiteoapi/node-sdk');

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
        // let data = await req.json();
        // let { companyName, user, phone } = data;
        // if (!companyName) {
        //     return NextResponse.json(responseData(0, '公司不能为空'))
        // }
        // if (!user) {
        //     return NextResponse.json(responseData(0, '联系人不能为空'))
        // }
        // if (!phone) {
        //     return NextResponse.json(responseData(0, '联系方式不能为空'))
        // }
        //飞书相关信息配置
        const baseConfig = {
            appId: 'cli_a5406e41f0b9d00b',
            appSecret: 'gscJCpYvGgzdmBjizTtG5eydhzsj55Zw',
        }
        const client = new lark.Client({
            ...baseConfig,
            // disableTokenCache为true时，SDK不会主动拉取并缓存token，这时需要在发起请求时，调用lark.withTenantToken("token")手动传递
            // disableTokenCache为false时，SDK会自动管理租户token的获取与刷新，无需使用lark.withTenantToken("token")手动传递token
            disableTokenCache: true
        });
        // 获取tenant token
        const tokenResult = await fetch(`https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal`, {
            method: 'post',
            body: JSON.stringify({ "app_id": baseConfig.appId, app_secret: baseConfig.appSecret }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        let tokenJson = await tokenResult.json();
        let { code, tenant_access_token = '' } = tokenJson;
        if (code !== 0) {
            console.log('获取应用token失败');
            return false;
        }
        //获取特定用户的信息 查出receive_id 用于发送消息
        let contactResult = await client.contact.user.batchGetId({
            data: {
                mobiles: ['15850638381'],
                include_resigned: true,
            },
        },
            lark.withTenantToken(tenant_access_token)
        );
        let { code: contactCode, data } = contactResult;
        if (contactCode !== 0) {
            console.log('无此用户');
            return false;
        }
        let receive_id = '';
        if (data.user_list?.length) {
            receive_id = data.user_list[0].user_id
        } else {
            console.log('未查询到匹配用户信息');
            return false;
        }
        let uuid = new Date().getTime();
        
        let phone = '15850638381';
        let money = '50w';
        let type = 'App定制';
        let content = `1.公司或需求名称（开发/设计对象）;例：***公司，设计及开发一套H5活动页;2.设计对象简介（网址、文字介绍等;例：***公司做线上化妆品售卖，针对18~35年轻女性，成立1年左右;3.明确具体的要求：例：自适应网站，活动报名表单收集、开发时间要求，预算范围等；`

        let sendResult = await client.im.message.create({
            params: {
                receive_id_type: 'open_id',
            },
            data: {
                receive_id: receive_id,
                msg_type: 'post',
                content: `{\"zh_cn\":{\"title\":\"定制需求消息\",\"content\":[[{\"tag\":\"text\",\"text\":\"手机号:${phone}\"}],[{\"tag\":\"text\",\"text\":\"项目预算:${money}\"}],[{\"tag\":\"text\",\"text\":\"服务类型:${type}\"}],[{\"tag\":\"text\",\"text\":\"具体需求:${content}\"}]]}}`,
                uuid,
            },
        },
            lark.withTenantToken(tenant_access_token)
        )
        // await prisma.consult.create({ data });
        return NextResponse.json(responseData(200, '提交成功，请耐心等待我们的联系'))
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