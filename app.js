//  데이터를 나열하기 위한 방법 중 하나.

//  항상 [ ] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, Boolean, Text, 숫자 등 데이터 정렬이 가능함.
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; // <=(ex)

//  만약, 위의 변수에서 5번째 element 값만 출력하려면 다음과 같이 하면 됨.
console.log(daysOfWeek);

//  컴퓨터는 숫자를 0부터 세기 때문에, "mon" 은 0번째라고 생각하면 됨.
//  위의 상태에서 daysOfWeek이란 변수에 하나의 값을 더 넣고 싶다면 다음과 같이 하면 됨.
daysOfWeek.push("holiday"); //  holiday를 수정하면 됨

console.log(daysOfWeek); //  그러고 나서 다시 한 번 실행해주기!

//  Array 는 하나의 변수 안에 데이터의 List를 가지는 것.
//  다른 프로그래밍 언어에도 있는 가장 기초적이고 필수적인 데이터 구조!
// 값을 리스트로 정리하는 것.
