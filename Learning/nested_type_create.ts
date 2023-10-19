type Author = {
    firstName : string,
    lastName : string
}

type Book = {
    name : string
    author : Author
}


let book : Book = {
    name : "Guide",
    author : {
        firstName : "Muhammad",
        lastName : "Ali",
    }
}

export{}