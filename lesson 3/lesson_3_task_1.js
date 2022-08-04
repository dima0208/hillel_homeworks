const numOne = prompt(
    `Давай введем 3 числа и узнаем, сколько из них одинаковые.
    
Введите первое число`
);

const numTwo = prompt('Введите второе число');
const numThree = prompt('Введите третье число');

console.log('=====Task 1=====');

if (numOne == numTwo && numTwo == numThree) {
    console.log(`В числе ${numOne + numTwo + numThree} все цифры цифры`)
} else if (numOne == numTwo || numTwo == numThree || numOne == numThree) {
    console.log(`В числе ${numOne + numTwo + numThree}  две цифры одинаковые`)
} else {
    console.log(`В числе ${numOne + numTwo + numThree} все цифры разные`)
};