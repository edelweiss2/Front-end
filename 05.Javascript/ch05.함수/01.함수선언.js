function sum(a, b) {
    return a + b;
}

const anonySum = function (a, b) {
    return a + b;
}

console.log(sum(3, 4));
console.log(anonySum(3, 4));

const arrowSum = (a, b) => a + b;
console.log(arrowSum(3,4));