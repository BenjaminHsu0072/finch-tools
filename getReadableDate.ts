import {fixIntegerLength} from "./fixIntegerLength";

/**
 * 获取可读的时间戳字符串，精确到毫秒；
 *@returns {string}
 */
function getReadableDate():string {
    let t = new Date(Date.now());
    let y = t.getFullYear();
    let m = fixIntegerLength(t.getMonth()+1,2);
    let d = fixIntegerLength(t.getDate(),2);
    let h = fixIntegerLength(t.getHours(),2);
    let n = fixIntegerLength(t.getMinutes(),2);
    let s = fixIntegerLength(t.getSeconds(),2);
    let ms = fixIntegerLength(t.getSeconds(),3);
    return y+"_"+m+"_"+d+"_"+h+"_"+n+"_"+s+"__"+ms;
}

export {getReadableDate}