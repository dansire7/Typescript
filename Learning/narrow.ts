// //----------------------- variable value-----------

// let age : string | number

// age = 25
// age = "22"
// age; // if you hover on age you will find type of age as string

// console.log(typeof age) //  answer will be string

//------------------ conditional narrowing-------------

// let marks = Math.random()

// let result = marks > 0.7? 70: "Fail" // if & else typed here

// console.log (result , marks)

// if (typeof result === "string" ){ //type will be mentioned double quotes
//   result.toUpperCase()  // if you change the type to number in if, else will allow string method only
// }
// else {
//     result.toFixed()
// }

//---------------------- how to fix values in value?------------

// let age : number | "Unknown" | "Died";

// age = 22            // ok
// age = "Unknown";    // ok
// age = "Died";       // ok
// age = "Living";     // not ok
    
//----------------------Truthiness narrowing-----------


// let age = Math.random() > 0.6 ? "Saleem" : undefined // undefined means no value in other word it is false value

// if (age){ // in brackets age means there should be some value for being true and if true the value of age will "Saleem"
//  age.toUpperCase // no issues as identified as string by system
// }
// else (age?.toUpperCase) // ? mark means not mandatory

