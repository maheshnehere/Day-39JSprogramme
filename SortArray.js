//Extend the above program to sort the array and then find the 2nd largest
//and the 2nd smallest element.

function sortArray(){
    let numbers = [];

    for(let i=1 ; i<= 10 ; i++){
        let random = Math.floor(Math.random()*900)+100;
        numbers.push(random);
    
    }
    numbers.sort();
    console.log("10 three digits random numbers",numbers);

    let secondLargest = numbers[1];

    let secondSmallest = numbers[numbers.length -2];
        
    console.log("Second Largest Number :",secondLargest);

    console.log("Second Smallest Number :",secondSmallest)
    

}
sortArray();
