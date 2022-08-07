console.log(' ');
console.log('=====Task 3=====');

let num = prompt(
    `Давай узнаем, какое число будет больше чем квадрат каждого чисел от 1 до 100

Введите число`
    );

validate();

function validate() {
    if (isFinite(num)) {
    for (let i = 1; i <= 100; i++) {
        if (i**2 <= num) {
            console.log(`${i} в квадрате = ${i**2}, что меньше или равно ${num}`);
        } else {
            console.log(`В слудющей итерации ${i} в квадрате будет ${i**2}, что больше чем ${num}. Расчет окончен.`);
            break;
            } 
        }
    } else {
        num = prompt('Ну кого ты пытаешься обмануть, введи нормальное число :)');
        validate();
    }
}
