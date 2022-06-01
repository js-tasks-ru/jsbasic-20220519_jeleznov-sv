function namify(users) {
  let arrayNames = [];

  for (let i = 0; i < users.length; i++) {
    arrayNames.push(`${users[i].name}`);
  }
  return arrayNames;
}
