//  ES-5(2009년)에 추가된 Array Method

let fruits = ['apple', 'banana', 'cherry', 'grape'];

//  배열 순환 메소드 
fruits.forEach((value, index) => {
    console.log(index, value);
});

// const obj = {name: 'james', eng: 88, math: 78};         // object에는 적용안됨
// obj.forEach((value, key) => {
//     console.log(key, value);
// });

//  배열의 각 요소에 함수 적용 -> map 이라고 함
// fruits를 대문자로
const upperFruits = fruits.map(function(f) {
    return f.toUpperCase();
});
console.log(upperFruits);
console.log(fruits);

const numbers = [1, 3, 5, 7, 9];
const squares = numbers.map(n => n*n);
console.log(squares);

//  배열의 요소에 대해서 필터링
//  제곱수에서 30보다 큰 수 찾기
const thirty = squares.filter(n => n>30);
console.log(thirty);
//  fruits에서 이름이 6자 이상
console.log(fruits.filter(f => f.length >= 6));