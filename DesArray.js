let arr = [65.34,97,86,23,90];
function DesArray(){
    let n=arr.length;
    for(let i=0; i<n-1;i++){
        for(let j=0; j<n-1-i;j++){
            if(arr[j]<arr[j+1]){

                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }return arr;
}
console.log(arr.sort((a,b)=>b-a));
