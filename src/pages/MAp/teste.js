function diagonalDifference(arr){
    let n = arr.length; 
    let left= 0;
    let right = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i===j){
          left+=arr[i][j];
        }
        if(i+j===n-1){
         right+=arr[i][j];
        }
    }
  }
  return Math.abs(left-right);
}

function miniMaxSum(arr) {
let minValue = 0, maxValue = 0, minIndex = 0, maxIndex = 0, minSum = 0, maxSum = 0;
 minValue = Math.min(...arr);
 console.log(minValue)
 maxValue = Math.max(...arr);
 console.log(maxValue)
 minIndex = arr.indexOf(minValue);
 console.log(minIndex)
 maxIndex = arr.indexOf(maxValue);
console.log(maxIndex)

for (let i = 0; i < arr.length; i++){
    if (minIndex != i) {
        maxSum += arr[i];
    }
    if (maxIndex != i) {
        minSum += arr[i];
    }
}
   console.log(minSum, maxSum);
}
miniMaxSum([1,2,3,4,5])