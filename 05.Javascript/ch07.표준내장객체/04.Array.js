let cars = ['Audi', 'Benz', 'BMW', 'Volvo'];
let car = cars.pop();                                   
console.log(cars, car);

cars.push("Hyundai");
console.log(cars);

// Array를 생성
let persons = new Array('James', 'Maria');      // Array도 객체이므로 생성자 함수를 통해 생성 가능
console.log(persons);

//  Array 속성
console.log(cars.length, persons.length);

//  Array 정렬
console.log('정렬 전: ', cars);
cars.sort();
console.log('정렬 후: ',cars);

//  내림차순 정렬
cars.reverse();
console.log('내림차순 정렬 후: ',cars);

//  Array Join
console.log(cars.join(', '));

//  문자열을 거꾸로 만들 수 있음.
let sample = '기러기 토마토 우영우';
let arr = sample.split('');           // 글자 단위로 다 쪼개짐
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.join(''));

const reverseStr = sample.split('').reverse().join('');
console.log(reverseStr);
const rs = str => str.split('').reverse().join('');         // 글자를 뒤집어 주는 함수
console.log(rs('안녕하세요?'));

//  Array 일부분을 반환
const fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1,3));
console.log(fruits.slice(2));           // index 2부터 끝까지를 의미

//  Array 일부를 삭제해서 리턴
const res = fruits.splice(0, 2);
console.log(res);
console.log(fruits);

//  객체의 배열을 정렬해라
let students = [
    {name: 'james', eng: 88, math: 78},
    {name: 'maria', eng: 78, math: 98},
    {name: 'brian', eng: 53, math: 96},
    {name: 'tommy', eng: 67, math: 82}
];

//  eng의 오름차순
/* let engAsc = students.sort(function(a, b) {
    return a.eng - b.eng;
}); */

// //  수학의 내림차순
// students.sort((a, b) => b.math - a.math);

//  이름의 오름차순
// students.sort((a,b) => {
//     if (a.name < b.name) { return -1};
//     if (a.name > b.name) { return 1;}
//     return 0;
// });

students.sort((a,b) => a.name - b.name);        // 안됨
console.log(students);

