Setting environment
Install Node : nodejs.org/en/download/current/
Check Node version: node -v
Check NPM version : npm -v
Install VSCODE: code.visualstudio.com
Install Typescript: npm install -g typescript (g for Global installation)

NPM Packages
npm i @types/node -D// for downloading and installing the module on devdependency
npm i inquirer// for downloading and installing the inquirer module
npm i @types/inquirer -D // for downloading and installing inquirer types
npm i chalk chalk-animation // install  chalk & chalk-animation
npm i @types/chalk -D // install chalk types
npm i node-banner
npm uninstall @types/chalk // uninstall types chalk
npm i // if you want to re install all npm that were installed previously

For json file
tsc --init // for creating tsconfig.json
npm init -y // to create the package.json file

tsc -w // for auto creating the js file

Whenever your create any package ensure to create json file, tsconfig file and gitignore file
Update tsconfig file
Update package.json by "type" : "module"

Variable
let a = 25 // for variable

Function
() => void	This is function data type (if return is not mentioned in function or else mention type if return is mentioned)
function func ():void {} //function syntax
let afunc = () => {} // arrow function syntax


Condition
if (){} else if (){} else {} // if else nested syntax
if () {if () {} else {}} else if (){} else {} // if else nested syntax


Loop
For loop
for (){}

Example
for (let i = 0; i < 5, i++){ //first we have created a variable i with value 0, 
				than run command untill i is less than 5, 
				than we have updated the variable to keep adding 1 in current variable value 
console.log ("hello")		Means this hello will be consoled 5 times
}



callback
setTimeout (() => {}, 2000 )
promise
new Promise (()=>{})




Array
let b = [] // array syntax
let b (string | number) [] = [] // array syntax with mentioning multi types
pets.pop () // This will remove the last array value in pets array.
pets.push("elephant") //This will add the "elephant" as last array value in pets array.
pets.shift () // This will remove the first array value in pets array.
pets.unshift("Monkey") //This will add the "Monkey" as first array value in pets array.
pets.splice (2, 1, "tiger") // 2 is the array index where you want to add the array value, 1 is for deleting the next 1 value of array i.e. 3rd index array will be removed and "tiger" is the value that will be added as array index 2.
pets.slice (2) // This will create a copy of already available array, remove 1st 2 values and store all remaining array values, you may reuse it by storing it in any variable.
pets.slice (1, 2) // This will create a copy of already available array, remove 1st 1 value than store remaining 2 array values, you may reuse it by storing it in any variable.


console.log
console.log (b[0]) // to print the first value of array
console.log("Hello" + lastname) // This will concatenate the string and variable named "lastname".
console.log(`Hello ${lastname}`) // This will concatenate the string and variable named "lastname".
console.log(typeof lastname) // This will show type of variable named "lastname".


Github
download Github : desktop.github.com
first sign in by : File > Options > Signin
Add local repository : File > Add local repositor > folder name > Create repository
Publish Repositor : Publish Repository > Uncheck keep this code private > Publish Repository
Open VS code in said local folder and create TS file
Now go to Github desktop, this will show changes, now click on summary required type whatever you want and click to "commit to main" button, than click on "push origin".
to ignore uploading of node_modules folder, you have to create a file name ".gitignore"