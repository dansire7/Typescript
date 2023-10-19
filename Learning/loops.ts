

// for (let i = 0; i < 5; i++){
//    console.log( "Hello World",i)
// }


//--------------------------------------------------------


let cities = ["Karachi", "Lahore", "Hyderabad", "Islamabad", "Rawalpindi", "Faisalabad"]

for (let i = 0; i < 5; i++){
if (cities[i] === "Hyderabad"){
    console.log ("Hyderabad is expensive city", i)
    break // This will terminate the loop
}
}


//---------------------------------Nested Loops--------------------------


let firstName1 : string[]= ["Amir ","Aziz ", "Iqbal ", "Saleem ", "Qaim "]
let lastName: string []= ["Ali", "Kiani", "Kaleem", "Dhanani", "Khani"]
let fullName1: string[] = []

for (let i=0 ; i < firstName1.length ; ++i){
    for (let j = 0; j < lastName.length ; ++j){
fullName1.push(firstName1[i] + lastName[j])

    }
}

console.log(fullName1)
