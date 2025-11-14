 Find the largest number in an array in JavaScript.

   function FindLargest(arr){
   let largest = arr[0];
   for( let i = 1; i < arr.length; i++){
     if(arr[i] > largest){
       largest=arr[i];
     }
   }
   return largest;
 }
console.log(FindLargest([12,64,91,32]));
            
