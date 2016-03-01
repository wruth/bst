#Binary Search Tree
## About
CS type implementation of a Binary Search Tree. Based on an implementation by Loiane Groner in her book [Learning JavaScript Data Structures and Algorithms](https://www.packtpub.com/application-development/learning-javascript-data-structures-and-algorithms). My implementation departs from hers in making `instertNode()` and `removeNodeWithKey()` methods of the `Node` class as opposed to the `BinarySearchTree` class. I also pull out the traversal methods from `BinarySearchTree`, making these instead a collection of functions capable of crawling the node structure and invoking a callback. This is a fairly 'toy' implementation, put together for my own edification for working with BSTs. The node keys are expected to be numbers. A more sophisticated implementation would abstract that requirement, and possibly provide a comparison function in the `Node` constructor to allow a node to evaluate more complex lesser and greater 'key's.