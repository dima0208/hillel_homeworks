const numFour = prompt(
    `Давай определим, является ли введенное шестизначное число зеркальным.

Введите шестизначное число для проверки`
);

console.log(' ');
console.log('=====Task 2=====');

if (numFour[2] == numFour[3] && numFour[1] == numFour[4] && numFour[0] == numFour[5]) {
    console.log(`Число: ${numFour} является зеркальным`)
} else {
    console.log(`Число: ${numFour} не зеркально`) 
};