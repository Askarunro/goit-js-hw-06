const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');

input.addEventListener('change', even => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  buttonCreate.addEventListener('change', even => {});
  buttonDestroy.addEventListener('change', even => {});
});
