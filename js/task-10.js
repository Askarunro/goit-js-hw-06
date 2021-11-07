const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('change', even => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const countBoxesCreate = +even.currentTarget.value;
  buttonCreate.addEventListener('click', even => {
    const boxesArray = [];
    for (let i = 0; i < countBoxesCreate; i += 1) {
      const box = document.createElement('div');
      const valueWidth = 30 + 10 * i;
      const valueHeight = 30 + 10 * i;
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${valueWidth}px`;
      box.style.height = `${valueHeight}px`;
      console.log(boxesArray);
      boxesArray.push(box);
    }
    boxes.append(...boxesArray);
    return;
  });
  buttonDestroy.addEventListener('click', even => {
    const removeBox = document.querySelectorAll('#boxes div');
    removeBox.forEach(element => {
      element.remove();
    });
  });
});
