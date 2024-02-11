import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/api/jwt";
import { responseData } from "./app/api/base.interface";

//api middleware
export async function middleware(request:NextRequest){
    let {pathname} = request.nextUrl
    let token:string = request.headers.get('token') || '';
    let whitePaths:string[] = ['/api/login'];
    let isWhite:number = whitePaths.findIndex(item=>item==pathname);
    //根据token判断接口返回信息
    if(isWhite==-1){
        //不在白名单，需要token验证
        // if(token){
        //     let res = await verifyToken(token);
        //     let {exp} = res.payload;
        //     let expTime = Number(exp + '000')
        //     let nowTime = Date.now();
        //     if(nowTime < expTime){
        //         console.log('登录有效期')
        //     }else{
        //         return NextResponse.json(responseData(0, `登录失效，重新登录`),{
        //             status:401
        //         });
        //     }
        // }else{
        //     return NextResponse.json(responseData(0, `认证失败，请重新登录`),{
        //         status:401
        //     });
        // }
    }
}

//设置api过滤
export const config = {
    matcher: '/api/:path*',
}