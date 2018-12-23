/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let sHead = new ListNode(-1)
  let lHead = new ListNode(1)
  let small = sHead
  let large = lHead
  let cur = head
  while (cur !== null) {
    if (cur.val < x) {
      small.next = cur
      small = small.next
      cur = cur.next
    } else {
      large.next = cur
      large = large.next
      cur = cur.next
    }
  }
  large.next = null
  small.next = lHead.next
  return sHead.next
}
