function answer1() {
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

function answer2() {    
    let text = $('#text2').val();
    const noPunct = text.replace(/[`,.]/g, '').replace(/-\n/g, ' ');    
    $('#noPunct').text(noPunct);

    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words){
        if (word == 'the'){
            count++;
        }
    }
    $('#result2').text(`'the'의 갯수는 ${count} 입니다.`)
                 .css('color','blue');
}

function answer3() {    
    let prices = $('#price').val().split(';').map(x => parseInt(x));
    prices.sort((a, b) => b - a);

    $('#result3').text(`${prices}`)
                 .css('color', blue);
}
var cars = [];
function answer4_add() {    
    cars.push($('#car').val());
}
function answer4() {
    const manu = cars.map(x => x.split(' ')[0]);
    const model = cars.map(x => x.split(' ').slice(1).join(' '));    

    $('#input').text(cars);
    $('#manuf').text(manu);
    $('#model').text(model);
}