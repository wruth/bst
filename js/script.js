(function (exports) {
    'use strict';

    function print(value) {
        console.log(value);
    }

    const tree = new exports.BinarySearchTree();
    tree.insert(11)
        .insert(7)
        .insert(15)
        .insert(5)
        .insert(3)
        .insert(9)
        .insert(8)
        .insert(10)
        .insert(13)
        .insert(12)
        .insert(14)
        .insert(20)
        .insert(18)
        .insert(25)
        .insert(6);

    console.log('in order traverse');
    tree.traverse(exports.traversers.inOrderTraverse, print);
    console.log('\npre order traverse');
    tree.traverse(exports.traversers.preOrderTraverse, print);
    console.log('\npost order traverse');
    tree.traverse(exports.traversers.postOrderTraverse, print);

}(window));
