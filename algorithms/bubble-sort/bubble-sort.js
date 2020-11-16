const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const cache = arr[j]
        arr[j] = arr[j + 1]  
        arr[j + 1] = cache
      }
    }
  }

  console.log(arr)
}

console.log(bubbleSort([3,4,1,7,2,9]))
