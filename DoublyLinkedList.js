
var head;
var size;
var tail;

function DoublyLinkedList() {

	if(arguments.length == 0) {
		this.left = null;
		this.right = null;
		this.data = null;
		return this;
	}

	if(arguments.length == 1) {
		this.left = null;
		this.right = null;
		this.data = arguments[0];
		return this;
	}
}

DoublyLinkedList.prototype.insertAtStart = function(data) {
	var nodeToAdd = new DoublyLinkedList(data);
	size++;
	if(head == null) {
		head = nodeToAdd;
		tail = nodeToAdd;
	}
	nodeToAdd.right = head;
	head.left = nodeToAdd;
	head = nodeToAdd;
}

DoublyLinkedList.prototype.insertAtEnd = function(data) {
	var nodeToAdd = new DoublyLinkedList(data);
	size++;
	if(head == null) {
		head = nodeToAdd;
		tail = nodeToAdd;
	}
	tail.right = nodeToAdd;
	nodeToAdd.left = tail;
	tail = nodeToAdd;
}

DoublyLinkedList.prototype.insert = function(data,position) {
	if(position == 0) {
		insertAtStart(data);
	}

	else if(position >= size) {
		insertAtEnd(data);
	}

	else {
		var nodeToAdd = new DoublyLinkedList(data);
		size++;
		var prev = head;
		for(var i = 0; i<=position; i++) {
			prev = prev.right;
		}

		prev.right = nodeToAdd;
		nodeToAdd.left = prev;
		nodeToAdd.right = prev.right;
	}
}

DoublyLinkedList.prototype.search = function(find) {

    var node = head;

    var indexes = [];

    var currIndex = 0;

    while (node != null) {

        if (node.data == find) {
            indexes.push(currIndex);
        }

        currIndex++;
        node = node.right;
    }
 }

DoublyLinkedList.prototype.display() {
 	var node = head;
 	while(node != null) {
 		print(node.data);
 		node = node.right;
 	}
 }

DoublyLinkedList.prototype.deleteAtStart = function() {
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

 	head = head.right;
 	head.left = null;
 	size--;

 }

DoublyLinkedList.prototype.deleteAtEnd = function() {
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
 	tail = tail.left;
 	tail.right = null;
 	size--;
 }

DoublyLinkedList.prototype.delete = function(position) {
 	if(head == null) {
 		print("nothing to delete");
 		return;
 	}

 	if(head == tail) {
 		head = null;
 		tail = null;
 		return;
	}

	if(position == 0) {
		deleteAtStart();
	}

	if(position >= size) {
		deleteAtEnd();
	}
	var prev = head;
	for(var i = 0; i<position; i++) {
		prev = prev.right;
	}

	var nodeToDelete = prev.right;
	prev.right = nodeToDelete.right;
	nodeToDelete.left = null;
	nodeToDelete.right = null;

 }

var DoublyLinkedListObject = new DoublyLinkedList();
module.exports = DoublyLinkedListObject;