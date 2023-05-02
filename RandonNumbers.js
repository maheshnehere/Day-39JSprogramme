//1. Write a program in the following steps
//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.


function randomNumbers(){
    let numbers = [];

    for(let i=1 ; i<= 10 ; i++){
        let random = Math.floor(Math.random()*900)+100;
        numbers.push(random);
    
    }
    console.log("10 three digits random numbers",numbers);

    let largest = 0;
    let secondLargest = 0;
    let smallest  = Infinity;
    let secondSmallest = Infinity;
    for(let i=1; i<numbers.length ; i++){
        if(numbers[i] > largest){
            secondLargest = largest;
            largest = numbers[i];
        }else if(numbers[i] > secondLargest){
            secondLargest = numbers[i];
        }

        if(numbers[i] < smallest){
            secondSmallest = smallest;
            smallest = numbers[i];
        }else if(numbers[i] < secondSmallest){
            secondSmallest = numbers[i];
        }
    }
        
    console.log("Second Largest Number :",secondLargest);

    console.log("Second Smallest Number :",secondSmallest)
    

}
randomNumbers();