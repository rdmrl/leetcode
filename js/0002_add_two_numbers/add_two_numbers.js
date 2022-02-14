/**
 * =====

 You are given two non-empty linked lists representing two non-negative integers. 
 The digits are stored in reverse order, and each of their nodes contains a single 
 digit. Add the two numbers and return the sum as a linked list.

 You may assume the two numbers do not contain any leading zero, except the 
 number 0 itself.

 * =====
 */

let listNode = require( './list_node' );

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
module.exports = {
  addTwoNumbers: function( l1, l2 ) {

    let carry = 0;
    let hasCarry = false;

    let sumValues = [];

    do {
      let val1 = ( ( l1 ) ? l1.val : 0 );
      let val2 = ( ( l2 ) ? l2.val : 0 );
      let sum = val1 + val2;

      // If there is a carry from the previous operation, add it to the sum.
      if ( hasCarry ) {
        sum += 1;
        // The carry has been used up; reset the flag.
        hasCarry = false;
      }

      // If there are two digits, set the carry flag.
      if ( sum > 9 ) {
        sum = sum % 10;
        hasCarry = true;
      }

      // Save the digit.
      sumValues.push( sum );

      // Get the next nodes.
      l1 = ( l1 ) ? l1.next : null;
      l2 = ( l2 ) ? l2.next : null;
    } while ( l1 || l2 );

    // If there is a pending carry, add a new digit.
    if ( hasCarry ) {
      sumValues.push( 1 );
    }

    return listNode.buildList( sumValues );
  }
};