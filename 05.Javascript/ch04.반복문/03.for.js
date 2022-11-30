const array = [1,3,5,7,9];
const obj = {a:1, b:3, c:4};

for (let item of array){
    console.log(item);
}

for(let key in obj) {
    console.log(key, obj[key]);
}

array.forEach(x => console.log(x));