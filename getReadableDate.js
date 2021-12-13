"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadableDate = void 0;
const fixIntegerLength_1 = require("./fixIntegerLength");
/**
 *@returns {string} Readable time info
 */
function getReadableDate() {
    let t = new Date(Date.now());
    let y = t.getFullYear();
    let m = fixIntegerLength_1.fixIntegerLength(t.getMonth() + 1, 2);
    let d = fixIntegerLength_1.fixIntegerLength(t.getDate(), 2);
    let h = fixIntegerLength_1.fixIntegerLength(t.getHours(), 2);
    let n = fixIntegerLength_1.fixIntegerLength(t.getMinutes(), 2);
    let s = fixIntegerLength_1.fixIntegerLength(t.getSeconds(), 2);
    let ms = fixIntegerLength_1.fixIntegerLength(t.getSeconds(), 3);
    return y + "_" + m + "_" + d + "_" + h + "_" + n + "_" + s + "__" + ms;
}
exports.getReadableDate = getReadableDate;
