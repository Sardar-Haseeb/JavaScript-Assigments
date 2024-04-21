var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("The smallest number in the array is:", smallest);
