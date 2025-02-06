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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let ans = new ListNode(head.val);
  let follow = ans;
  let pin = head.next;
  while (pin) {
    if (pin.val !== follow.val) {
      follow.next = new ListNode(pin.val);
      follow = follow.next;
    }
    pin = pin.next;
  }
  return ans;
}
