/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor( val, next ) {
    this.val = ( val === undefined ? 0 : val );
    this.next = ( next === undefined ? null : next );
  }
};

module.exports = {
  buildList: function( inputArray ) {

    // The next node in the list. Initially null to be used with the 
    // last node in the list.
    let nextNode;

    // Start with the last element in the array and work backwards
    // to build the list.
    for ( let ix = inputArray.length - 1; ix >= 0; ix-- ) {
      // Assign the previously created node as the next in the list.
      nextNode = new ListNode( inputArray[ ix ], nextNode );
    }

    // Return the first node in the LinkedList.
    return nextNode;
  },

  toArray: function( list ) {
    if ( list === undefined ) {
      return;
    }

    let values = [];

    let node = list;
    do {
      values.push( node.val );
      node = node.next;
    } while ( node );

    return values;
  },

  printList: function( list, label = 'printList:' ) {
    const values = module.exports.toArray( list );
    console.log( label, values );
  }
};