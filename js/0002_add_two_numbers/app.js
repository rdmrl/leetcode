import ListNode from './list_node';

let addNum = require('./add_two_numbers');

ListNode l1D3 = new ListNode(4);
ListNode l1D2 = new ListNode(6, l1D3);
ListNode l1 = new ListNode(5, l1D2);

ListNode l2D3 = new ListNode(8);
ListNode l2D2 = new ListNode(0, l2D3);
ListNode l2 = new ListNode(7, l2D2);
