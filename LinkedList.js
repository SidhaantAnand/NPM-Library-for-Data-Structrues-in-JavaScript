
var head;

var size = 0;

var tail;



/*

This function will

 

1) Declare and/or initialize new nodes for the linked list

2) To remove the inconvenience of the user to pass in the head in all functions, This code will maintain the head variable

 

*/



function LinkedList() {

    // Initializing a new node with no data value and link

    if (arguments.length == 0) {

        this.data = 0;

        this.link = null;



        return this;

    }

    else if (arguments.length == 1) {

        this.data = arguments[0];

        this.link = null;

        return this;

    }
}



LinkedList.prototype.insertAtStart = function(data) {

    var nodeToAdd = new LinkedList(data);

    size++;



    if (head == null) {

        head = nodeToAdd;

        tail = nodeToAdd;

        return;

    }

    nodeToAdd.link = head;

    head = nodeToAdd;

    return;



}



 LinkedList.prototype.insertAtEnd = function(data) {

    var nodeToAdd = new LinkedList(data);

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



LinkedList.prototype.insert = function(data, position) {

    var nodeToAdd = new LinkedList(data);

    size++;



    if (head == null) {

        head = nodeToAdd;

        tail = nodeToAdd;

        return;

    }



    // Checking if the node is to be added at the starting positon

    if (position == 0) {

        insertAtStart(data)

    }



    // Checking if the node is to be added at the end

    if (position >= (size - 1)) {

        insertAtEnd(data)



    }

    var prev = head;



    for (var i = 1; i < position; i++) {

        prev = prev.link;

    }



    var next = prev.link.link;

    nodeToAdd.link = next;

    prev.link = nodeToAdd;

    size++;

    return;



}



LinkedList.prototype.display = function() {

    var node = head;



    while (node != null) {

        print(node.data);

        node = node.link;

    }

}



LinkedList.prototype.search = function(find) {

    var node = head;

    var indexes = [];

    var currIndex = 0;

    while (node != null) {

        if (node.data == find)

            indexes.push(currIndex);

        currIndex++;



    }



    return indexes;

}



LinkedList.prototype.get = function(position) {

    var node = head;

    for (var i = 0; i < position; i++)

        node = node.link;

    return node.data;

}



LinkedList.prototype.getLinkedList = function(position) {

    var node = head;

    for (var i = 0; i < position; i++)

        node = node.link;

    return node;

}



LinkedList.prototype.toArray = function() {

    var arr = [];

    var node = head;



    while (node != null) {

        arr.push(node.data);

        node = node.link;

    }



    return arr;

}



LinkedList.prototype.getSize() = function() {

    return size;



}



LinkedList.prototype.set = function(data, position) {

    getLinkedList(position).data = data;

}



LinkedList.prototype.reverse = function() {

    var left = 0;

    var right = size;

    while (right >= left) {

        var node1 = getLinkedList(left);

        var node2 = getLinkedList(right);

        var tmp = node1.data;

        node1.data = node2.data;

        node2.data = tmp;

    }

}



LinkedList.prototype.sort = function() {

    for (var i = 0; i < size - 1; i++) {

        for (var j = 0; j < size - 1 - i; j++) {

            if (getLinkedList(i).data > getLinkedList(j).data) {

                var tmp = getLinkedList(i).data;

                getLinkedList(i).data = getLinkedList(j).data;

                getLinkedList(j).data = tmp;

            }

        }

    }

}



LinkedList.prototype.deleteAtStart = function() {

    if (head == null)

        throw "The LinkedList is empty";



    else if (head.link == null) {

        head = null;

        tail = null;

    } else

        head = head.link;

    size--;

}



LinkedList.prototype.deleteAtEnd() = function() {

    if (head == null)

        throw "The LinkedList is empty";



    else if (head.link == null) {

        head = null;

        tail = null;

    } else {

        var node = head;

        while (node.link.link != null)

            node = node.link;

        node.link = null;

        tail = node.link;

    }

}

var linkedListObj = new LinkedList();
module.exports = linkedListObj;