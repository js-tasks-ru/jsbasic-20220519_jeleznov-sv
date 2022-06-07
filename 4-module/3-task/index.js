function highlight(table) {
  for (i = 1; i < table.rows.length; i++) {
    let tr = table.rows[i];

    let tr1 = table.rows[i].cells[3];

    if (tr1.dataset.available == 'true') {
      tr.classList.add('available');
    } if (tr1.dataset.available == 'false') {
      tr.classList.add('unavailable');
    } if (!('data-available' in tr1.hasAttribute)) {
      tr.hidden = true;
    }


    let gender = table.rows[i].cells[2];

    if (gender.innerHTML == 'm') {
      tr.classList.add('male');
    } if (gender.innerHTML == 'f') {
      tr.classList.add('female');
    }

    let age = table.rows[i].cells[1];

    if (parseInt(age.innerHTML, 10) < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }
  return table;
}
