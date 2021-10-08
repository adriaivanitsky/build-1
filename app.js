// import functions and grab DOM elements

const randomNum = document.getElementById('random-num');
const button = document.getElementById('generate');

// initialize global state
// set event listeners 

button.addEventListener('click', ()=>{
    let result = Math.random();
    randomNum.textContent = result;
    
    //return Math.floor(Math.random() * max);
});
// get user input
// use user input to update state 
// update DOM to reflect the new state


