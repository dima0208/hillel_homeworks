

generateKey(5, 'abc12'); // Сгенерировать пароль. Первый аргумент: кол-во символов пароля. Второй: набор символов для пароля.

function generateKey(length, characters) {
    let str = characters;
    let arrFour = str.split('');
    if (length <= str.length) {
        shuffle(arrFour);
        arrFour.splice(length);
        let password = arrFour.join('');
        console.log(`Generated password: ${password}`);
        return password;
    } else {
        for (let i = 0; i < length - str.length; i++) { // если поьзователь запрашивает пароль длиннее, чем само кол-во символов для пароля
            arrFour.push(arrFour[i]);
        };
        shuffle(arrFour);
        arrFour.splice(length);
        let password = arrFour.join('');
        console.log(`Generated password: ${password}`);
        return password;
    };
};

// Честно скопированный код для перемешивания массива, я сам не догадался
// Будет справидливым снять 50% за эту часть Д/З
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};



