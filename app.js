/*  variable 만드는 방법 2가지, "const, let"
"let" 은 생성할 때만 사용, const는 고정  */

/* 단순하게 let을 설명하자면, let은 아래에서 variable 변경이 가능함 */

const a = 5; // a와 b는 바꾸지 않을거임
const b = 2;

let myName = "2nun";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello," + " 2nun");

myName = "nun2" //이렇게 내 이름을 "nun2"로 하면

console.log("Your new name is " + myName); // "Your new name is nun2" 로 변경됨!!