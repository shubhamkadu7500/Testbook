class ListNode{
    val:number;
    next:ListNode | null;

    constructor(v:any){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    head : ListNode | null;
    tail : ListNode | null;
    size : number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst = function(v: any){
        let nn = new ListNode(v);
        if(this.size == 0){
            this.head = nn;
            this.tail == nn;

        }else{
            nn.next = this.head;
            this.head = nn;
        }

        this.size++;
    }

    removeFirst =function() :any {
        if(this.size ==0){
            console.log("stck UnderFlow!");
            return null;
        }

        let ret = this.head.val;
        this.head = this.head.next;
        this.size--;
        return ret;
    }

    getFirst = function() : any{
        if(this.head == null){
            console.log("stack underFlow!");
            return null;
        }
        return this.head.val;
    }

    getSize = function():number{
        return this.size;
    }
}

class Stack{
    ll: LinkedList;
    constructor(){
        console.log("stack contruction was called!");
        this.ll = new LinkedList();
    }

    push = (val: any): void =>{
        this.ll?.addFirst(val);
    }

    pop = ()=>{
        return this.ll?.removeFirst();
    }

    top= ()=>{
        return this.ll?.getFirst();
    }

    size = ()=>{
        return this.ll?.getSize();
    }
}

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);

console.log(st.top());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());