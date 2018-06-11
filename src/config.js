const config = {
  arrSize: 30,
  heightMultiplier: 5,
  frameDuration: .02, // ms
  animationDuration: .02, // ms
  sorts: [
    {
      id: "selection",
      func: selectionSort
    },
    {
      id: "insertion",
      func: insertionSort
    },
  ]
}
