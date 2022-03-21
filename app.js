//  variable 만드는 방법 2가지, "const, let"
//  "const"는 상수, 생성 후 바꿀 수 없음
//  "let" 생성할 때 사용, 생성 후에 값을 바꿀 수 있음. 재선언 X, 재할당 O

//  "variable" 은 태그 같은거라 보면 됨.
//  var은 쓰지마 씨발

const a = 5; // a와 b는 바꾸지 않을거임
const b = 2;

let myName = "2nun";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello," + " 2nun");

//===============================================================================

myName = "nun2" //이렇게 내 이름을 "nun2"로 하면

console.log("Your new name is " + myName); // "Your new name is nun2" 로 변경됨!!

//  20line 위에서는 myName은 2nun이지만 20line 아래에서는 nun2.