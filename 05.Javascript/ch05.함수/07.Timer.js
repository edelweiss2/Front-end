const si = setInterval(function () {            //setInterval(callback함수, 주기(ms))
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log('1초경과')
}, 1000);

setTimeout(() => {
    clearInterval(si)
}, 5000);