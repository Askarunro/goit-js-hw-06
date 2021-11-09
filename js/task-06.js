const input = document.querySelector('#validation-input');
input.addEventListener('blur', even => {
  const minLength = +input.dataset.length;
  if (even.currentTarget.value.length === minLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
