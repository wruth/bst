(function (exports) {
    'use strict';

    const internal = new WeakMap(),
        LEFT = 'left',
        RIGHT = 'right';

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
                [LEFT]: null,
                [RIGHT]: null
            };

            internal.set(this, properties);
        }

        get key() {
            return internal.get(this).key;
        }

        get left() {
            return internal.get(this)[LEFT];
        }

        get right() {
            return internal.get(this)[RIGHT];
        }

        insertNode(newNode) {

            if (newNode.key < this.key) {
                _insertNodeBySide.call(this, newNode, LEFT);
            }
            else {
                _insertNodeBySide.call(this, newNode, RIGHT);
            }
        }

        traverse(traverser, callback) {
            traverser(this, callback);
        }
    }

    exports.Node = Node;
}(window));
