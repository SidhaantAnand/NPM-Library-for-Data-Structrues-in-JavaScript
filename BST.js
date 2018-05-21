

var root;

var size = 0;



function BinarySearchTrees() {

    // Initializing a new node with no data value and link

    if (arguments.length == 0) {

        this.data = 0;

        this.left = null;

        this.right = null;

        return this;

    }



    // Initializing a new node with data value and no link
    else if (arguments.length == 1) {

        this.data = arguments[0];

        this.left = null;

        this.right = null;

        return this;

    }

}



BinarySearchTrees.prototype.insert =  function(data) {

    var nodeToAdd = new BinarySearchTrees(data);

    print(nodeToAdd.data);

    size++;

    if (root == null) {

        root = nodeToAdd;

        return;

    }

    insertRecur(root, nodeToAdd)

}



BinarySearchTrees.prototype.insertRecur = function(node, nodeToAdd) {

    if (nodeToAdd.data > node.data) {

        if (node.right == null) {

            node.right = nodeToAdd;

            return;

        } else {

            insertRecur(node.right, nodeToAdd);

        }

    }



    if (nodeToAdd.data < node.data) {

        if (node.left == null) {

            node.left = nodeToAdd;

            return;

        } else {

            insertRecur(node.left, nodeToAdd);

        }

    }

}



BinarySearchTrees.prototype.display =  function() {

    displayRec(root)

}



BinarySearchTrees.prototype.displayRec = function(node) {

    if (node == null) {

        return;

    } else if (node.left == null && node.right == null) {

        print("NULL" + " => " + node.data + " => " + "NULL");

    } else if (node.left == null) {

        print("NULL" + " => " + node.data + " => " + node.right.data);

    } else if (node.right == null) {

        print(node.left.data + " => " + node.data + " => " + "NULL");

    } else {

        print(node.left.data + " => " + node.data + " => " + node.right.data);

    }

    displayRec(node.left);

    displayRec(node.right);



}



BinarySearchTrees.prototype.search = function(data) {

    print(searchRec(root, data));

}



BinarySearchTrees.prototype.searchRec = function(node, data) {

    if (node == null) {

        return false;

    }



    if (node.data == data) {

        return true;

    }



    if (node.data > data) {

        return (searchRec(node.left, data));

    } else {

        return (searchRec(node.right, data));

    }

}



BinarySearchTrees.prototype.deleteS = function(data) {

    print(deleteRec(root, data, null));

}



BinarySearchTrees.prototype.deleteRec = function(node, data, parent) {

    if (node == null) {

        return false;

    }



    if (node.data == data) {

        if (node.left == null && node.right == null) {

            if (node.data > parent.data) {

                parent.right = null;

                return true;

            } else {

                parent.left == null;

                return true;

            }

        } else {

            return false;

        }

    }



    if (node.data > data) {

        return (deleteRec(node.left, data, node));

    } else {

        return (deleteRec(node.right, data, node));

    }
}
module.exports = new BinarySearchTrees();
