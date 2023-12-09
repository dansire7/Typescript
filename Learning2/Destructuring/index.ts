//  =============================== Array =============================

let arr = ['Danish', 28, 'abc@gmail.com']


// ==================== destructuring of array==============

let [name1, age, email] = arr

console.log(name1)
console.log(age)
console.log(email)


// ==================== Object ============================
let person = {
    name2: 'Kamran',
    age2 : '28',
    email2: 'def@gmail.com'
};

// ========================= Object Destructuring =====================

let {name2,age2,email2} = person

console.log (name2)