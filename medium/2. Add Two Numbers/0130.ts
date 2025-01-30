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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let current = new ListNode()
    let origin = current
    let addOne = 0
    while (l1 || l2) {
        let v1 = 0
        let v2 = 0
        if (l1) {
            v1 = l1.val
            l1 = l1.next
        }
        if (l2) {
            v2 = l2.val
            l2 = l2.next
        }
        let sum = v1 + v2 + addOne
        if (sum > 9) {
            addOne = 1
            sum -= 10
        } else {
            addOne = 0
        }
        current.next = new ListNode(sum)
        current = current.next
    }
    if (addOne == 1) current.next = new ListNode(1)
    return origin.next
};