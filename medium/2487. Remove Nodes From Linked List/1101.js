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
var removeNodes = function (head) {
    let nodeArr = [];
    while (head) {
        nodeArr.push(head.val);
        head = head.next;
    }
    let dummyNode = new ListNode(0, null)
    let pre = dummyNode
    let curMax = -Infinity
    for (let i = nodeArr.length - 1; i >= 0; i--) {
        if (nodeArr[i] >= curMax) {
            const node = new ListNode(nodeArr[i], null)
            pre.next = node;
            pre = pre.next
            curMax = nodeArr[i]
        }
    }
    let prev = null;
    let current = dummyNode.next;
    while (current) {
        let next_node = current.next;
        current.next = prev;
        prev = current
        current = next_node
    }

    return prev
};