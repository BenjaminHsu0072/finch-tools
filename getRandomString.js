"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = void 0;
/***
 * 获取一个随机字符串，默认32位；
 * @param len 字符串的长度
 * @returns {string}
 */
function getRandomString(len = 32) {
    //default is 32 默认长度为32位
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let maxPos = chars.length;
    let n = '';
    for (let i = 0; i < len; i++) {
        n += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return n;
}
exports.getRandomString = getRandomString;
