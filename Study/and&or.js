//  AND와 OR!

//  AND 는 false가 들어가면 false!
//  OR 은 true가 들어가면 true!

//  AND = &&
//  OR = ||

//  자세한건 맨 아래!

const age = parseInt(prompt("How old r u?")); //  경고창으로 "How old r u?" 라고 물어본다.

if(isNaN(age) || age < 0) { // 만약 age 태그가 NaN 이고, 음수라면
    console.log("pls write a real positive number."); // ""pls write a real positive number." 가 출력된다.
} else if (age < 18) { // 아니고, (age 태그가 NaN 이 아니면서, 양수라면) age 태그가 18보다 낮다면
    console.log("u r too young.");  // "u r too young." 이라고 출력된다.
} else if (age >= 18 && age <= 50) { //  age 태그가 NaN이 아니고, 양수면서 age 태그가 18 과 50 사이라면
        console.log("u can drinking!");  // "u can drinking!" 라고 출력된다
} else if (age > 50 && age <= 80) { // age 태그가 NaN이 아니면서 age 태그가 18보다 높으나, 50 이상이고, 80보다 낮다면
    console.log("u should exercise lmao"); // "u should exercise lmao" 이라고 출력된다
} else if(age > 80) { // 80보다 높으면
        console.log("u can do whatever u want."); // "u can do whatever u want." 라고 출력된다.
}
 
//  true || true => true
//  false || true => true
//  true || false => true
//  false || false => false

//  true && true => true
//  false && true => false
//  true && false => false
//  false && false => false
