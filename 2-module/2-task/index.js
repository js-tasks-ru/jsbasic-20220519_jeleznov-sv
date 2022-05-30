function isEmpty(schedule) {
  // ваш код...
  let arrayTest = Object.keys(schedule);

  if (arrayTest.length === 0) {
    return true;
  } else {
    return false;
  }
}
