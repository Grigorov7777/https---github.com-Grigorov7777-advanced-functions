function sum(a, b, c, d) {
  return a + b + c + d;
}

function partialSum(num) {
  return function(a, b, c) {
    return num + sum(a, b, c, 0);
  };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
