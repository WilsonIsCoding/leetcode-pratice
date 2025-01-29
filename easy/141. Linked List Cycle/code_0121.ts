
// hash表解法
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let hashMap = new Set();
  while (head) {
      if (hashMap.has(head)) {
          return true
      }
      hashMap.add(head)
      head = head.next
  }
  return false
};

// 雙指針解法
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}
