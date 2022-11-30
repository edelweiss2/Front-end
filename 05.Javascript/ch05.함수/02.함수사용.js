// for (let num = 2; num <= 10000; num++) {
//     let divisor = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             divisor.push(i);
//         }
//     }
//     let sum = 0;
//     for (div of divisor) {
//         sum += div;
//     }
//     if (num == sum) {
//        process.stdout.write(`${num}:`);
//        process.stdout.write(divisor.toString());
//         console.log();
//     }
// }

function getDivisiors(num) {
    let divisor = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisor.push(i);
        }
    }
    return divisor;
}

const sumArray = array => {
    let sum = 0;
    for (div of array) {
        sum += div;
    }
    return sum;
}

for (let num =2; num <= 10000; num++) {
    const array = getDivisiors(num);
    const arrSum = sumArray(array);
    if(num == arrSum) {
        console.log(num, ' : ', array.toString());
    }
}