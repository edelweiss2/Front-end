let fruits = ['감', '배', '배'];
let personArray = ['제임스', 28, '남자', 175, '프로그래머'];

let personInfo = {
    'name': '제임스',
    'age': 28,
    'gender': '남자',
    'height': 175,
    'job': '프로그래머',
    'bmi': 30.0
}

console.log(personInfo);

let maria = {name: '마리아', age: 23, gender: '여자'};
console.log(maria);

console.log(maria['name'], maria['age']);       //이렇게 쓰진 않음
console.log(maria.name, maria.age);

let key = 'age';
console.log(maria[key]);    //maria.key는 허용되지 않음

const name = '홍길동';
const age = 35;
const gender = '남자';
const hong = {name: name, age: age, gender: gender};
console.log(hong);

// ES-6
// key값과 같은 변수명은 생략 가능
const hong2 = {name, age, gender};
console.log(hong2);

