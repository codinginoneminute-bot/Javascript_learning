// Write a Program to check if a number is prime or not?num %

function PrimeOrNot(){
  let num = 23;
  if( num <= 1)
    return false;
  for(let i=2; i<num; i++){
    if(num % i===0)
      return false;
  }
return true;
}
console.log(PrimeOrNot());

