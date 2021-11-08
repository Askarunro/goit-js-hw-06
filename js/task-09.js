const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const text = document.querySelector('.color');

button.addEventListener('click', even => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const a = getRandomHexColor();
  body.style.backgroundColor = a;
  text.textContent = a;
});
