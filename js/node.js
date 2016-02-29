(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        constants = exports.nodeconstants;

    /**
     * Traverser function to find the minimum node relative to a supplied node.
     *
     * @param {Node} node a node to look for the minimum node of
     * @param {Function} callback a callback to call with the minimkum node
     */
    function findMinNode(node, callback) {

        if (node[constants.LEFT] !== null) {
            node[constants.LEFT].traverse(findMinNode, callback);
        }
        // at the min node
        else {
            callback(node);
        }
    }

    function _insertNodeBySide(node, side) {
        const properties = internal.get(this);

        if (this[side] === null) {
            properties[side] = node;
        }
        else {
            properties[side].insertNode(node);
        }
    }

    class Node {

        constructor(key) {
            const properties = {
                key: key,
                [constants.LEFT]: null,
                [constants.RIGHT]: null
            };

            internal.set(this, properties);
        }

        get key() {
            return internal.get(this).key;
        }

        get left() {
            return internal.get(this)[constants.LEFT];
        }

        get right() {
            return internal.get(this)[constants.RIGHT];
        }

        get isLeafNode() {
            const properties = internal.get(this);

            return (properties[constants.LEFT] === null && properties[constants.RIGHT] === null);
        }

        insertNode(newNode) {

            if (newNode.key < this.key) {
                _insertNodeBySide.call(this, newNode, constants.LEFT);
            }
            else {
                _insertNodeBySide.call(this, newNode, constants.RIGHT);
            }
        }

        removeNodeWithKey(key) {
            const properties = internal.get(this);

            if (key < this.key) {
                properties[constants.LEFT] = properties[constants.LEFT].removeNodeWithKey(key);
            }
            else if (key > this.key) {
                properties[constants.RIGHT] = properties[constants.RIGHT].removeNodeWithKey(key);
            }
            // key is equal to this.key
            else {
                let minNode;

                // case 1: a leaf node
                // if removing this node, no child nodes, return null for the parent to use as a pointer
                if (this.isLeafNode) {
                    return null;
                }

                // case 2: a node with only one child node
                // if removing this node and no left node, return the right node for the parent to use as a pointer
                if (properties[constants.LEFT] === null) {
                    return properties[constants.RIGHT];
                }
                // if removing this node and no right node, return the left node for the parent to use as a pointer
                else if (properties[constants.RIGHT] === null) {
                    return properties[constants.LEFT];
                }

                // case 3: a node with two child nodes
                findMinNode(properties[constants.RIGHT], function (node) {
                    minNode = node;
                });

                properties.key = minNode.key;
                properties[constants.RIGHT] = properties[constants.RIGHT].removeNodeWithKey(minNode.key);
            }

            return this;
        }

    }

    exports.Node = Node;
}(window));
