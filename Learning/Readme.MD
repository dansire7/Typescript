Setting environment
1. Install Node : nodejs.org/en/download/current/
2. Check Node version: node -v
3. Check NPM version : npm -v
4. Install VSCODE: code.visualstudio.com
5. Install Typescript: npm install -g typescript (g for Global installation)

For json file
1. tsc --init // for creating tsconfig.json
2. npm init -y // to create the package.json file
3. tsc -w // for auto creating the js file
4. Whenever your create any package ensure to create json file, tsconfig file and gitignore file
5. Update tsconfig file
6. Update package.json by "type" : "module"

NPM Packages
1. npm i @types/node -D// for downloading and installing the module on devdependency
2. npm i inquirer// for downloading and installing the inquirer module
3. npm i @types/inquirer -D // for downloading and installing inquirer types
4. npm i chalk chalk-animation // install  chalk & chalk-animation
5. npm i @types/chalk -D // install chalk types
6. npm i node-banner
7. npm uninstall @types/chalk // uninstall types chalk
8. npm i // if you want to re install all npm that were installed previously

Function
1. () => void	This is function data type (if return is not mentioned in function or else mention type if return is mentioned)
2. function func ():void {} //function syntax
3. let afunc = () => {} // arrow function syntax


Condition
1. if (){} else if (){} else {} // if else nested syntax
2. if () {if () {} else {}} else if (){} else {} // if else nested syntax


Loop
1. For loop
2. Syntax for (){}

3. Loop Example
4. for (let i = 0; i < 5, i++){ //first we have created a variable i with value 0, 
5. 				than run command untill i is less than 5, 
6. 				than we have updated the variable to keep adding 1 in current variable value 
7. console.log ("hello")}		Means this hello will be consoled 5 times

callback
1. setTimeout (() => {}, 2000 )

promise
1. new Promise (()=>{})

Array
1. let b = [] // array syntax
2. let b (string | number) [] = [] // array syntax with mentioning multi types
3. pets.pop () // This will remove the last array value in pets array.
4. pets.push("elephant") //This will add the "elephant" as last array value in pets array.
5. pets.shift () // This will remove the first array value in pets array.
6. pets.unshift("Monkey") //This will add the "Monkey" as first array value in pets array.
7. pets.splice (2, 1, "tiger") // 2 is the array index where you want to add the array value, 1 is for deleting the next 1 value of array i.e. 3rd index array will be removed and "tiger" is the value that will be added as array index 2.
8. pets.slice (2) // This will create a copy of already available array, remove 1st 2 values and store all remaining array values, you may reuse it by storing it in any variable.
9. pets.slice (1, 2) // This will create a copy of already available array, remove 1st 1 value than store remaining 2 array values, you may reuse it by storing it in any variable.

console.log
1. console.log (b[0]) // to print the first value of array
2. console.log("Hello" + lastname) // This will concatenate the string and variable named "lastname".
3. console.log(`Hello ${lastname}`) // This will concatenate the string and variable named "lastname".
4. console.log(typeof lastname) // This will show type of variable named "lastname".


Github
1. download Github : desktop.github.com
2. first sign in by : File > Options > Signin
3. Add local repository : File > Add local repositor > folder name > Create repository
4. Publish Repositor : Publish Repository > Uncheck keep this code private > Publish Repository
5. Open VS code in said local folder and create TS file
6. Now go to Github desktop, this will show changes, now click on summary required type whatever you want and click to "commit to main" button, than click on "push origin".
7. to ignore uploading of node_modules folder, you have to create a file name ".gitignore"