function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));