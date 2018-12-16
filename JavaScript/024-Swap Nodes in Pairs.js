// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function swapPairs(head) {
    if(head === null || head.next === null) return head;
    let headnode = new ListNode();
    headnode.next = head;
    let cur = headnode;
    while(cur.next !== null && cur.next.next !== null) {
        let first = cur.next;
        let second = cur.next.next;
        first.next = second.next;
        cur.next = second;
        cur.next.next = first;
        cur = cur.next.next;
    }
    return headnode.next;
}
//该方法来源于网站
var swapPairs = function(head) {
    let prev
    let node1 = head
    let node2 = node1 ? node1.next : null
    while(node1 && node2) {
        if (prev) {
            prev.next = swap(node1, node2)
        } else {
            head = swap(node1, node2)
        }
        prev = node1
        node1 = node1.next
        node2 = node1 ? node1.next : null
    }
    return head

    function swap(node1, node2) {
        node1.next = node2.next
        node2.next = node1
        return node2
    }
};