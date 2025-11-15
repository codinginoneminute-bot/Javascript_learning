// Write a Program to print Fibonacci sequence up to n terms?

function Fibonacci(n){
let num1=0, num2=1, nextnum;
  console.log("Fibonacci series: ")
  for(let i=1; i<n; i++){
    
  console.log(num1);
  nextnum=num1+num2;
    num1=num2;
    num2=nextnum;
  }
}
Fibonacci(7);
