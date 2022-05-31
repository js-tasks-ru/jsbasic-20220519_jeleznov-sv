function truncate(str, maxlength) {
  let maxlength1 = maxlength - 1;
  if (str.length > maxlength1) {
    return str.slice(0, maxlength1) + "…";
  } else {
    return str;
  }
}
