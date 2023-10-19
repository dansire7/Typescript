// // Chapter 1 - Print
// // This is how  you can print any thing on TS

// console.log("Hello World");

// // Chapter 2 - Variable
// // Now you can learn how to create a variable

// let msg = "Hello World";

// console.log(msg)

// // Chapter 3 - Variables type annotation
// // How to assign the values with type annotation

// let name1 : string = "Danish"
// let age2 : number = 23
// let cond1 : boolean = true

// // -------------------------Concatenate---------------

// let msg2 = `Hi my name is ${name1} and I am ${age2} years old`
// console.log (msg2);

// // Chapter 4
// //--------------------- Operators -----------------------

// // Arithmetic operators

// let add = age2+30;
// let sub = age2 -10;
// let div = age2 / 2;
// let mult = age2 * 2;
// let exp = age2 ** 2;
// let modu = age2 % 2

// // Assignment operators

// age2 += 9

// // Comparison Operator - This will always answers in true or false only

// let n1 = 32
// let n2 = 40

// let ifEquals = n1 == age2 // This will verify that n1 value is equals to n2
// let ifeqtype = n1 === age2
// let ifGreater = age2 >= n1; //
// let ifLess = age2 <= n2;
// let ifnoteq = n1 != n2
// // True         False
// let orstat = n1 <= age2 || n2 == n1
// let andstat = n1 <= age2 && n2 == n1

// //Chapter 5
// // ------------------------if, ifelse and else---------------------

// let marksObtained = 466.99;
// let totalMarks = 700;  
// let results = marksObtained / totalMarks * 100


// if(results >= 80){
//     console.log(`Congrats you have passed the exams with A+ Grade and your percentage is ${results.toFixed()}%`)
// }
// else if (results >= 70) {
//     console.log(`Congrats you have passed the exams with A Grade and your percentage is ${results.toFixed()}%`)
// }
// else if (results >= 60) {
//     console.log(`Congrats you have passed the exams with B Grade and your percentage is ${results.toFixed()}%`)
// }
// else if (results >= 50) {
//     console.log(`Congrats you have passed the exams with C Grade and your percentage is ${results.toFixed()}%`)
// }
// else(console.log("You are failed"))


// // Chapter 6


// //Chapter 6
// //-------------------------Functions-------------------------
// // from this you may create a function that will allow you to shorten the code

// function greet (name2:string){
//     console.log (`Hi ${name2}, how are you?`)
// }

// greet("Danish");



// //---------------------------------LOOPS------------------

// // Chapter 7
// // Loops

// //  value    validation  Update
// // for (let i = 0; i < 6 ; i = ++i ) {
// //     console.log(i)
// // }


// let cities = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Faisalabad", "Gujranwala"]

// let match = false

// for (var j=0; j < cities.length; ++j){
// if ("Islambad" === cities[j] ){
//     match = true
//     console.log (`The cleanest city is ${cities[j]}`)
//     break;
// }

// }
// if (match === false){
//     console.log ("This city is not in the list")
// }












// //---------------------------------ARRAYS-----------------------

// // Arrays

// let fruits : string [] = ["Apple", "Mango", "Grapes","Guava"]

// // to print the Mango
// //console.log (fruits[1])

// //-----------------POP----------------
// // to remove last item from array use pop method
// // fruits.pop() this will remove the "Guava" from list

// //----------------PUSH------------------
// // to add the item in fruits using push method as last item

// fruits.push("Pineapple")
// fruits.push("Strawberry")

// //-----------------UPDATE-------------------

// // to replace the items in array
// //fruits[2] = "Pineapple"
// //fruits[0] = "Strawberry"

// //-------------------SHIFT--------------------

// // to remove 1st value from array use shift method

// let pets = ["Cat", "Dog", "Rabbit", "Cow","Horse"]
// console.log(pets) 
// //results will ["Cat", "Dog", "Rabbit", "Cow","Horse"]
// pets.shift() // this method will remove cat
// console.log (pets)
// //result will be ["Dog", "Rabbit", "Cow","Horse"]

// //--------------------UNSHIFT---------------------

// // to add value as 1st item use unshift methocd

// pets.unshift("Camel")
// console.log(pets)
// //result will be ["Camel", "Dog", "Rabbit", "Cow","Horse"]

// //-------------------------SPLICE-----------------------

// // to add any value in array in mid use splice
// pets.splice(2,0,"Buffallo")
// console.log(pets)
// //result will be ["Camel", "Dog", "Buffalo","Rabbit", "Cow","Horse"]

// //-------------------------SLICE--------------------------

// // this will create a new array by using slice and remove first item and last items (if required)

// // This will create a new array that will be copy of pets
// // Than remove all items before index 3

// // let slicedPets = pets.slice(3);
// // console.log(pets) // result will be ["Camel", "Dog","Buffalo","Rabbit", "Cow","Horse"]

// // console.log(slicedPets) // result will be ["Rabbit", "Cow","Horse"]


