// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function mergeTwoLists(l1, l2) {
    let head = new ListNode();
    let p = head;
    while(l1 !== null || l2 !== null) {
        if(l1 === null) {
            p.next = new ListNode(l2.val);
            p = p.next;
            l2 = l2.next;
            continue;
        }
        if(l2 === null) {
            p.next = new ListNode(l1.val);
            p = p.next;
            l1 = l1.next;
            continue;
        }

        if(l1.val < l2.val) {
            p.next = new ListNode(l1.val);
            p = p.next;
            l1 = l1.next;
        } else {
            p.next = new ListNode(l2.val);
            p = p.next;
            l2 = l2.next;
        }
    }
    return head.next;
}