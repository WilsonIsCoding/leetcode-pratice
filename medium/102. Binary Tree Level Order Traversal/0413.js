/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root]
    let result = []

    while (queue.length > 0) {
        let level = []
        levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            let shiftNode = queue.shift()
            level.push(shiftNode.val)
            if (shiftNode.left) queue.push(shiftNode.left);
            if (shiftNode.right) queue.push(shiftNode.right);
        }
        result.push(level)
    }
    return result
};