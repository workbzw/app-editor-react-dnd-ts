export function random() {
    let str = (new Date().getTime()).toString()
    // str = str.substring(0, str.length - 1)
    // 用户输入
    const min = 100000;
    const max = 999999;
    // 生成随机数
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    return str + a
}