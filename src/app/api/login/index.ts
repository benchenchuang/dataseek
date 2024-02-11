import { prisma } from "@/libs/db";
import { decryption, encryption } from "../encrypt";
import { signJWT } from "../jwt";

//校验用户登录
export const authenticate = async (username: string, password: string) => {
    try {
        // let encryptPassword = encryption('123456');
        // console.log(encryptPassword)
        if (!username) {
            return { status: 401, message: '用户名不能为空' }
        }
        if (!password) {
            return { status: 401, message: '密码不能为空' }
        }
        let userInfo = await prisma.user.findUnique({ where: { username } });
        if (!userInfo) {
            return { status: 401, message: '用户名不存在' }
        }
        let isPermission = decryption(password, userInfo.password as string)
        if (!isPermission) {
            return { status: 401, message: '登录密码错误' }
        }
        //根据用户信息生成token返回
        let jwtToken = await signJWT(userInfo as any);
        return {
            status: 200,
            message: '登录成功',
            data: userInfo,
            token: jwtToken
        }
    } catch (err) {
        return { status: 401, message: '登录失败' }
    }

}