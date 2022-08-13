console.log('=====Task 1=====');
const arrOne = [];

pushNumber(); 

function pushNumber() {
    let num = prompt('Добавте значение в массив');
    if (num != false) {
        if (num !== null) {
            arrOne.push(num);
            console.log(`Вы добавили в массив ${num}`) ;
            pushNumber();
        } else {
            console.log(arrOne);
            console.log('Создание массива окончено');
        }
    } else {
        alert('Вы пытаетесь добавить пустое значение в массив. Заполинте поле, пожалуйста.');
        pushNumber();
    }
};


// -----------------------Сортировка по возрастанию---------------------------------

arrOne.sort(function sortNumbers(a, b) {
    return a - b;
  });
console.log(' ');
console.log('Массив отсортирован по возрастанию');
console.log(arrOne);


// -----------------Удаление из массива со 2 по 4 элементы--------------------------

console.log(' ');
arrOne.splice(1, 3);
console.log('Массив с удаленными со 2 по 4 элементами');
console.log(arrOne);
