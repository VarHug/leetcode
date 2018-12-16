// Given a list, rotate the list to the right by k places, where k is non-negative.


// Example:

// Given 1->2->3->4->5->NULL and k = 2,

// return 4->5->1->2->3->NULL.

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
function rotateRight(head, k) {
    if (!head) {
        return head;
    }
    let len = 1,
        cur = head,
        res = head;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    cur.next = head;


    if (k %= len) {
        for (let i = 0, loop = len - k; i < loop; i++) {
            cur = cur.next;
        }
    }
    res = cur.next;
    cur.next = null;

    return res;
}

var listLengh = function (headNode) {
    if (!headNode) {
        return headNode;
    }
    let len = 1,
        cur = headNode;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    return len;
};