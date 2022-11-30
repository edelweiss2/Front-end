// 반복횟수를 정해두지 않고 반복
// 주사위를 던져 누적합이 30을 초과하면 loop을 그만둠

let cumSum = 0;
while (cumSum <= 30) {
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    cumSum += dice;
}
console.log(cumSum, '\n');

cumSum = 0;
while (true) {
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    cumSum += dice;
    if(cumSum>30)
    break
}
console.log(cumSum);