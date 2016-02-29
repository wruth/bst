(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        constants = exports.nodeconstants;

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

        insertNode(newNode) {

            if (newNode.key < this.key) {
                _insertNodeBySide.call(this, newNode, constants.LEFT);
            }
            else {
                _insertNodeBySide.call(this, newNode, constants.RIGHT);
            }
        }

        traverse(traverser, callback) {
            traverser(this, callback);
        }
    }

    exports.Node = Node;
}(window));
