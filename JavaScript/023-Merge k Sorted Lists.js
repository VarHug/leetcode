// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//普通reduce迭代,130/130 TLE 
function mergeKLists(lists) {
    if(lists === null || lists.length === 0)
        return null;
    if(lists.length === 1)
        return lists[0];
    let head = new ListNode(0);
    lists.reduce(function(prev, cur, index, array) {
        let p = head;
        while(prev !== null || cur !== null) {
            if(prev === null) {
                p.next = new ListNode(cur.val);
                p = p.next;
                cur = cur.next;
                continue;
            }
            if(cur === null) {
                p.next = new ListNode(prev.val);
                p = p.next;
                prev = prev.next;
                continue;
            }
            if(prev.val < cur.val) {
                p.next = new ListNode(prev.val);
                p = p.next;
                prev = prev.next;
            } else {
                p.next = new ListNode(cur.val);
                p = p.next;
                cur = cur.next;
            }
        }
        return head.next;
    });
    return head.next;
};

//归并迭代
function mergeKLists(lists) {
    return merge(lists, 0, lists.length - 1);
    function merge(lists, begin, end) {
        if(begin === end) return lists[begin];
        if(begin < end) {
            let mid = begin + ((end - begin) >> 1);
            let l1 = merge(lists, begin, mid);
            let l2 = merge(lists, mid + 1, end);
            return sort(l1, l2);
        } else {
            return null;
        }
    }
    function sort(l1, l2) {
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
    // function sort(l1, l2) {
    //     if(l1 === null) return l2;
    //     if(l2 === null) return l1;
    //     if(l1.val < l2.val) {
    //         l1.next = sort(l1.next, l2);
    //         return l1;
    //     } else {
    //         l2.next = sort(l1, l2.next);
    //         return l2;
    //     }
    // }
}
