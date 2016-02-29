(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        constants = exports.nodeconstants,
        Node = exports.Node;

    function minOrMaxKey(aNode, side) {
        let node = aNode;

        if (node) {

            while (node && node[side] !== null) {
                node = node[side];
            }

            return node.key;
        }

        return null;
    }

    function searchNode(node, key) {

        if (node === null) {
            return false;
        }

        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    }

    class BinarySearchTree {

        constructor() {

            internal.set(this, null);
        }

        insert(key) {
            const rootNode = internal.get(this),
                newNode = new Node(key);

            if (rootNode === null) {
                internal.set(this, newNode);
            }
            else {
                rootNode.insertNode(newNode);
            }

            return this;
        }

        traverse(traverser, callback) {
            const rootNode = internal.get(this);

            if (rootNode !== null) {
                rootNode.traverse(traverser, callback);
            }
        }

        getMinKey() {
            const rootNode = internal.get(this);
            return minOrMaxKey(rootNode, constants.LEFT);
        }

        getMaxKey() {
            const rootNode = internal.get(this);
            return minOrMaxKey(rootNode, constants.RIGHT);
        }

        search(key) {
            return searchNode(internal.get(this), key);
        }
    }

    exports.BinarySearchTree = BinarySearchTree;

}(window));
