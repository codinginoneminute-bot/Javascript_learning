
function AscendingArray(arr){
  for(let i=0; i<arr.length;i++){
    for(j=1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let temp =arr[i];
        arr[i]=arr[j];
        arr[j]=temp;}
    }
  }return arr;
}
console.log(AscendingArray([23,54,12,14,7,34]));

console.log([23,43,45,67,86,24,21,23].sort((a,b)=>a-b));
