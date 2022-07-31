/**
 * 在正整数前补0以达到指定长度；例如将 1 修正为 001；
 * 注意：正整数！
 * @param number 需要修正的正整数；
 * @param length 指定的长度；
 * @returns { string } 修正后的字符串。
 */
function fixIntegerLength(number:number,length:number):string {
     let s = number.toString();
     let zl = length - s.length;
     let r = "";
     while (r.length<zl) r+="0";
     r += s;
     return r;
}

export {fixIntegerLength}