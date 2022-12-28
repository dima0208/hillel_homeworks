'use strict';

const arrOne = [1, 2, 3, 4, 5];

// const arrKek = arrOne.slice(0, 3);
// console.log(arrKek);
// console.log(arrOne);

// arrOne.splice(2, 2, 'kek', 'privet');
// console.log(arrOne);

// console.log(arrOne.splice(1, 1, 10));
// console.log(arrOne);

// let num = 0;
// arrOne.forEach((item) => {
//   if (item > num) {
//     num = item;
//   }
// });

// console.log(num);
// console.log(Math.max(...arrOne));
// console.log(Math.min(...arrOne));
// const sun = arrOne.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(sun);

// console.log(arrOne.includes(6));
// console.log(arrOne.find((item) => item === 3));
// console.log(arrOne.findIndex((item) => item === 6));
// console.log(arrOne.filter((item) => item === 6));
// arrOne.forEach((item) => {
//   if (item === 3) {
//     console.log(item);
//   }
// });
// console.log(arrOne.some((item) => item === 6));
// console.log(arrOne.every((item) => item === 3));

// const objOne = {
//   name: 'Dima',
//   age: 27,
//   langs: {
//     one: 'JS',
//     two: 'React',
//   },
//   skills: ['jump', 'run', 'duck'],
// };

// console.log(objOne.name);
// console.log(objOne.age);
// console.log(objOne.langs.one);
// console.log(objOne.langs.three);
// console.log(objOne.skills[4]);

// for (let key in objOne) {
//   console.log(key);
//   console.log(objOne[key]);
// }

// const arrTwo = [
//   {
//     name: 'Dima',
//     age: 27,
//     isWork: true,
//   },
//   {
//     name: 'Sasha',
//     age: 26,
//     isWork: true,
//   },
//   {
//     name: 'Petya',
//     age: 26,
//     isWork: false,
//   },
// ];

// console.log(arrTwo.find((item) => item.name === 'Dima'));
// console.log(arrTwo.findIndex((item) => item.name === 'Dima'));
// console.log(arrTwo.filter((item) => item.name === 'Dima'));
// console.log(arrTwo[0].name);
// console.log(arrTwo[0].name);
// arrTwo.forEach((item) => {
//   console.log(item.isWork);
// });

// const str = '2';

// console.log(parseFloat(str));
// console.log(+str);
// console.log(Number(str));
// console.log(str - 0);

// const obj1 = {
//   name: 'Dima',
//   age: 27,
// };

// const obj2 = {
//   name2: 'Petya',
//   age2: 30,
// };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// const obj5 = JSON.stringify(obj1);
// console.log(JSON.parse(obj5));

// const obj6 = {};
// for (let key in obj1) {
//   obj6[key] = obj1[key];
// }

// console.log(obj6);

// const buttonOne = document.querySelector('.button-one');
// const buttonTwo = document.querySelector('.button-two');

// function changeColor(color) {
//   console.log(this);
//   this.style.backgroundColor = color;
// }
// buttonOne.addEventListener('click', changeColor);
// buttonTwo.addEventListener('click', changeColor.bind(buttonOne, 'green'));

// changeColor.call(buttonOne);

const str2 = 'Lorem ipsum dolot lorem';

// const str3 = str2.slice(0, 5);
// console.log(str3);

// console.log(str2.replace('ipsum', 'hello'));
// console.log(str2.replace(/lorem/gi, 'hello'));

function fun() {
  console.log(this);
}

fun();
