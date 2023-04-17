const getSum = () => {
   let sum = 0;
   return function(number) {
      return sum += number; 
   }
}

const getSum1 = getSum();

console.log(getSum1);

console.log(getSum1(3));
console.log(getSum1(5));
console.log(getSum1(20));