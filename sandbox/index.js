// let array = [34, 3, 2, 1];

// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log(i + ' key  ' + array[i]);
//   }, 3000);
// }

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// for (var i = 0; i < 4; i++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log(index);
//     }, 1000);
//   })(i);
// }

// function addCounter1() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }

// const count1 = addCounter1();
// addCounter1();
// addCounter1();
// addCounter1();
// addCounter1();

// function doSomething() {
//   var myVar = 1;
//   if (true) {
//     var myVar = 2;
//     console.log(myVar);
//   }
//   console.log(myVar);
// }

// doSomething();
// let i = 0;

// function add() {
//   i++;
//   console.log(i);
//   if (i > 30) return;
//   add();
// }

// add();

// const user = {
//   name: '',
//   age: '',

//   set trueName(newName) {
//     this.name = newName;
//   },
// };

// user.name = 'wafel';
// console.log(user.name);
// user.trueName = 'glek';
// console.log(user.name);

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((user) => alert(user.name));

const url = 'https://api.github.com/users/dima0208';
const container = document.querySelector('.container');

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     container.innerHTML = `<img src="${data.avatar_url}">`;
//   });

fetch(url)
  .then((response) => response.json())
  .then(({ avatar_url }) => {
    container.innerHTML = `<img src="${avatar_url}">`;
  });
