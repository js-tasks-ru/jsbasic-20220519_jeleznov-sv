function checkSpam(str) {
  // ваш код...
  let strUpper = str.toUpperCase();
  if (strUpper.includes('1XBET')) {
    return true;
  } else if (strUpper.includes('FREE')) {
    return true;
  } else {
    return false;
  }
}
