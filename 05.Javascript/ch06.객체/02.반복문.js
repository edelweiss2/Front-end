let personInfo = {
    'name': '제임스',
    'age': 28,
    'gender': '남자',
    'height': 175,
    'job': '프로그래머',
    'bmi': 30.0
}

for(let attr in personInfo) {
    console.log(attr, ': ', personInfo[attr]);          // key, : , value
}

//array 에서는 for - of 반복문을 써야 하지만, for - in을 사용할 수도 있다. in을 쓰면 키값(순서)이 보임. 그냥 값을 꺼낼땐 for of
let fruits = ['감', '귤', '배'];
for (let index in fruits) {
    console.log(index, fruits[index]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

/* Json javascript object notation
    외부와 데이터를 주고받는 경우에 사용됨
*/
const externalForm = JSON.stringify(personInfo);  // 전부 스트링 타입으로 (30도 스트링)
console.log(externalForm);

const internalForm = JSON.parse(externalForm);    // 전부 객체타입으로
console.log(internalForm);

const exFruits = JSON.stringify(fruits);
console.log(exFruits);
const inFruits = JSON.parse(exFruits);
console.log(inFruits);