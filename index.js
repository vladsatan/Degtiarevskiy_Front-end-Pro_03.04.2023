function pow(num, degree) {
   if(degree === 0) {
      return 1;
   } else {
      const result = num * pow(num, degree - 1);
      return result;
   }
}

console.log(pow(5,4));

