// import functions and grab DOM elements
import { random } from 'function.js';

const randomNum = document.getElementById('random-num');
const button = document.getElementById('generate');

// initialize global state
let randomNum = Math.random();
// set event listeners 

button.addEventListener('click', ()=>{
    randomNum = Math.random();
    return Math.floor(Math.random() * max);
    randomNum.textContent = result 
});
// get user input
// use user input to update state 
// update DOM to reflect the new state
