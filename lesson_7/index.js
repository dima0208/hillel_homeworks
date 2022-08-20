// -------------------------------Task 1------------------------------
function apl(numOne) {
    return function innerApl(numTwo) {
        return numOne * numTwo;
    };
};

// console.log(apl(2)(10));


// -------------------------------Task 2------------------------------
const arrOne = [1, 2, 3, 4, 5.5, 133, -150, 1024,]

function calcAverage(array) {
    if (Array.isArray(array)) {
        let average = 0
        for (let i = 0; i < array.length; i++) {
            average += array[i]
        }
        return average / array.length
    } else (console.log('Вы указали не массив'))
}

// console.log(calcAverage(arrOne))


// -------------------------------Task 3------------------------------
function deleteLetters(string, array) {
    let newStr = string;
    for (let i = 0; i < array.length; i++) {
        while (newStr.includes(array[i])) {
            newStr = newStr.slice(0, newStr.indexOf(array[i])) + newStr.slice(newStr.indexOf(array[i]) + 1);
        };
    };
    return newStr;
};

// console.log(deleteLetters('hello world', 'ld'));




// -------------------------------Task 4------------------------------
function sum(num) {
    return function (number) {
        return num = number + num;
    };
};

// let calcSum = sum(3);
// console.log(calcSum(5));
// console.log(calcSum(20));
// console.log(calcSum(50));






