(function (exports) {
    'use strict';

    function inOrderTraverse(node, callback) {

        if (node.left) {
            inOrderTraverse(node.left, callback);
        }

        callback(node.key);

        if (node.right) {
            inOrderTraverse(node.right, callback);
        }
    }

    function preOrderTraverse(node, callback) {

        callback(node.key);

        if (node.left) {
            preOrderTraverse(node.left, callback);
        }

        if (node.right) {
            preOrderTraverse(node.right, callback);
        }
    }

    function postOrderTraverse(node, callback) {

        if (node.left) {
            postOrderTraverse(node.left, callback);
        }

        if (node.right) {
            postOrderTraverse(node.right, callback);
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
