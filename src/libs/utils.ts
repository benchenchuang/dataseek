/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 09:46:33
 * @LastEditTime: 2024-02-07 20:43:25
 * @FilePath: /dataseek-website/src/libs/utils.ts
 */
// 日期格式化
export const formatDate = (timestamp: string) => {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let hour = ("0" + date.getHours()).slice(-2);
    let minute = ("0" + date.getMinutes()).slice(-2);
    let second = ("0" + date.getSeconds()).slice(-2);

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
//手机号显示格式化
export const formatPhone = (phone: string) => {
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}