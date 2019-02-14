// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
  if (head === null) {
    return null
  }
  let dhead = new ListNode(0)
  dhead.next = head
  let pre = dhead
  for (let i = 0; i < m - 1; i++) {
    pre = pre.next
  }
  let start = pre.next
  let then = start.next
  // n - m: time
  for (let i = 0; i < n - m; i++) {
    start.next = then.next
    then.next = pre.next
    pre.next = then
    then = start.next
  }
  return dhead.next
}
