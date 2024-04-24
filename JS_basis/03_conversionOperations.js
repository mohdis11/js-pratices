let score = undefined

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