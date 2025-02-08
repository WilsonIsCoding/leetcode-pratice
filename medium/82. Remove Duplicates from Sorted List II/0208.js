/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let fast = head;
    let slow = new ListNode(0, head);
    let prev = slow;
    while (fast) {
        if (fast.next && fast.val == fast.next.val) {
            while (fast.next && fast.val == fast.next.val) {
                fast = fast.next
            }
            prev.next = fast.next
        } else {
            prev = prev.next
        }
        fast = fast.next
    }
    return slow.next
};