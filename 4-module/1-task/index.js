function makeFriendsList (friends) {
  const ul = document.createElement('ul');

  const li1 = document.createElement('li');
  li1.innerHTML = `${friends[0].firstName} ${friends[0].lastName}`;

  ul.append(li1);

  const li2 = document.createElement('li');
  li2.innerHTML = `${friends[1].firstName} ${friends[1].lastName}`;

  ul.append(li2);

  const li3 = document.createElement('li');
  li3.innerHTML = `${friends[2].firstName} ${friends[2].lastName}`;

  ul.append(li3);

  return ul;
}
