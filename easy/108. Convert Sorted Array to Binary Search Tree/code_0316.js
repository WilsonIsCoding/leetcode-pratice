/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// [1,2,3,4,5,6,7,8,9]
// middleNumber = 5
// left = [1,2,3,4]
// right = [6,7,8,9]
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

    return root
};