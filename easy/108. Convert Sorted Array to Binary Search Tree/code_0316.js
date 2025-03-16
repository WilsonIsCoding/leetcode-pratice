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
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

  return root;
};

// 「層序（level order）」建樹，類似「完全二元樹」的結構
const arrayToBinaryTree = (arr) => {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let index = 1;

  while (index < arr.length) {
    const node = queue.shift();
    if (index < arr.length) {
      node.left = new TreeNode(arr[index]);
      queue.push(node.left);
      index++;
    }
    if (index < arr.length) {
      node.right = new TreeNode(arr[index]);
      queue.push(node.right);
      index++;
    }
  }
  return root;
};
