// 1. 현재 날짜 시각

let today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleString());        //  timezone 반영

// 2. Unix time 1970.1.1 이후 ms단위
let someDay = new Date(1.67e12);            //  2022-12-02T16:53:20.000Z
console.log(someDay);

// 3. 문자열 기반 
let strDate = new Date("December 1, 2022 17:05:00");
console.log(strDate.toLocaleString());

// 4. 시간 소요 (연, 월-1, 일, 시, 분, 초)
let timeDate = new Date(2022, 11, 1, 17, 6, 0)
console.log(timeDate.toLocaleString());

//
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDateTime(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${twoDigit(date.getDate())}` +
        ` ${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

console.log(myDateTime(timeDate))

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myDateTime(today))

// 오늘 + 1년 +11개월 + 8일 후
let date = new Date();
date.setFullYear(date.getFullYear()+ 1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+8);
console.log(date);

// 시간 간격
let now = new Date();
console.log(now.getTime());
const christMas = new Date(2022, 11, 25);
console.log(myDateTime(christMas));

const diffMs = christMas.getTime() - now.getTime();
const diffDay = Math.ceil(diffMs / (24*60*60*1000));
console.log(diffDay)