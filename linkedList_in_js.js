/**
Task: Implement a Linked List in JavaScript with the following operations:

insert(value): Inserts a new node with the given value at the end of the list.
delete(value): Removes the first occurrence of the node with the given value from the list.
search(value): Returns true if a node with the given value exists in the list, false otherwise.
*/
class Node {
    constructor(val = 0, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = nex
    }
}
class LinkedList {
    constructor() {
        this.head = new Node() // this is the dummy node
        this.tail = this.head
        this.search = {}
    }
    insert(value) {
        var node = new Node(value)
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        if (value in this.search) {
            this.search[value].push(node)
        } else {
            this.search[value] = [node]
        }
    }
    delete(value) {
        if (value in this.search) {
            var val = this.search[value].shift()
            if(val.prev !== null) {
                val.prev.next = val.next
            }
            if(val.next !== null) {
                val.next.prev = val.prev
            }
            if (this.search[value].length == 0) {
                delete search[value]
            }
        }
    }
    search(value) {
        return value in this.search
    }
}
