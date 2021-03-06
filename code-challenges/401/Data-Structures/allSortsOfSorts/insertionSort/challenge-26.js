'use strict'

// pseudo
// InsertionSort(int[] arr)
  
//     FOR i = 1 to arr.length
    
//       int j <-- i - 1
//       int temp <-- arr[i]
      
//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1
        
//       arr[j + 1] <-- temp

const arr = [5, 4, 9, 1, 2];

// ^arr we will sort store in var

// copies and moves

insertSort = (arr)=>{
  for (let i = 1; i<arr.length;i++){
    let temp = arr[i];
    let j=i-1;

    while(j>=0 && temp<arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1]=temp;
  }
}

insertSort(arr);