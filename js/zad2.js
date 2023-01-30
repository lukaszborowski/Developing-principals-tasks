console.log("Zadanie 2");

const array2 = [4, -5, 0, 2, -67, 8, 10, -34 ];
let ujemne = []

function belowZero(arr){
    for (let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            ujemne.push(arr[i]);
        }
    }
}

belowZero(array2);
console.log(ujemne);