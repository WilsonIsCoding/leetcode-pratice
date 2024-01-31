function isSame(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true;
    if (root && !subRoot || !root && subRoot) return false;
    return root.val == subRoot.val && isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false;   
    if (isSame(root, subRoot))  {
        return true;
    }
    return  isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};