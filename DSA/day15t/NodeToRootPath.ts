var TreeNode = /** @classNameNameNameName */ (function () {
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

function NodeToRootPath(node : TreeNode | null, target : number){
    if(node == null) return [];
    if(node.val == target) return []
}