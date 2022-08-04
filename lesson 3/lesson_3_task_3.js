const numFive = prompt(
    `Введите 3 числа, а я определю, какое из них наиболшее
    
Введите первое число`
);

const numSix = prompt('Введите второе число');
const numSeven = prompt('Введите третье число');

console.log(' ');
console.log('=====Task 3=====');

if (+numFive > +numSix && +numFive > +numSeven) {
    console.log(`Наиболшее число: ${numFive}`)
} else if (+numSix > +numFive && +numSix > +numSeven) {
    console.log(`Наиболшее число: ${numSix}`)
} else {console.log(`Наиболшее число: ${numSeven}`)};