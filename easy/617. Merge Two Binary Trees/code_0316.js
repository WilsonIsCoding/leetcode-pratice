/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) {
        return null
    }
    if (!root1 && root2) {
        return root2
    }
    if (root1 && !root2) {
        return root1
    }
    let result = new TreeNode(root1.val + root2.val)
    result.left = mergeTrees(root1.left, root2.left)
    result.right = mergeTrees(root1.right, root2.right)
    return result
};