#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to codewithshazia - CLI number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Enter your guess number(Number from Limit from 1 to 5):",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulation ! You Guess a Correct number.");
}
else {
    console.log("Sorry , you guess a wrong number");
}
