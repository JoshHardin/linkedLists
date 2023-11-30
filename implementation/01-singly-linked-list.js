// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        // Your code here
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
        // console.log(this.head)
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++
        // console.log(this)
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        // Your code here
    // Should return undefined if the list is empty
        if(!this.head) return undefined

    const removed = this.head
    // Should remove head node from the list by reassigning the head pointer to the next node
    this.head = this.head.next
    // Should properly update the length property after removing the head node
    this.length--
    // Should return the removed head node when removeFromHead is called
    return removed
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // if there is no head, return undefined
    if(!this.head) return undefined
    // giving something for "curr" to point at
    let curr = this.head
    // assign "previous" to null
    let previous = null
    // loop through this
        while(curr.next){
            // assign previous to the current position
            previous = curr
            // assign current position to the next position
            curr = curr.next
        }
        // if there's no prior position assign head to Null, and if not, the current position is Null
        if(!previous){
            this.head = null
        } else {
            previous.next = null
        }
        // decriment length
        this.length--;
        // return removed tail
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        if(this.length === 0) return undefined
        // Your code here
        return this.head.value

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if(!this.head) return undefined
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
