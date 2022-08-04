const strOne = prompt(
    `!!!Взлом админки пентагона!!!

Введите логин`
);

console.log(' ');
console.log('=====Task 4=====');

if (strOne == 'admin') {
    strTwo = prompt('Введите пароль')
    if (strTwo == 'mySuperPassword') {
        console.log('Вы взломали пентагон...')
        document.body.innerHTML = `
        <img src='./FBR.jpg' alt='anonymous' style='width: 500px;'>
        `
    } else {
        console.log('Пароль не верен')
    }
} else {
    console.log('Логин не верен')
};