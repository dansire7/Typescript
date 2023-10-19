interface deal1 {
    food1 : string,
    food2 : string
}

interface deal2 {
    food1 : string,
    food2 : string,
    food3 : string
}

let Amin : deal1 = {
    food1 : "Biryani",
    food2 : "Pulao"
}

let Gul : deal2 = {
    food1 : "Biryani",
    food2 : "Pulao",
    food3 : "Haleem"
 
}

// Gul = Amin

Amin = Gul