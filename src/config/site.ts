/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 21:04:28
 * @LastEditTime: 2024-02-07 22:07:34
 * @FilePath: /dataseek-website/src/config/site.ts
 */
export type SiteConfig = typeof siteConfig;
export interface MenuItem {
    name:string
    path:string
}

export const siteConfig = {
    name: "南京数琛-解决方案服务商",
    description: "南京数琛信息技术有限公司,专业的软件APP开发供应商,提供各类定制化软件开发服务，南京APP开发,APP开发,软件开发,软件外包,软件开发,软件定制开发,小程序开发,物联网开发,IoT开发,Android开发,iOS开发",
    keywords: "南京数琛,南京APP开发,原生APP开发,APP开发,软件开发,软件外包,软件开发,软件定制开发,小程序开发,物联网开发,IoT开发,Android开发,iOS开发",
    phone:'15850638381',
    telephone:'15850638381',
    email:'service@minum.cloud',
    address:"南京市江宁区秣陵街道竹山路319号2幢105室",
    companyName:'南京数琛信息技术有限公司'
}

export const mapKey = 'b4990743cbd5174a1d8bb548f357e3ee';

export const Home = '/home';

export const menuList:MenuItem[] = [
    {
        name: "首页",
        path: '/home'
    },
    {
        name: "合作方式",
        path: '/cooperate'
    },
    {
        name: "关于我们",
        path: '/about'
    },
    {
        name: "成功案例",
        path: '/cases'
    },
    {
        name: "联系我们",
        path: '/contact'
    }
]