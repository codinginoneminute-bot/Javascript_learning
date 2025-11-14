// Write a Program to find a sum of an array

function SumArray(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum +=arr[i];
  }
  return sum;
}
console.log(SumArray([12,20,30]));
