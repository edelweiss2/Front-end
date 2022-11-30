const bYear = 2000;
const bMonth = 9;
const bDay = 5;

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();

let fullAge;
if (bMonth < tMonth) {
    fullAge = tYear - bYear;
} else if (bMonth > tMonth) {
    fullAge = tYear - bYear - 1;
} else {            //생월과 현재 월이 같다
    if (bDay <= tDay) {
        fullAge = tYear - bYear;
    } else {
        fullAge = tYear - bYear - 1;
    }
}

console.log(`생년 월일: ${bYear}-${(bMonth<10)? '0' + bMonth : bMonth}-${(bDay<10)? '0' + bDay : bDay}`);
console.log(`오늘 날짜: ${tYear}-${(tMonth<10)? '0' + tMonth : tMonth }-${(tDay<10)? '0' + tDay : tDay} `)
console.log(`만 나이: ${fullAge}`);