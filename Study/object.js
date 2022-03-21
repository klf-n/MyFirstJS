//  Object
//  object는 property를 가진 데이터를 저장해주며, { } 를 사용함.
const player = {
    name: "2nun",
    points: 10,
    color: "blue",
    food: true,
};

//  property를 불러오는 방법은 2가지가 있음.

//  1. console.log(player.name); => 2nun
//  2. console.log(player["name"]); => 2nun
console.log(player.food); // => true

// property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능함.

console.log(player);
player.color = "pink";
console.log(player.color);
//  --> pink

//  그리고 property를 추가 할 수도 있다.

player.koreanName = "눈눈이";
console.log(player);
//  --> {name: "2nun", color: "pink", food: true, koreaName: "눈눈이"} */