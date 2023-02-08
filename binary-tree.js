"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  // breadth first
  minDepthToIncompleteNode() {
    let countLeft = this.left ? this.left.minDepthToIncompleteNode() : 0;

    let countRight = this.right ? this.right.minDepthToIncompleteNode() : 0;

    return 1 + Math.min(countLeft, countRight)
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;

    return this.root.minDepthToIncompleteNode();

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {

  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

let smallTree;
let largeTree;
let emptyTree;
let longTree;

function beforeEach() {
  emptyTree = new BinaryTree();

  // build small tree
  //
  //            root
  //              |
  //              6
  //            /   \
  //           5     5
  //

  let smallLeft = new BinaryTreeNode(5);
  let smallRight = new BinaryTreeNode(5);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  smallTree = new BinaryTree(smallRoot);

  // build large tree
  //
  //                  root
  //                   |
  //                   6
  //                /     \
  //               5       5
  //                    /     \
  //                   3       1
  //                 /   \
  //                2     1
  //

  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

  // build long tree
  //                   6
  //                /     \
  //               5       5
  //              /         \
  //             4           3
  //            /          /  \
  //           3          2    1
  //         /   \       /
  //        2     1     1
  //

  let j = new BinaryTreeNode(1);
  let i = new BinaryTreeNode(1);
  let h = new BinaryTreeNode(2);
  let g = new BinaryTreeNode(1);
  let f = new BinaryTreeNode(2, j, null);
  let e = new BinaryTreeNode(3, h, i);
  let d = new BinaryTreeNode(3, f, g);
  let c = new BinaryTreeNode(4, e, null);
  let b = new BinaryTreeNode(5, null, d);
  let a = new BinaryTreeNode(5, c, null);
  let r = new BinaryTreeNode(6, a, b);
  longTree = new BinaryTree(r);
};

beforeEach();
smallTree.minDepthToIncompleteNode();

module.exports = { BinaryTree, BinaryTreeNode };
