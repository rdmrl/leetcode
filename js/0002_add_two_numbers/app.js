let listNode = require('./list_node');
let addNum = require('./add_two_numbers');

const l1 = listNode.buildList( [2, 4, 3] );
const l2 = listNode.buildList( [5, 6, 4] );

listNode.printList( l1 );
listNode.printList( l2 );

const listSum = addNum.addTwoNumbers( l1, l2 );
listNode.printList( listSum, 'list sum:' );

const l3 = listNode.buildList( [ 9, 9, 9, 9, 9, 9, 9 ] );
const l4 = listNode.buildList( [ 9, 9, 9, 9 ] );
const sum1 = listNode.toArray( addNum.addTwoNumbers( l3, l4 ) );
