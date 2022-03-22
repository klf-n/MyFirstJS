// recap II

//  object

//  object는 property를 가진 데이터를 저장해주며, { } 를 사용함.
//  ex)
const player = {
    name: "2nun",
    age: 101,
};

console.log(player);

// property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능함.
player.name = "nun2" //  player.name 을 "nun2" 로 변경.
console.log(player);
//  property를 추가 할 수도 있음.
player.sexy = "soon";  // --> soon
console.log(player, console);

//  ==========================================================================

//  funcion

//  function은 계속 반복해서 사용할 수 있는 코드 조각.
//  ex)
function plus(potato, salad) {
    console.log(potato + salad);
}
//  소괄호 안에 작성하는 것은 실행버튼을 누를 때마다 발생함.

plus(5, 10); //  potato를 5로 변경, salad를 10으로 변경.
plus(1234, 5678); //  potato를 1234로 변경, salad를 5678로 변경.
//  argument(인수)는 function을 실행하는 도안 정보를
//  function에게 보낼 수 있는 방법으로, 소괄호 안에 위치함.

//  ==========================================================================

//  Homework
//  더하기, 빼기, 나누기, 곱하기, 재곱 구현하기

const calculator = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    multiply: function(a, b){
        console.log(a * b);
    },
    power: function(a, b){
        console.log(a ** b);
    },
};

calculator.plus(7, 2);
calculator.minus(7, 7);
calculator.divide(3, 2);
calculator.multiply(8, 4);
calculator.poweroff(1, 2);