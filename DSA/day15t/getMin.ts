// get min number in tree
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

function getMin(node : TreeNode | null):number{
    if(node == null){
        return  Infinity;
        // for max number
    }
    
    let leftMin = getMin(node.left);
    let rightMin = getMin(node.right);

    return Math.min(node.val, Math.min(leftMin, rightMin));
}

console.log(getMin(root));