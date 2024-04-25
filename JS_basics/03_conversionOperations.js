/*let score = undefined

console.log(typeof score)
console.log(typeof (score))

let valueNumber = Number(score)

console.log(typeof valueNumber);
console.log(valueNumber)


/*
notes :- 
    conversion from     value   to  number
        number           33          33
        String           33adbd      NaN
        Boolean          true        1
        boolean          false       0
        null             null        0
        undefine         undefine    NaN
*/
/*
let isLoggedIn = ""

console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)


/*
notes :-
    
    conversion from     value   to  boolean
        number           1          true
                         0          false
                         "ismail"   true
                         ""         false
*/ 
/*
let num = ""

console.log(typeof num)
console.log(num)

let str = String(num)

console.log(typeof str);
console.log(str);

/*
notes:-
    conversion from     value   to  String
        number           75          75 
                         true        true
                         false       false
*/




/******************************************************** Operations ************************************************************/


let num = 3
let neganum = -num
console.log(neganum);

// similarly some common operations which used in any lauguage
/*console.log(2+2); Addition 
console.log(2-2);   Substraction
console.log(2*2);   multiplication
console.log(2**2);  expotential
console.log(2/3);   division and give answer as quotient
console.log(2%3);   division and give answer as remainder
*/



// some important operation with some difference in every language 

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 ); // In expression if string then the result shoulb be comes in string datatypes
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");// In this form the complier convert the expression from left to right

console.log((3 + 4) * 6 % 5); // In this we mainly use pedmas rule in any language
//

