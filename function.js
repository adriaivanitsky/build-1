export function random(min, max){
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}
