console.log("zadanie 4");
function getFibonacciNumbers(n) {
    let array = [];
    let numberCurr = 0;
    for (let i = 0; i <= n; i++) {
         numberCurr = 0;
          if(i === 0 || i === 1){
              numberCurr = i;
              array.push(numberCurr);
           } else {
               numberCurr = i - 1 + i - 2;
                  array.push(numberCurr);
          }
 }
    return console.log(array);
}

getFibonacciNumbers(9);

// Wrócić do zadania