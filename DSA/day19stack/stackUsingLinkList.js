var ListNode = /** @classNameNameNameName */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @classNameNameNameName */ (function () {
    function LinkedList() {
        this.addFirst = function (v) {
            var nn = new ListNode(v);
            if (this.size == 0) {
                this.head = nn;
                this.tail == nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("stck UnderFlow!");
                return null;
            }
            var ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        };
        this.getFirst = function () {
            if (this.head == null) {
                console.log("stack underFlow!");
                return null;
            }
            return this.head.val;
        };
        this.getSize = function () {
            return this.size;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Stack = /** @classNameNameNameName */ (function () {
    function Stack() {
        var _this = this;
        this.push = function (val) {
            var _a;
            (_a = _this.ll) === null || _a === void 0 ? void 0 : _a.addFirst(val);
        };
        this.pop = function () {
            var _a;
            return (_a = _this.ll) === null || _a === void 0 ? void 0 : _a.removeFirst();
        };
        this.top = function () {
            var _a;
            return (_a = _this.ll) === null || _a === void 0 ? void 0 : _a.getFirst();
        };
        this.size = function () {
            var _a;
            return (_a = _this.ll) === null || _a === void 0 ? void 0 : _a.getSize();
        };
        console.log("stack contruction was called!");
        this.ll = new LinkedList();
    }
    return Stack;
}());
var st = new Stack();
st.push(10);
st.push(20);
st.push(30);
console.log(st.top());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
