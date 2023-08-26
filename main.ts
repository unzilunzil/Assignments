
import inquirer from "inquirer" ;

let answer = await inquirer.prompt([
    { message : "enter your first number",
       type : "number",
       name : "num1",
    },
    {
        message : "enter your second number",
        type : "number",
        name : "num2",
    
    },
    {
        message : "select operator",
        type : "list",
        choices : ["+" , "-","*","/"],
        name : "operator",
    },
    ]);
    let result = (answer.num1 , answer.num2)
    console.log(result);



