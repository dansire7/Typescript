type  Student = {
    studentName : string ,
    studentId : number
    age : number
}

type  Teacher = {
    teacherName : string ,
    teacherId : number
    age : number
}

type Intersection = Teacher & Student

let intersection : Intersection = {
    studentId : 21,
    studentName : "Sahil",
    teacherName : "Adeem",
    teacherId : 52,
    age : 25

}


export{}