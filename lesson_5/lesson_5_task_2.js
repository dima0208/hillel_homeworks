console.log('------------------Task 2------------------');
console.log('Исходный массив');
const arrTwo = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
console.log(arrTwo);


// ------------------------------------TASK 2.1-----------------------------------------------
console.log(' ');
console.log('=====Task 2.1=====');

let sumPositive = 0;
let positiveQuant = 0;
for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] > 0) {
        sumPositive += arrTwo[i];
        positiveQuant++;
    }
}
console.log(`Сумма положительных чисел массива: ${sumPositive}`);
console.log(`Всего положительных чисел в массиве: ${positiveQuant}`);



// ------------------------------------TASK 2.2-----------------------------------------------
console.log(' ');
console.log('=====Task 2.2=====');

let minNumber = Math.min(...arrTwo);
console.log(`Наименьшее число массива: ${minNumber}`);

arrTwo.findIndex(function (item, index) {
  if (item == minNumber) {
    console.log(`Число ${minNumber} в массиве имеет индекс: ${index}`);
  };
});



// ------------------------------------TASK 2.3-----------------------------------------------
console.log(' ');
console.log('=====Task 2.3=====');

let maxNumber = Math.max(...arrTwo);
console.log(`Наибольшее число массива: ${maxNumber}`);

arrTwo.findIndex(function (item, index) {
  if (item == maxNumber) {
    console.log(`Число ${maxNumber} в массиве имеет индекс: ${index}`);
  };
});



// ------------------------------------TASK 2.4-----------------------------------------------
console.log(' ');
console.log('=====Task 2.4=====');

let sumNegative = 0;

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] < 0) {
        sumNegative++;
    };
};

console.log(`Количество отрицательных чисел в массиве: ${sumNegative}`);



// ------------------------------------TASK 2.5-----------------------------------------------
console.log(' ');
console.log('=====Task 2.5=====');

let oddPositive = 0;

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] > 0 && arrTwo[i] % 2 != 0) {
        oddPositive++;
    };
};

console.log(`Количество нечетных, положительных чисел: ${oddPositive}`);



// ------------------------------------TASK 2.6-----------------------------------------------
console.log(' ');
console.log('=====Task 2.6=====');

let sumEvenNumbers = 0;

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] > 0 && arrTwo[i] % 2 == 0) {
        sumEvenNumbers = sumEvenNumbers + arrTwo[i];
    };
};

console.log(`Сумма четных положительных чисел: ${sumEvenNumbers}`);



// ------------------------------------TASK 2.7-----------------------------------------------
console.log(' ');
console.log('=====Task 2.7=====');

let multPosNum = 1;

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] > 0) {
            if (multPosNum > 9007199254740990) {
                arrTwo[i] = BigInt(arrTwo[i]);
                multPosNum = BigInt(multPosNum);
            };
        multPosNum = multPosNum * arrTwo[i];
    };
};

console.log(`Произведение всех положительных чисел: ${multPosNum}`);



// ------------------------------------TASK 2.8-----------------------------------------------
console.log(' ');
console.log('=====Task 2.8=====');


console.log(`Наибольшее число массива: ${maxNumber}`);

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] != maxNumber) {
        arrTwo[i] = 0;
    };
};

console.log(arrTwo);


// ----------------------------------------Finish message--------------------------------------

console.log(' ');
console.log('------------------Task 2 has been completed------------------');


