let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// Method
console.log(hello.charAt(0), hello[0]);
console.log(hello.concat(' 여러분!!!'));     // hello + ' 여러분!!!'

console.log(hello.indexOf('하'));

// 디지털 시계, 00:00 ~ 23:59, 하루동안 3이 표시되는 시간은 몇초인가?
let totalSeconds = 0;
for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
        const display = h + ":" + m;
        if (display.indexOf('3') >= 0) {
            totalSeconds += 60;
        }
    }
}
console.log(totalSeconds);

// 정규 표현식
const sample = 'A quick brown fox 갈색의 재빠른 여우가 Jumps over 게으른 개를 The lazy dog. ㅋㅋㅠㅠ';

let newStr = sample.replace(/[A-Z]/, '대');     //정규 표현식 자리에 '[A-Z]', '/[A-Z]/' 안됨 only /[A-Z]/
console.log(newStr);
newStr = sample.replace(/o/, 'O');      // 첫번째 o만 바뀜.A quick brOwn fox 갈색의 재빠른 여우가 jumps over 게으른 개를 the lazy dog.
console.log(newStr);
newStr = sample.replace(/o/g, 'O');    // g = global 전부 다 바꿈
console.log(newStr);
console.log(sample.replace(/[A-Z]\w+/g, 'XXX'));

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);

// 한글+공백만 남기기
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');         // ^ = not의 의미, 힣 뒤에 공백있음
console.log(newStr);

// Split
let fruit = '사과,배,감,포도';
let fruitArray = fruit.split(',');
console.log(fruitArray);
const prod = '망치,나사,못,톱,도끼'.split(',');
console.log(prod);

fruit = '사과, 배  ,감, 포도  ';
fruitArray = fruit.split(', ');
console.log(fruitArray);
fruitArray = fruit.split(',').map(s => s.trim());   //  array element 각각에 대해서 callback 함수 적용
console.log(fruitArray);

// 문자열의 일부 추출
const today = new Date().toISOString();
console.log(today);
// 2022-12-01T06:29:37.691Z
console.log(today.substring(0, 10));         //  2022-12-01 날짜 추출
console.log(today.substring(11, 19));        //  06:32:14    시간 추출

// 현재 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어 주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function dateTime() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${twoDigit(now.getDate())}` +
        ` ${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}

const now = dateTime()
console.log(now);
console.log(now.substring(2, 16));

// 1에서부터 1000 숫자중에 0은 몇번, 1은 몇번, ... , 9는 몇번 사용될까
let numbers = '';
for (let i = 1; i<= 1000; i++){
    numbers += i;
}

let obj = {};
for (let i = 0; i<=9; i++) {
    obj[String(i)] = numbers.split(String(i)).length - 1;
}
console.log(obj);


// 정규표현식 사용
let reArray = [];
for (let i = 0; i<=9; i++) {
    const re = new RegExp('[^' + i + ']', 'g');
    reArray.push(numbers.replace(re, '').length);
}
console.log(reArray);
