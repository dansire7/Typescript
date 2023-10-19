function parentfunc (cbfunc: ()=> void ){       // we have mentioned function type here
    console.log ("Parent function")             // this the function code
    cbfunc()                                    // this the parameter output
}

function cb (){
    console.log ("Callback function")
}

parentfunc(cb)
