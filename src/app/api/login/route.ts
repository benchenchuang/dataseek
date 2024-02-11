import { NextRequest, NextResponse } from "next/server";
import { responseData } from "@/app/api/base.interface";
import { decryption } from "../encrypt";
import { signJWT } from "../jwt";
import { prisma } from "@/libs/db";
/**
 * 登录
 * @param req 
 * @returns 
 */
export const POST = async (req: NextRequest) => {
    try {
        let data = await req.json();
        let { username, password } = data;
        if (!username) {
            return NextResponse.json(responseData(0, `请输入用户名`))
        }
        if (!password) {
            return NextResponse.json(responseData(0, `请输入密码`))
        }
        //根据username查询用户，判断是否管理员以及密码校验是否正确
        let userInfo = await prisma.user.findUnique({ where: { username } });
        if (!userInfo) {
            return NextResponse.json(responseData(0, `无${username}用户`))
        }
        let isPermission = decryption(password, userInfo.password as string)
        if (!isPermission) {
            return NextResponse.json(responseData(0, `登录密码错误`))
        }
        //根据用户信息生成token返回
        let jwtToken = await signJWT(userInfo as any);

        return NextResponse.json(responseData(200, '登录成功', {
            token: jwtToken,
            ...userInfo,
            password: '',
        }), {
            headers: {
                'Set-Cookie': `Admin-Token=${jwtToken};path=/;`
            }
        })
    } catch (err: any) {
        return NextResponse.json(responseData(0, `登录失败`))
    }
}

/**
 * 退出
 */
export const PUT = async (req: NextRequest) => {
    return NextResponse.json(responseData(200, `操作成功`), {
        headers: {
            'Set-Cookie': `Admin-Token=;path=/;`
        }
    })
}