function handleSubmit(event) {
  event.preventDefault();
  let n = +document.forms[0].n.value;
  let bin = document.querySelector('#bin');
  bin.textContent = n.toString(2);
  let hex = document.querySelector('#hex');
  hex.textContent = n.toString(16);
}
