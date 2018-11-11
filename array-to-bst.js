/*
    Problem Statement
    Convert a given array `A` to a binary search tree `B`

*/



var A = [1, 4, 6, 2, 6, 1];



var getNode = function(value, left, right) {
    var Node = {
        value: null,
        left: null,
        right: null
    };

    Node.value = value
    Node.left = left;
    Node.right = right;
    return Node;
};



var arrayToBst = function(A) {
    var rootNode = getNode(A[0], null, null);
    
};