(function (exports) {
    'use strict';

    function inOrderTraverse(node, callback) {

        if (node.left) {
            node.left.traverse(inOrderTraverse, callback);
        }

        callback(node.key);

        if (node.right) {
            node.right.traverse(inOrderTraverse, callback);
        }
    }

    function preOrderTraverse(node, callback) {

        callback(node.key);

        if (node.left) {
            node.left.traverse(preOrderTraverse, callback);
        }

        if (node.right) {
            node.right.traverse(preOrderTraverse, callback);
        }
    }

    function postOrderTraverse(node, callback) {

        if (node.left) {
            node.left.traverse(postOrderTraverse, callback);
        }

        if (node.right) {
            node.right.traverse(postOrderTraverse, callback);
        }

        callback(node.key);
    }

    const traversers = {

        inOrderTraverse: inOrderTraverse,
        preOrderTraverse: preOrderTraverse,
        postOrderTraverse: postOrderTraverse
    };

    exports.traversers = traversers;

}(window));
