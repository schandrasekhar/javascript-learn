/*
    Problem statement
    Given an array of `A` which contains `n` elements get all possible `r` combinations possible from A, with
    r <= n


    Reference
    https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
*/




var A = [5, 3, 6, 7, 8];


var getCombinations = function(A, tmp, start, end, index, r) {
    if (index === r) {
        console.log(tmp);
        return;
    }

    for (var i = start; i<=end && (end-i+1 >= r-index); i++) {
        tmp[index] = A[i];
        getCombinations(A, tmp, i+1, end, index + 1, r);
    }
};

var n = A.length;
var r = 3;

getCombinations(A, [], 0, n-1, 0, r);