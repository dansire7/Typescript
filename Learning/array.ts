let fruits : string [] = ["Apple", "Mango", "Grapes","Guava"]

//------------------Array Value Calling---------------

// if you want to call any single value of array

// console.log (fruits[2])

// Response will be Grapes


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

// to add any value in array in mid use splice
//  
//result will be ["Camel", "Dog", "Buffalo","Rabbit", "Cow","Horse"]
// console.log(fruits)
// fruits.splice(0,2,"strawberry")
// console.log(fruits)
// //-------------------------SLICE--------------------------

// // this will create a new array by using slice and remove first item and last items (if required)

// // This will create a new array that will be copy of pets
// // Than remove all items before index 3

// // let slicedPets = pets.slice(3);
// // console.log(pets) // result will be ["Camel", "Dog","Buffalo","Rabbit", "Cow","Horse"]

// // console.log(slicedPets) // result will be ["Rabbit", "Cow","Horse"]



// ------------------Delete Last Value-------------------

// If you want to delete last value

// fruits.pop()

// console.log (fruits)

// Response will be [ 'Banana', 'Apple', 'Mango', 'Strawberry' ]

//----------------Practice------

const name1 : string []= ['Abrar', "Aleem", "Khan", "Saleem"]
console.log (name1)
name1.splice  (-1, 0,"Qaim")
console.log(name1)

name1.push("Kareem")
console.log (name1)

const name2 = name1.slice (1,5)
console.log (name2)