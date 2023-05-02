//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,

//etc and store them in an array

function repeatedNumbers(){
    
    let repeated = [];
    
    for(let i=1 ; i<=100 ; i++){
        let num = i.toString();
        if(num[0] == num[1]){
            repeated.push(i);
        }
    }
    console.log(repeated);
}

repeatedNumbers();