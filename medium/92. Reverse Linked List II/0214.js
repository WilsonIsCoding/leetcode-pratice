/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;  // 没有翻转的必要
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    // 寻找翻转部分的前一个节点
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    
    // 翻转部分的第一个节点
    let curr = prev.next;
    let next = curr.next;
    
    // 翻转指定区间 [left, right]
    for (let i = 0; i < right - left; i++) {
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
        next = curr.next;
    }
    
    return dummy.next;
};
