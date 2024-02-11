/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 16:23:12
 * @LastEditTime: 2024-02-10 14:57:29
 * @FilePath: /dataseek-website/prisma/seed.ts
 */
import { PrismaClient } from '@prisma/client'

const prisma =  new PrismaClient();

async function main() {
    const alice = await prisma.user.create({
        data: {
            username: 'dataseek',
            name: 'dataseek',
            password: '$2a$10$YEpO4qcOxhYTs78GWzNyP.ZM3MKooK48ryMPLmKjhMLTR52cIAOrK',//123456
            email:'dataseek@qq.com',
            phone: '13223453456'
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })