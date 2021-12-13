"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixIntegerLength = void 0;
/**
 * fix the Integer Length as String
 * @param theNumber
 * @param length
 */
function fixIntegerLength(theNumber, length) {
    let s = theNumber.toString();
    let zl = length - s.length;
    let r = "";
    while (r.length < zl)
        r += "0";
    r += theNumber;
    return r;
}
exports.fixIntegerLength = fixIntegerLength;
