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
export default function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    // Don't need to format the string.
    return s;
  }

  const numChars = s.length;
  const charsPerBlock = numRows * 2 - 2;
  const lastRowIx = numRows - 1;

  let output: Array<string> = new Array<string>(numChars);
  let outIx = 0;

  for (let rowIx = 0; rowIx < numRows; rowIx++) {
    let charIx = 0;
    let colIx = 0;

    while (charIx < numChars) {
      if (colIx === 0) {
        // The first column in each row.
        charIx = rowIx;
      } else {
        if (rowIx === 0 || rowIx === lastRowIx) {
          charIx += charsPerBlock;
        } else {
          let colOffset = 0;
          if (colIx % 2 === 0) {
            colOffset = 2 * rowIx;
          } else {
            colOffset = charsPerBlock - 2 * rowIx;
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

  return output.join("");
}
