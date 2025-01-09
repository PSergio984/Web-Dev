function addOne(num) {
    return num + 1;
  }
  const arr = [1, 2, 3, 4, 5];
  const mappedArr = arr.map(addOne);
  console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
  