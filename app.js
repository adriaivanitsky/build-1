// import functions and grab DOM elements
import { random } from 'function.js';

const randomNum = document.getElementById('random-num');
const button = document.getElementById('generate');

// initialize global state
let result = function random(min, max) ?
// set event listeners 

button.addEventListener('click', ()=>{
    randomNum = Math.random();
    return Math.floor(Math.random() * max);
    randomNum.textcontent = result
});
// get user input
// use user input to update state 
// update DOM to reflect the new state
randomNum = Math.ceil(Math.random()