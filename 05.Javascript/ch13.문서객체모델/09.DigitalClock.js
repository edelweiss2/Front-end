function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDateTime(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${twoDigit(date.getDate())}` +
        ` ${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

window.onload = function () {
    setInterval(() => {
        const now = new Date();
        document.getElementById('date').innerHTML = myDateTime(now).substring(2, 10);
        document.getElementById('time').innerHTML = myDateTime(now).substring(11);
    }, 1000);                                           //1초마다 Date
}