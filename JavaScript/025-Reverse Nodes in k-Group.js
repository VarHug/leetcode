// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// You may not alter the values in the nodes, only nodes itself may be changed.

// Only constant memory is allowed.

// For example,
// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)

function reverseKGroup(head, k) {
    if(head === null || head.next === null || k < 2) return head;
    let headnode = new ListNode(0);
    headnode.next = head;
    let cur = headnode;
    let p = head;
    let temp;
    let i = 1;
    while(p !== null) {
        if(i < k) {
            i++;
            p = p.next;
            continue;
        }
        head = cur.next;
        while(cur.next !== p) {
            temp = cur.next;
            cur.next = temp.next;
            temp.next = p.next;
            p.next = temp;
        }
        p = head.next;
        cur = head;
        i = 1;
    }
    return headnode.next;
};