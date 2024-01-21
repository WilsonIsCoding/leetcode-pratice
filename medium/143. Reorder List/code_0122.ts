/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {
    let slow = middleNode(head);
    let reverseNode = reverse(slow.next)
    slow.next = null
    merge(head, reverseNode)
};
function middleNode(head: ListNode): ListNode {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow
}
function reverse(head: ListNode): ListNode {
    let previous = null
    let current = head;

    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous
}
function merge(headA: ListNode, headB: ListNode) {
    while (headB) {
        let temp = headA.next;
        headA.next = headB;
        headA = headA.next;
        headB = temp
    }
}