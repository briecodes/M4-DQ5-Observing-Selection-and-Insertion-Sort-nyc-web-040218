function insertionSort(arr) {
  arr.forEach((number, index) => {
    if (index === 0){
      return
    }else if (number < arr[index-1]){
      let a = arr[index];
      let b = arr[index-1];
      arr[index] = b;
      arr[index-1] = a;
      return insertionSort(arr);
    }else{
      return
    }
  });
  return
}
