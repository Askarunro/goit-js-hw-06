const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const valueCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', event => {
  const counterValue = +valueCounter.textContent;
  let newValue;
  newValue = counterValue - 1;
  valueCounter.textContent = `${newValue}`;
});

incrementBtn.addEventListener('click', event => {
  const counterValue = +valueCounter.textContent;
  let newValue;
  newValue = counterValue + 1;
  valueCounter.textContent = `${newValue}`;
});

// 2 ВАРІАНТ

// const btns = document.querySelectorAll('#counter button');
// const valueCounter = document.querySelector('#value');
// btns.forEach(btn => {
//   btn.addEventListener('click', even => {
//     const action = btn.dataset.action;
//     const currentValue = +valueCounter.textContent;
//     let newValue;
//     console.log(currentValue);
//     if (action === 'increment') {
//       newValue = currentValue + 1;
//     } else {
//       newValue = currentValue - 1;
//     }
//     valueCounter.textContent = `${newValue}`;
//     console.log(valueCounter);
//   });
// });
