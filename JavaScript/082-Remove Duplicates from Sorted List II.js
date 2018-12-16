// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:

// Input: 1->1->1->2->3
// Output: 2->3

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
function deleteDuplicates(head) {
  if (head === null) {
    return head
  }
  let nodeHead = new ListNode(0)
    nodeHead.next = head, 
    prev = nodeHead,
    cur = head
  while(cur !== null) {
    while (cur.next !== null && cur.val === cur.next.val) {
      cur = cur.next
    }
    if (prev.next === cur) {
      prev = prev.next
    } else {
      prev.next = cur.next
    }
    cur = cur.next
  }
  return nodeHead.next
}
