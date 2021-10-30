const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImgInItem = ({ url, alt }) => {
  const imgEl = document.createElement('img');
  const itemEl = document.createElement('li');
  imgEl.src = url;
  imgEl.alt = alt;
  console.log(imgEl);
  console.log(itemEl.insertAdjacentHTML('afterBegin', `${imgEl}`));
  return ;
};

const listEl = document.querySelector('.gallery');
const elements = images.map(makeImgInItem);
console.log(elements);
// itemEl.append(...elements);
// console.log(itemEl);
listEl.append(...elements);
console.log(listEl);
// console.log(listEl.append(itemEl.append(...elements)));
