console.log("Zadanie 5");

function isPrimeNumber(n){
    let prime = true;
    if(n === 1){
        return prime;
    } else if ( n > 1){
        for(let i=2; i<n; i++){
            if(n % i === 0){
                prime = false;
                break;
            }
        }
    }
    return console.log(prime);
}

isPrimeNumber(9);