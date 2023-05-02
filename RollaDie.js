// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary


function getRandomDiceNumber(){
    return ((Math.floor(Math.random() * 10) % 6) + 1);
}

let diceNumberMap = new Map();
while(true){
    let randomDiceNumber = getRandomDiceNumber();
    let previousCount = diceNumberMap.get(randomDiceNumber);
    if (previousCount == null) {
        diceNumberMap.set(randomDiceNumber, 1);
    } else {
        diceNumberMap.set(randomDiceNumber, previousCount+1);
    }
    if(previousCount+1 >= 10){
        console.log(randomDiceNumber + " is reached 10 times");
        break;
    }
}

console.log("Dice",diceNumberMap);