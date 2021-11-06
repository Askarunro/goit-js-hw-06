const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', even => {
  const newFontSize = even.currentTarget.value;
  text.style.fontSize = `${newFontSize}px`;
});
