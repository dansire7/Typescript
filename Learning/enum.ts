// We have created constant object

enum Days  {
    Sunday,
    Monday,
    Tuesday = 21,
    Wednesday,
    Thursday
}

console.log (Days.Thursday) // This will mention the index number of Thursday which will be 23

function schedule (days : Days){
    if (days = Days.Monday){
        console.log ("Today is Monday")
    }
    else if (days = Days.Tuesday){
        console.log ("Today is Tuesday")
    }
    else if  (days = Days.Wednesday){
        console.log ("Today is Wednesday")
    }
    else {
        console.log ("Today is other day")
    }
}

let a1 = schedule (Days.Thursday) 
