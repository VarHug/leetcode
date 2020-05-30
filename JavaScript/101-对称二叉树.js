// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
//  

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
var isMirror = function(left, right) {
  if (left && right) {
    // 都不为null
    return (left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right); 
  } else if (!left && !right) {
    // 都为null
    return true;
  }
  // 一边为null
  return false;
}

/**
 * @description 递归解法
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root) {
    return isMirror(root.left, root.right);
  }
  return false;
};

/**
 * @description 迭代解法
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left && right) {
      // 都不为null
      if (left.val !== right.val) {
        return false;
      }
      // 保证先left，后right
      queue.push(left.left);
      queue.push(right.right);
      queue.push(left.right);
      queue.push(right.left);
    } else if (!left && !right) {
      // 都一样，去比之后的两个
      continue;
    } else {
      return false;
    }
  }
  return true;
};
