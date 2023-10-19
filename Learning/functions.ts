
// In any value, type must be mentioned or else system will not check the type

// If you want to make function with some default value you can make by below example

function credentials(name: string, password : string|number, isPaid : boolean = false ){
    return credentials
}
// now false is default value of isPaid


//----------- Sum function---------------------------
export function sum (num1: number, num2 : number){
 return num1 + num2
}



//---------------- Subtract------------------------
export function sub (num1 : number, num2 : number){
 return num1 - num2 
}



//   ------------------- arrow function ----------

// export let Multiply = (num1: number, num2: number) => {
//     return num1 * num2
//    }


//     => {
//     return num1 + num2
//    }

//    export let Add = (num1: number, num2: number) => {
//     return num1 + num2
//    }

//    export let Add = (num1: number, num2: number) => {
//     return num1 + num2
//    }

   let evenOdd = (num3: number) => {
    return (num3 % 2)
   }
