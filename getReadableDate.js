"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadableDate = void 0;
const fixIntegerLength_1 = require("./fixIntegerLength");
/**
 * 获取可读的时间戳字符串，精确到毫秒；
 *@returns {string}
 */
function getReadableDate() {
    let t = new Date(Date.now());
    let y = t.getFullYear();
    let m = (0, fixIntegerLength_1.fixIntegerLength)(t.getMonth() + 1, 2);
    let d = (0, fixIntegerLength_1.fixIntegerLength)(t.getDate(), 2);
    let h = (0, fixIntegerLength_1.fixIntegerLength)(t.getHours(), 2);
    let n = (0, fixIntegerLength_1.fixIntegerLength)(t.getMinutes(), 2);
    let s = (0, fixIntegerLength_1.fixIntegerLength)(t.getSeconds(), 2);
    let ms = (0, fixIntegerLength_1.fixIntegerLength)(t.getSeconds(), 3);
    return y + "_" + m + "_" + d + "_" + h + "_" + n + "_" + s + "__" + ms;
}
exports.getReadableDate = getReadableDate;
