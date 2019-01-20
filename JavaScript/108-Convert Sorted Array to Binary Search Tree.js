// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null
  }
  return _insert(0, nums.length - 1)

  function _insert(left, right) {
    if (left > right) {
      return null
    }
    let _mid = ((right - left) >> 1) + left
    let _root = new TreeNode(nums[_mid])
    _root.left = _insert(left, _mid - 1)
    _root.right = _insert(_mid + 1, right)
    return _root
  }
};
