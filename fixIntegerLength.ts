/**
 * fix the Integer Length as String
 * @param theNumber
 * @param length
 */
function fixIntegerLength(theNumber:number,length:number):string {
     let s = theNumber.toString();
     let zl = length - s.length;
     let r = "";
     while (r.length<zl) r+="0";
     r += theNumber;
     return r;
}

export {fixIntegerLength}