#! /usr/bin/env node

//=============== This is import part=================
import inquirer from "inquirer";
import showBanner from "node-banner"
import gradient from "gradient-string"
import chalk from "chalk"
import {sub, sum, div, mult} from "./func.js"


//===================Node Banner Used here ================================

(async () => {
    await showBanner('Basic Calculator 4 U !', 'Calculator for addition, subtraction, multiplication & division', "yellow", "green");
})();

//=============== we have created object here========================

let answers = [{
    name: "num1",
    type: "number",
    message: chalk.bold.blueBright("Please type your first number ="),
    validate: (input:number) => {
        if (isNaN(input)){
            return "Please type number="
        }
            return true
    }
},{
    name: "num2",
    type: "number",
    message: chalk.bold.blueBright ("Please type your second number ="),
    validate: (input:number) => {
        if (isNaN(input)){
            return "Please type number="
        }
            return true
    }
},{
    name: "operator",
    type: "list",
    choices: ["add", "subtract", "multiply", "divide"],
    message: chalk.bold.redBright("Please select the operator = ")
}];

//=================Variable for loop================
let toDo = [
{
    name: "again",
    type: "confirm",
    message: chalk.bold.yellowBright("Do you want to calculate again")
}]


// ================== Main Formula of calculator=============

async function calculator() {
    
    let condition = true;
    while (condition) {
           
    let {num1, num2, operator} = await inquirer.prompt(answers);

    if(operator === "add" ){
    console.log (gradient.rainbow(`If we ${operator} ${num1} & ${num2}, the answer will be ${sum(num1, num2)}.`))
}
    else if (operator === "subtract" ){
    console.log (gradient.rainbow(`If we ${operator} ${num2} from ${num1}, the answer will be ${sub(num1, num2)}.`))
}
    else if (operator === "divide" ){
    console.log (gradient.rainbow(`If we ${operator} ${num1} with ${num2}, the answer will be ${div(num1,num2)}.`))
}
    else {
        console.log (gradient.rainbow(`If we ${operator} ${num1} with ${num2}, the answer will be ${mult(num1, num2)}.`))
    }
    
    let {again} = await inquirer.prompt(toDo);
    condition = again;
    
}
}


//===================== timeout created and calculator formula called here=================

setTimeout(() => {
    
    calculator()
}, 1000);