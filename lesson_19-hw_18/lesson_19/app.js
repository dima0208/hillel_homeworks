'use strict';

const form = document.forms.articleForm;
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const text = form.text.value;
});

const form2 = document.forms.getForm;
console.log(form2.action);

// form2.addEventListener('submit', (e) => {
// e.preventDefault();
// form2.action =
//   'file:///D:/hillel%20fornt-end%20course/hillel_homeworks/lesson_19-hw_18/lesson_19/app.js' +
//   '?' +
//   form2.number.name +
//   '=' +
//   form2.number.value;
//   if (
//     getForm.action ==
//     'file:///D:/hillel%20fornt-end%20course/hillel_homeworks/lesson_19-hw_18/lesson_19/app.js?number=1'
//   ) {
//     console.log('first action');
//   }
//   if (
//     getForm.action ==
//     'file:///D:/hillel%20fornt-end%20course/hillel_homeworks/lesson_19-hw_18/lesson_19/app.js?number=2'
//   ) {
//     console.log('second action');
//   }
//   if (
//     getForm.action ==
//     'file:///D:/hillel%20fornt-end%20course/hillel_homeworks/lesson_19-hw_18/lesson_19/app.js?number=3'
//   ) {
//     console.log('WYASSAYAYAAA!');
//   }
// });

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     myFunction(this.responseText);
//   }
//   console.log(this.readyState);
// };

// xhr.open('GET', 'http://getpost.itgid.info/index2.php');
// xhr.send();

// function myFunction(data) {
//   console.log(data);
// }

fetch('http://getpost.itgid.info/index2.php')
  .then((data) => data.text())
  .then((data) => console.log(data));
