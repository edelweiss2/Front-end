// Array의 끝에서 추가 가능
let array = [1, 2, 3];
console.log(array);

array[array.length] = 100;
console.log(array);

array.push('fantastic');
console.log(array);

array[10] = 0;          //array[10]에 0을 집어넣고 그 사이 a[5]~ a[9]는 비어있음
console.log(array);

// 공약수
const a = 12, b = 24;
let commonDivisors = [];
for (let i = 1; i <= ((a < b) ? a : b); i++) {
    if(a % i ==0 && b % i ==0) {
        commonDivisors.push(i);
    } 
}
console.log(commonDivisors);