// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
    let sign = new ListNode;
    sign.next = head;
    let left = sign;
    let right = sign;
    for(let i = 1; i <= n + 1; i++) {
        right = right.next;
    }
    while(right != null) {
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return sign.next;
};

//避免创建新节点方法(来源于Leetcode网站)
var removeNthFromEnd = function(head, n) {
    if(!head){
        return null;
    }
    let slowCount = 1;
    let slowPointer = head;
    let fastCount = 1;
    let fastPointer = head;
    
    while(fastPointer.next){
        fastCount++;
        fastPointer = fastPointer.next;
        if(fastPointer.next){
            fastCount++;
            fastPointer = fastPointer.next;
        }
    }
    
    if((fastCount - n) === 0){
        return head = head.next ? head.next : null;
    }
    
    while(slowPointer){
        if(slowCount === (fastCount - n)){
            slowPointer.next = slowPointer.next ? slowPointer.next.next : null;
            if(!slowPointer.next){
                return head;
            }
        }
        slowCount++;
        slowPointer = slowPointer.next; 
    }
    return head;
};