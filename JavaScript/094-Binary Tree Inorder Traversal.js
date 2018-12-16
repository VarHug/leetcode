/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  function inorderTraversal1(node) {
    if (node === null) {
      return
    }
    inorderTraversal1(node.left)
    res.push(node.val)
    inorderTraversal1(node.right)
  }
  let res = []
  inorderTraversal1(root)
  return res
}
