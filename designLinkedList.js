/*
707. Design Linked List
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
 
Constraints:

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
*/
/*
/**
 * 707. Design Linked List
 *
 * Design your implementation of the linked list.
 * We are using a Singly Linked List.
 */

// =====================================================
// Node
// =====================================================

function Node(val) {
    this.val = val;
    this.next = null;
}


// =====================================================
// MyLinkedList
// =====================================================

var MyLinkedList = function () {

    this.head = null;
    this.size = 0;

};


// =====================================================
// get(index)
// =====================================================

/**
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.get = function (index) {

    // Invalid index
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let curr = this.head;

    // Move to the required index
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};


// =====================================================
// addAtHead(val)
// =====================================================

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function (val) {

    let newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;

    this.size++;
};


// =====================================================
// addAtTail(val)
// =====================================================

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtTail = function (val) {

    let newNode = new Node(val);

    // If linked list is empty
    if (this.head === null) {

        this.head = newNode;

    }

    // If linked list is not empty
    else {

        // Reach the last element
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        // Add new node at the end
        curr.next = newNode;
    }

    this.size++;
};


// =====================================================
// addAtIndex(index, val)
// =====================================================

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtIndex = function (index, val) {

    // Invalid index
    if (index < 0 || index > this.size) {
        return;
    }

    // Add at head
    if (index === 0) {

        this.addAtHead(val);
        return;
    }

    // Add at tail
    if (index === this.size) {

        this.addAtTail(val);
        return;
    }

    // Add in the middle
    let newNode = new Node(val);

    let curr = this.head;

    // Reach the node before the required index
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    // Connect new node
    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
};


// =====================================================
// deleteAtIndex(index)
// =====================================================

/**
 * @param {number} index
 * @return {void}
 */

MyLinkedList.prototype.deleteAtIndex = function (index) {

    // Invalid index
    if (index < 0 || index >= this.size) {
        return;
    }

    // Delete first node
    if (index === 0) {

        this.head = this.head.next;

    }

    // Delete middle/last node
    else {

        let curr = this.head;

        // Reach the node before the required index
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        // Remove the required node
        curr.next = curr.next.next;
    }

    this.size--;
};


// =====================================================
// INPUT
// =====================================================

let operations = [
    "MyLinkedList",
    "addAtHead",
    "addAtTail",
    "addAtIndex",
    "get",
    "deleteAtIndex",
    "get"
];

let parameters = [
    [],
    [1],
    [3],
    [1, 2],
    [1],
    [1],
    [1]
];


// =====================================================
// EXECUTE INPUT
// =====================================================

let myLinkedList = null;

let output = [];

for (let i = 0; i < operations.length; i++) {

    let operation = operations[i];
    let parameter = parameters[i];

    if (operation === "MyLinkedList") {

        myLinkedList = new MyLinkedList();

        output.push(null);
    }

    else if (operation === "addAtHead") {

        myLinkedList.addAtHead(parameter[0]);

        output.push(null);
    }

    else if (operation === "addAtTail") {

        myLinkedList.addAtTail(parameter[0]);

        output.push(null);
    }

    else if (operation === "addAtIndex") {

        myLinkedList.addAtIndex(parameter[0], parameter[1]);

        output.push(null);
    }

    else if (operation === "get") {

        output.push(
            myLinkedList.get(parameter[0])
        );
    }

    else if (operation === "deleteAtIndex") {

        myLinkedList.deleteAtIndex(parameter[0]);

        output.push(null);
    }
}


// =====================================================
// OUTPUT
// =====================================================

console.log("Input:");
console.log(JSON.stringify(operations));
console.log(JSON.stringify(parameters));

console.log("\nOutput:");
console.log(JSON.stringify(output));


// =====================================================
// FINAL LINKED LIST
// =====================================================

console.log("\nFinal Linked List:");

let curr = myLinkedList.head;

let result = [];

while (curr !== null) {

    result.push(curr.val);

    curr = curr.next;
}

console.log(result.join(" -> "));
// --------------------------------------------------------------------
function Node(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
        this.head = newNode;
    }
    else {
        // reach the last element
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        newNode = new Node(val);
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.size) {
        return;
    }
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    else if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

//Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
var param_1 = obj.get(index)
obj.addAtHead(val)
obj.addAtTail(val)
obj.addAtIndex(index, val)
obj.deleteAtIndex(index)

get()        //→ O(n)
addAtHead()  // → O(1)
addAtTail()  // → O(n)
addAtIndex()  // → O(n)
deleteAtIndex()  // → O(n)
// Space → O(n)
