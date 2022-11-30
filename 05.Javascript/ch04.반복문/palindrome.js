// 3자리 숫자 두개를 곱해서 만든 수 중에서
// 대칭수 이면서 가장 큰 값은?

for (let i = 100; i < 1000; i++) {
    let num = 0;
    for (let k = 100; k < 1000; k++) {
        num = i*k;
        let last = num % 10;
        let x = parseInt(num/10);
        let reverse =  + last;    
        if(num  == reverse) {
            return num; 
        }   
        return num;
    }
    console.log(num);
}
