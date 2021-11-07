const totalUlEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalUlEl.length}`);

const a = totalUlEl.forEach(element => {
  console.log(
    `Category: ${element.querySelector('h2').textContent}, Elements: ${
      element.querySelectorAll('li').length
    }`,
  );
});
