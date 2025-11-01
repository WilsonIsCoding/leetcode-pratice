/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    let set = new Set(nums);
    let dummyNode = new ListNode(0, head);
    let pre = dummyNode;
    let cur = head;
    while (cur) {
        if (set.has(cur.val)) {
            pre.next = cur.next
        } else {
            pre = pre.next;
        }
        cur = cur.next
    }
    return dummyNode.next
};