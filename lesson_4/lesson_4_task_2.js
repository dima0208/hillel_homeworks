console.log(' ');
console.log('=====Task 2=====');

let dollarRate = 39; // скорее всего, в проектах это значение является динамичным, поэтому let

console.log(`Курс доллара: ${dollarRate} грн`);

for (let i = 10; i <= 100; i = i + 10) {
    console.log(`${i} долларов = ${dollarRate * i} грн`);
};