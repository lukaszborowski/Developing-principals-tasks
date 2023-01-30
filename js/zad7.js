console.log("Zadanie 7");

function whatNumber(n){
    let array = [];
    let counter = 0;
    for(let i=1; i<n; i++){
        if(n % i === 0){
            array.push(i)
        }
    }
    console.log(array);
    for(let j=0; j<array.length; j++){
        counter += array[j];
    }
    console.log(counter);

    if(counter === n){
        return console.log(n + " " + "jest doskonała" );
    } else if (counter < n){
        return console.log(n + " " + " jest niekompletna");
    } else {
        return console.log(false);
    }
}

whatNumber(6);