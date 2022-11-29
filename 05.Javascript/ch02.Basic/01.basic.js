//출력 메소드
console.log("Hello", "World", "!!!");

//상수 변수
const hello = "안녕하세요?"; //상수
var x = 3;                 //변수,2015년 이전
let y = 4;                 //현시점에선 var대신 let 사용

//기본 자료형

// 1.Number
console.log(typeof(1), typeof(3.14));
console.log(2**10); // 2^10

//2.string
console.log(typeof('hello'), typeof('world'));
console.log(hello[0], hello[5]);        // Java에서는 hello.charAt(0), hello.substring(0,1)
console.log(`${hello} 3+4 = ${x+y}` );  //  template literal
console.log(`올해는 ${new Date().getFullYear()}년입니다.`)  //"올해는 " + new Date().getFullYear() + "년입니다"

//3.boolean
console.log(typeof(true), typeof(false));
console.log(true > 10 );

//4. Function
console.log(typeof function() {});
console.log(typeof(()=> {}));           //Java 람다식

//5.Object
let obj = {x, y};               // {x: x, y: y}
console.log(typeof obj);
console.log(obj.x, obj.y);

//6.Undefined
let alpha;
console.log(typeof alpha);

//증감 연산자
console.log(x++);   // 3이 찍히고 난 다음에 x의 값은 4가 됨
console.log(++x);   // x가 5가 된 다음에 찍힘

// 강제 자료형변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(0.0), Boolean(null), Boolean(NaN));  // false 
console.log(Boolean(0.1), Boolean('  '), Boolean(100));     // 나머지는 true

console.log(Number('string'));  // not a number nan
console.log(Number('0o123'), Number('0x123'), Number('0b101'));    //8진수의 123, 16진수의 123, 2진수의 101 을 

//자동 자료형 변환
console.log(52 + '37', '37' + 21 + 31 );        //string concatenation
console.log(1 + true, true + 'bool');

console.log(52 - "37", "37" -21, '37' * 2);     // -는 +랑 달리 문자열이 숫자가 되서 계산됨

//일치 연산자 - 자료형까지 계산해줌 (숫자로 된 문자열을 알아서 처리해줌) ===는 자료형까지 세밀하게 비교, 알아서 처리x
console.log(1 == 1.0, 1 === 1.0);   // 둘 다 숫자형이라 일치
console.log(1 == '1', 1 ==='1', 1 == true, 1 === true);

//상수
const today = new Date;
console.log(today);  // 2022-11-29T07:45:15.745Z
// today = " "; // runtime 에러


