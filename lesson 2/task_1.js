let numOne = prompt(`Привет, давай введем по очереди 2 числа и получим в консоль результат их сложения, вычитания, умножения и деления.

Введите первое число`);

let numTwo = prompt('Введите второе число');

console.log('=====Задание 1====='); // метка номера задания
console.log(`Сумма чисел: ${(+numOne + +numTwo)}`);
console.log(`Разность чисел: ${numOne - numTwo}`);
console.log(`Произведение чисел: ${numOne * numTwo}`);
console.log(`Частное чисел: ${(numOne / numTwo)}`);
