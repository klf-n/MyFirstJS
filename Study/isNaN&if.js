// isNaN & If

//  isNaN 은 무언가가 NaN(Not a Number) 인지 판별하는 코드.

const age = parseInt(prompt("How old r u?"));

//  false : age는 NaN이 아니라는 뜻 (숫자가 맞다는 뜻)  
//  true : age는 NaN이 맞는 뜻 (숫자가 아니라는 뜻)  


//  isNaN은 Boolean을 return 해줌.

if(isNaN(age)) { // 만약 age 태그가 NaN 이면
    console.log("pls write a nunber."); // "pls write a nunber." 가 출력된다.
} else { // 아니라면, (age 태그가 NaN 이 아니라면)
    console.log("u correct!");  // "u correct!" 라고 출력된다.
}
