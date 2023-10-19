// class Person {
//     name : string = "Aleem"
//     age : number = 33
// }

// let personinfo = new Person() // new will call the class
// let personinfo1 = new Person()
// let personinfo2 = new Person()
// let personinfo3 = new Person()

// console.log(personinfo1)

// class Person {
//     name : string       // we have not mentioned the value but value is mandatory
//     age : number
    
//     constructor(name: string, age: number){ // here you have define the parameter in constructor
//         this.name = name                // mentioned parameter for variable value
//         this.age = age
//     }

// }

// let aliinfo = new Person ("Ali", 25)
// let kamraninfo = new Person ("kamran", 33)

// console.log(aliinfo)


//==============If you dont want to update any initial value in class


// class Tree {
//     name : string
//     age : number
    
//     constructor (name: string, age: number){
//         this.name = name
//         this.age = age
//     }

// }



class GoodGreeter {
    readonly name : string
    constructor (name: string){
        this.name = name
    }

    greet(){
        console.log ("Hello", this.name)
    }

}

let myGreeter = new GoodGreeter("Ameer")
myGreeter.greet()


