#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let randomNum = Math.floor(Math.random() * 2);
let inp_confirm = [{
        name: "guess",
        type: "confirm",
        message: chalk.bold.bgBlueBright.whiteBright("Can you guess correct number?"),
    }];
let inp_num1 = [{
        name: "num1",
        type: "list",
        message: chalk.bold.bgBlueBright.yellowBright("Ok! select any one?"),
        choices: ['0', '1']
    }];
async function game() {
    // ============ Variable declared ===========
    let { guess } = await inquirer.prompt(inp_confirm);
    //  ==================if wanna play==================
    if (guess) {
        let { num1 } = await inquirer.prompt(inp_num1);
        if (randomNum == parseInt(num1)) {
            console.log(chalk.bold.bgGreen.whiteBright("Excelent! Your answer is correct."));
        }
        else {
            guess = false;
            console.log(chalk.bgRed.yellowBright(`Correct answer is ${randomNum}, Better Luck Next time.`));
        }
    }
    // //============If dont want to play=============== 
    else {
        console.log(chalk.bold.bgRedBright.yellowBright("As you wish!"));
    }
}
game();
// // if(randomNum == parseInt(u_input.num1)){
// // console.log ("Congrats! You have guessed correct number.")
// // }
// // else{
// //     console.log (`Sorry! Correct answer is ${randomNum}.`)
// //     }
// // }
// // // console.log(randomNum)
