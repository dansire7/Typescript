
// console.log ("First")

// setTimeout (()=>{console.log ("Second")}, 2000)// This function will be printed after First and Third

// console.log ("Third")

//=============================CALL BACK================

// function ud (funccb : ()=>void, errorcb: ()=> void){
//     console.log ("Preparing Pizza")
//     setTimeout( () => {
//         if (isBurnt){
//         errorcb()}
//         else {
//             funccb()
//         }
//     }, 1000)

//     console.log ("Test console")
// }


// function cb (){
//     console.log ("Your pizza is ready")
// }

// function error (){
//     console.log ("Something went wrong")
// }

// let isBurnt = false             // for condition

// ud (cb, error)
