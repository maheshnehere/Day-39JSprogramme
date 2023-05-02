//Extend the Prime Factorization Program to store all the Prime Factors of a

//number n into an array and finally display the output.

function primeNumbers(){

    let start = window.prompt("Start from ...:");
    let end = window.prompt("End...");

    let prime = [];

    for(let i=start ; i<end ; i++){
    var count = 0;
    for(let j= 2 ; j< i-1 ; j++){
        if(i % j == 0){
         count++
        }
    }
        if(count == 0){
          prime.push(i);
     }
    }
    console.log("Prime Numbers : ",prime);
}

primeNumbers();
