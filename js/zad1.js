console.log("zadanie 1");

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function theSec(array){
   let bigger = 0;
   let biggerSec =0;
    for (let i=0; i<array.length; i++){
        if(array[i] > bigger){
            bigger = array[i]
        }
    }
    for (let j=0; j<array.length; j++){
        if(array[j] > biggerSec && array[j] < bigger){
            biggerSec = array[j]
        }
    }
    return biggerSec;
}

console.log(theSec(arr1));