"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * =====
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
 rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"

 * =====
 */
function convert(s, numRows) {
    if (numRows === 1) {
        // Don't need to format the string.
        return s;
    }
    const numChars = s.length;
    const charsPerBlock = (numRows * 2) - 2;
    const lastRowIx = numRows - 1;
    // console.log('numChars:', numChars, 'charsPerBlock:', charsPerBlock);
    let output = new Array(numChars);
    let outIx = 0;
    for (let rowIx = 0; rowIx < numRows; rowIx++) {
        let charIx = 0;
        let colIx = 0;
        // console.log('charIx:', charIx, 'numChars', numChars);
        while (charIx < numChars) {
            if (colIx === 0) {
                // The first column in each row.
                charIx = rowIx;
            }
            else {
                if (rowIx === 0 || rowIx === lastRowIx) {
                    charIx += (charsPerBlock);
                }
                else {
                    let colOffset = 0;
                    if ((colIx % 2) === 0) {
                        colOffset = (2 * rowIx);
                    }
                    else {
                        colOffset = charsPerBlock - (2 * rowIx);
                    }
                    charIx += colOffset;
                }
            }
            colIx++;
            if (charIx < numChars) {
                output[outIx++] = s[charIx];
            }
        }
    }
    return output.join('');
}
exports.default = convert;
