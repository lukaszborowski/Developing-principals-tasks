console.log("zadanie 3");

function getEvenSum(n){
    let counter = 0;
    for(let i=1; i <=n; i++){
        if(i % 2 === 0){
            counter = counter + i;
        }
    }
    return counter;
}

console.log(getEvenSum(32));