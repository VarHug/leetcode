// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

var addTwoNumbers = function(l1, l2) {
	let head = new ListNode(0);
	let r = head;
	let sum = 0;
	while(l1 !== null || l2 !== null) {
		sum = sum / 10 | 0;
		if(l1 !== null) {
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2 !== null) {
			sum += l2.val;
			l2 = l2.next;
		}
		r.next = new ListNode(sum % 10);
		r = r.next;
	}
	if((sum / 10 | 0) > 0)
		r.next = new ListNode(1);
	return head.next;
}
