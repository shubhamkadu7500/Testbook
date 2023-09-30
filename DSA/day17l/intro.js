// linked list
var ListNode = /** @classNameNameNameName */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @classNameNameNameName */ (function () {
    function LinkedList() {
        this.display = function () {
            // TC:O(N) and SC: O(1)
            var s = "";
            var temp = this.head;
            while (temp != null) {
                s += temp.val + " -> ";
                temp = temp.next;
            }
            console.log(s + "null");
        };
        this.addLast = function (val) {
            // TC : O(1) and  SC:O(1)
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.addFirst = function (val) {
            // TC:O(1) and SC : O(1)
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            // TC :O(1) and SC :O(1)
            if (this.size == 0) {
                console.log("LinkedList is already empty!");
                return -1;
                // we did not delete anything
            }
            else if (this.size == 1) {
                var ret = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else {
                // size > 1
                var ret = this.head.val;
                this.head = this.head.next;
                this.size--;
                return ret;
            }
        };
        this.removeLast = function () {
            // TC :O(1) and SC :O(1)
            if (this.size == 0) {
                console.log("LinkedList is already empty!");
                return -1;
                // we did not delete anything
            }
            else if (this.size == 1) {
                var ret = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else {
                // size > 1
                var ret = this.tail.val;
                //this value is about to get deleted
                var temp = this.head;
                while (temp.next != this.tail) {
                    temp = temp.next;
                }
                //Now temp is standing on secondlast node
                temp.next = null;
                this.tail = temp;
                this.size--;
                return ret;
            }
        };
        this.getAt = function (target) {
            if (target < 0 || target >= this.size) {
                return null;
            }
            var temp = this.head;
            var i = 0;
            while (i < target) {
                temp = temp.next;
                i++;
            }
            return temp;
        };
        this.addNodeAt = function (val, idx) {
            if (idx == 0) {
                this.addFirst(val);
                return;
            }
            else if (idx == this.size) {
                this.addLast(val);
                return;
            }
            else if (idx < 0 || idx > this.size) {
                console.log("invalid index!");
                return;
            }
            var prev = this.getAt(idx - 1);
            var curr = this.getAt(idx);
            var nn = new ListNode(val);
            prev.next = nn;
            nn.next = curr;
            this.size++;
        };
        this.removeAt = function (idx) {
            if (idx == 0) {
                return this.removeFirst();
            }
            else if (idx == this.size) {
                return this.removeLast();
            }
            else if (idx < 0 || idx >= this.size) {
                console.log("invalid index!");
                return -1;
            }
            var prev = this.getAt(idx - 1);
            var curr = prev.next;
            var ret = curr.val;
            prev.next = curr.next;
            this.size--;
            return ret;
        };
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    return LinkedList;
}());
var ll = new LinkedList();
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
