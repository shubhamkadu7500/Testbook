// size of tree
classNameNameNameName TreeNode{
    val: number;
    left:TreeNode | null;
    right :TreeNode | null;

    constructor(v:number){
        this.val = v;
        this.left = null;
        this.right = null;
    }
}
let idx = 0;
function treeConstructor(arr:number[]):TreeNode | null{
    if(arr[idx]==-1){
        idx++;
        return null;
    }

    let nn = new TreeNode(arr[idx]);
    idx++;

    let leftChild = treeConstructor(arr);
    let rightChild = treeConstructor(arr);

    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
} 
let tree = [6,16,26,-1,-1,-1,36,44,-1,-1,56,-1,-1];
let root = treeConstructor(tree);


function getSize(node: TreeNode | null){
    if(node == null) return 0;

    let lefttSise = getSize(node.left);
    let rightSise = getSize(node.right);

    return lefttSise + rightSise +1;
}
console.log(getSize(root));