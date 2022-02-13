/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val, next) {
    this.val = ( val === undefined ? 0 : val );
    this.next = ( next === undefined ? null : next );
  }
};

let buildList = function ( inputArray ) {
  // Create a node with the last number in the input array.
  let nextNode = new ListNode( inputArray[ inputArray.length - 1 ];

  for ( let ix = inputArray.length; ix >= 0; ix-- ) {
    nextNode = new ListNode( inputArray[ix], nextNode );
  }
};

let iterateList = function ( list ) {
  
};

export { ListNode, buildList };
