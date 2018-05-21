
var top;

var size = 0;

function Stack() {

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

Stack.prototype.push = function(item) {
    var nodeToAdd = new Stack(item);
    size++;

    if(top == null) {
        top = nodeToAdd;
        return;
    }

    var node = top;

    while(node != null) {
        node = node.link;
    }

    node.link = nodeToAdd;
    top = node.link;

}

Stack.prototype.pop = function() {
    if(top == null) {
        print("undeflow");
        return;
    }

    if(top.link == null || size == 1) {
        top = null;
        size--;
        return;
    }

    top = top.link;
    size--;
}

module.exports = Stack;