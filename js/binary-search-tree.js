(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        constants = exports.nodeconstants,
        Node = exports.Node;

    function minOrMaxKey(pNode, side) {
        let node = pNode;

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
            return searchNode(node[constants.LEFT], key);
        }
        else if (key > node.key) {
            return searchNode(node[constants.RIGHT], key);
        }

        return true;
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
                traverser(rootNode, callback);
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

        removeNodeWithKey(key) {
            const rootNode = internal.get(this);

            if (rootNode !== null) {
                internal.set(this, rootNode.removeNodeWithKey(key));
            }
        }
    }

    exports.BinarySearchTree = BinarySearchTree;

}(window));
