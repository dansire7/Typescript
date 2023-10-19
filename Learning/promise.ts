//===================PROMISE===================

let makeorder = () => {
    return new Promise ((resolve,reject) => {
        let isBurnt = false
        if (isBurnt){
            reject("Something went wrong")
        }
        else (resolve ("Your Pizza is ready"))
    })
}
// ===============You can retrieve results by using promise example=============
// makeorder()
//     .then((value) => {console.log(value)})
//     .catch((error) => {console.log (error)})

//====================or use Async function=====================

let getorder = async () => {

try{
    
    let result = await makeorder()  // await can be used only for return promise unless it wont work
    console.log (result) 

}

catch (value){
    console.log (value)
}

}

getorder ()
