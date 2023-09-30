// linked list
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
    tail : ListNode | null;

    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }


    display  = function(): void{
        // TC:O(N) and SC: O(1)
        let s = "";
        let temp  = this.head;

        while(temp != null){
            s +=temp.val +" -> ";
            temp = temp.next;
        }
        console.log(s+"null");
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
    
    addFirst = function(val: number) : void{
        // TC:O(1) and SC : O(1)
        let nn = new ListNode(val);
        if(this.size ==0){
            this.head =nn;
            this.tail = nn;
        }else{
            nn.next = this.head;
            this.head =nn;
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

    removeLast = function(): number {
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
            let ret = this.tail.val;
            //this value is about to get deleted

            let temp = this.head;

            while(temp.next != this.tail){
                temp = temp.next;
            }
            //Now temp is standing on secondlast node
            temp.next = null;
            this.tail = temp;
            this.size--;

            return ret; 
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
    addNodeAt = function(val:number, idx:number){
        if(idx == 0){
            this.addFirst(val);
            return;
        }else if(idx == this.size){
            this.addLast(val);
            return;
        }else if(idx < 0 || idx > this.size){
            console.log("invalid index!");
            return;
        }
        let prev = this.getAt(idx-1);

        let curr = this.getAt(idx);

        let nn = new ListNode(val);
        prev.next = nn;
        nn.next = curr;
        this.size++;
    }

    removeAt = function(idx:number): number{
        if(idx == 0){
            return this.removeFirst();
        }else if(idx == this.size){
            return this.removeLast();
        }else if(idx < 0 || idx >= this.size){
            console.log("invalid index!");
            return -1;
        }

        let prev = this.getAt(idx-1);
        let curr = prev.next;
        let ret = curr.val;

        prev.next = curr.next;
        this.size--;
        return ret;
    }
    // reverse linked list
    // reverse = function reverseList(head: ListNode | null): ListNode | null {
    //     if(head == null) return null;
    //     if(head.next == null) return head;
    
    //     let prev = null;
    //     let curr = head;
    //     let next = head.next;
    
    //     while(curr != null){
    //         curr.next = prev;
    
    //         prev = curr;
    //         curr = next;
    //         if(next != null) next = next.next;
    //     }
    
    //     return prev;
    // };
}
let ll = new LinkedList();
// ll.addFirst(10);
// ll.addLast(20);
// ll.display();
ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.addLast(5);
ll.display();

// ll.reverse();
// ll.addNodeAt(40,3);
// console.log(ll.removeFirst()); // 10
// console.log(ll.removeLast()); // 50
// console.log(ll.getAt(2).val); // 40
ll.display();


