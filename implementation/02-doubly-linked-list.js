// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            //Should set the next and prev values on nodes appropriately on an insert
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            // Should set head and tail on first insert
            this.head = newNode;
            this.tail = newNode;
        }
        // Should increase the size with each insert
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here 
        const newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            // Should set the list head and tail if the list was empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Should set the next and prev values on nodes appropriately
            newNode.prev = this.tail;

            this.tail.next = newNode;

            this.tail = newNode;
        }
        // Should increase the size with each insert
        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) return undefined;
        // Your code here 
        const removed = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next
            this.head.prev = null;
        }

        this.length--;
        return removed
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) return undefined;
        // Your code here 
        const removed = this.tail.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev
            this.tail.next = null;
        }


        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) return undefined;

        return this.head.value;
        // Return value of head node

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return undefined;
        return this.tail.value;
        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
