

var head;
var tail;

var size = 0;

function Queue() {

    // Initializing a new node with no data value and link

    if (arguments.length == 0) {

        this.data = 0;

        this.link = null; 
        return this;

    }



    // Initializing a new node with data value and no link
    else if (arguments.length == 1) {

        this.data = arguments[0];

        this.link = null;

        return this;

    }
}

Queue.prototype.enqueue = function(item) {
    var nodeToAdd = new Queue(item);
    size++;

    if (head == null) {

        head = nodeToAdd;

        tail = nodeToAdd;

        return;

    }

    tail.link = nodeToAdd;

    tail = nodeToAdd;

    return;
}

Queue.prototype.dequeue = function() {
    if(head == null) {
        print("nothing to delete");
        return;
    }

    if(head == tail) {
        head = null;
        tail = null;
        size--;
        return;
    }

    head = head.link;
    size--;

}


var queueObj = new Queue();
module.exports = queueObj;