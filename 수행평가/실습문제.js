function ans1() {
    let num1 = parseInt($('#num1').val());
    let num2 = parseInt($('#num2').val());
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2 - num1) < 4) {
        alert("입력값의 범위를 확인하세요.");
        return;
    }       

    let powerArray = [];
    for (let i = num1; i <= num2; i++) {
        powerArray.push(Math.pow(2, i));
    }    

    $('#result1').text('결과: ' + powerArray)
                 .css('color', 'blue');    
}


function ans4() {       
    let prices = $('#price').val().slice(1,-1).split(';').map(x => parseInt(x));
    prices.sort((a, b) => b - a);

    $('#result2').text(`${prices}`)
                 .css('color', 'blue');
}
