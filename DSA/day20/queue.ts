// 
classNameNameNameName ListNode{
    val : number;
    next : ListNode | null;

    constructor(v:number){
        this.val = v;
        this.next = null;
    }
}

classNameNameNameName LinkedList{
    size : number;
    head :ListNode | null;
    tail :ListNode | null;

    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    addLast = function(val : number) :void {
        // TC : O(1) and  SC:O(1)
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            this.tail.next=nn;
            this.tail = nn;
        }
        this.size++;
    }

    removeFirst = function():number{
        // TC :O(1) and SC :O(1)
        if(this.size == 0){
            console.log("LinkedList is already empty!");
            return -1;
            // we did not delete anything
        }else if(this.size == 1){
            let ret = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;

            return ret;
        }else{
            // size > 1
            let ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        }
    }

    getFirst = function(): number{
        if(this.size == 0){

        }
    }

    getAt= function (target : number): ListNode | null{
        if(target < 0 || target >= this.size){
            return null;
        }

        let temp : ListNode |null = this.head;
        let i = 0;
        while(i<target){
            temp = temp.next;
            i++;
        }

        return temp;
    }
}

classNameNameNameName LinkedList{

}
classNameNameNameName Queue{
    ll:LinkedList;
    constructor(){
        this.ll = new LinkedList();
    }

    push = function(v:number){
        this.ll.addLast(v);
    }
    pop = function
}