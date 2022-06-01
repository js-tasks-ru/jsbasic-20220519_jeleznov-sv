function camelize(str) {
  let re = '-';
  let namesList = str.split(re);

  firstWord = namesList[0];
  namesList.splice(0, 1);

  let mapFunc = (num) => {
    return num = num[0].toUpperCase() + num.slice(1);
  };

  let result1 = namesList.map(mapFunc);
  result1.unshift(firstWord);
  let result = result1.join('');

  return result;
}
