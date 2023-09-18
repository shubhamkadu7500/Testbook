// get min number in tree
var TreeNode = /** @class */ (function () {
    function TreeNode(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var idx = 0;
function treeConstructor(arr) {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    var nn = new TreeNode(arr[idx]);
    idx++;
    var leftChild = treeConstructor(arr);
    var rightChild = treeConstructor(arr);
    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
}
var tree = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
var root = treeConstructor(tree);
function getMin(node) {
    if (node == null) {
        return Infinity;
        // for max number
    }
    var leftMin = getMin(node.left);
    var rightMin = getMin(node.right);
    return Math.min(node.val, Math.min(leftMin, rightMin));
}
console.log(getMin(root));
