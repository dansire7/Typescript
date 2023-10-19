let age = 18.9;

//-------------Simple -------------

if (age >= 18){
    console.log("You are allowed")
}
else {
    console.log("You are not allowed")
}

//----------------else if---------------

let yourPercentage1 = 59

if(yourPercentage1 >=90){
    console.log("Your Grade is A+")
}
else if (yourPercentage1 >=80){
    console.log("Your Grade is A")
}
else if(yourPercentage1 >= 60){
    console.log("Your Grade is B")
}
else {
    console.log("You are Failed!!!")
}

// -----------------Nested if else statement---------------------

let userCountry = "Pakistan" ;
let userAge = 18;

if (userCountry === "Pakistan") {
    if (userAge >= 18){
    console.log("Here is your ticket")
}
    else {
        console.log("You are not adult")
    }

}
else {
    console.log ("Invalid Country")
}
