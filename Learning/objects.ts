// let user1 :{
//     userName : string,
//     age : number,
//     isMarried : boolean,
//     greet :unknown, 
//     usage :  (string | number) [] 
// }
// = {
//     userName : "Danish",
//     age : 25,
//     isMarried : true,
//     greet : function (){
//     console.log("Hello " + user1.userName);
//     },
//     usage : ["Accounts", "Customer", "Restrictions", 23, 24]
// }; 

// // console.log(user1.userName)
// console.log(user1 ["age"])
// user1.greet()
// console.log(user1.usage)
// console.log(user1.userName + user1.usage)

//-------------------Nested object---------------

type Author = {
name : string,
age : number
}

type Book = {
    bookname : string,
    author : Author,
        
    }

let book : Book = {
    bookname : "Good",
    author : {
        name: "Farruk",
        age : 39
    }
} 

console.log (book.author.age)