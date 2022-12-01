// 3자리 숫자 두개를 곱해서 만든 수 중에서
// 대칭수 이면서 가장 큰 값은?

function isPalindrome(str) {
    let reverseStr = '';
    for (let i = str.length-1; i>=0; i--) {
        reverseStr += str[i];  
    }
    return str == reverseStr;
}

// console.log(isPalindrome('우영우'));

let maxPal = 0, maxI = 0, maxK = 0;
for (let i = 100; i <=999 ; i++) {
    for(let k = 100; k <=999 ; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}
console.log(`${maxI}* ${maxK} = ${maxPal}`);