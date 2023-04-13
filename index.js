// TASK 1

for (let i = 20; i <= 30; i=i + .5){
    console.log(i);
}

// TASK 2

for (let i = 10; i <= 100; i = i + 10) {
    console.log(i*27);
}

// TASK 3

function getInteger(n) {
   for (let i = 1; i <= 100; i++) {
      if (Math.pow(i, 2) > n) { 
        break;
      } else {
        console.log(i);
      }
   }
}

getInteger(84)
getInteger(1000)


// TASK 4


function isPrimeNumber(n) {

    let numberOfDivisors = 0;
    for (let i = 1; i <= n; i++) {
       if(n%i === 0){
        numberOfDivisors++;
       }
    }

    if(numberOfDivisors === 2){
        console.log(`${n} - является простым числом`);
    } else {
        console.log(`${n} - не является простым числом`);
    }
}

isPrimeNumber(10);
isPrimeNumber(13);

// TASK 5

    
function samplingOfNumbers(n) {
  
     let x = 0;
     let sum = 0;
     do {
        x++;
        sum = Math.pow(3,x);
     } while (sum < n);

     if(sum === n){
        console.log('можна отримати')
     } else {
        console.log('не можна отримати');
     }


}

samplingOfNumbers(81);
samplingOfNumbers(17);


