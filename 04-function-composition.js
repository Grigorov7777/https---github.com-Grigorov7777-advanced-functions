const double = num => num * 2;
const square = num => num * num;

const compose = (f, g) => x => f(g(x));

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3)); 
