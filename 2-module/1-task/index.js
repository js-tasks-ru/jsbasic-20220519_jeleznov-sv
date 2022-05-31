function sumSalary(salaries) {
  let arraySalary = Object.values(salaries);
  let arrayNumber = [];

  for (let i = 0; i < arraySalary.length; i++) {
    if (typeof arraySalary[i] == "number" && arraySalary[i] !== Infinity && arraySalary[i] !== -Infinity && true !== isNaN(arraySalary[i])) {
      arrayNumber[i] = arraySalary[i];
    }
  }

  if (arrayNumber.length == 0) {
    return 0;
  }

  let a = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    a += arrayNumber[i];
  }
  return a;
}
