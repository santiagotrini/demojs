function handleSubmit(event) {
  event.preventDefault();
  let n = +document.forms[0].n.value;
  let h3 = document.querySelector('#bin');
  h3.textContent = n.toString(2);
}
