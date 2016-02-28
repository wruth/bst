(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        Node = exports.Node;

    class BinarySearchTree {

        constructor() {

            const properties = {
                root: null
            };

            internal.set(this, properties);
        }

        insert(key) {
            const properties = internal.get(this),
                newNode = new Node(key);

            if (properties.root === null) {
                properties.root = newNode;
            }
            else {
                properties.root.insertNode(newNode);
            }

            return this;
        }

        traverse(traverser, callback) {
            const properties = internal.get(this);

            if (properties.root !== null) {
                properties.root.traverse(traverser, callback);
            }
        }
    }

    exports.BinarySearchTree = BinarySearchTree;

}(window));
