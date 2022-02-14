/**
 * =====

 Given a string s, find the length of the longest substring without repeating characters.

 * =====
 */

module.exports = {
  findSubstring: function( s ) {
    let length = 0;

    let newStrArr = [];
    for( let startIx = 0; startIx < s.length; startIx++ ) {
      const nextIx = Math.min( s.length, startIx + 1 );
      if( s[ startIx ] === s[ nextIx ] ) {
      } else {
        newStrArr.push( s[startIx] );
      }
    }

    const newStr = newStrArr.join('');
    console.log( newStr );

    if( newStr.length <= 1 ) {
      return newStr.length;
    }

    // Build substrings.
    for( let startIx = 0; startIx < s.length; startIx++ ) {

      // Start with a substring of at least two characters from the current index.
      for( let endIx = startIx + 2; endIx < s.length; endIx++ ) {

        // Extract the substring.
        const subString = newStr.substring( startIx, endIx );

        // Check if this substring is elsewhere in the input string,
        // AFTER the current occurrence.
        const subIx = newStr.indexOf( subString, endIx - 2 );

        console.log( subString, 'subIx:', subIx, 'startIx:', startIx, 'endIx:', endIx, 'len:', subString.length );
        if( subIx !== -1 && subIx > startIx + subString.length - 1 ) {
          console.log('match:', startIx, subString.length);
        console.log('-----------');
          length = Math.max( length, subString.length );
        }
      }
        console.log('-----------');

    }

    return length;
  }
};
