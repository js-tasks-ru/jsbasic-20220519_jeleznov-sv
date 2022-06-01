function filterRange(arr, a, b) {
  let filterFunc = (num) => {
    return num > a && num < b;
  };

  let filterNums = arr.filter(filterFunc);

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == a) {
      filterNums.push(a);
    }

    if (arr[i] == b) {
      filterNums.push(b);
    }
  }

  return filterNums;
}
