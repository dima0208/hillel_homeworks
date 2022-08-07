console.log(' ');
console.log('=====Task 4=====');

const simpleNum = prompt('Введите число, для определения простое оно или нет. (простое - значит делится только на себя и 1)');

for (let i = 2; i < simpleNum; i++) {
    if (simpleNum % i == 0) {
        console.log(`Число ${simpleNum} не простое`);
        break;
    } else if (i + 1 == simpleNum) {
        console.log(`Число ${simpleNum} простое`);
    };
};
