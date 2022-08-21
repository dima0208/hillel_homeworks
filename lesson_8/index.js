// ----------------------------------------Task 1-------------------------------------------
function UserInfo(name, age) {
    this.name = name;
    this.age = age;
    this.message = function () {
        console.log(`Ваши данные. Имя: ${this.name}, возраст: ${this.age}`);
    };
};

// ---------------Блок присвоения и валидации значений---------------
let inputName = prompt('Введите имя');
while (inputName == false) {
    alert('Вы не можете передать пустое значение!');
    inputName = prompt('Введите имя');
};

let inputAge = prompt('Введите возраст');
while (inputAge == false) {
    alert('Вы не можете передать пустое значение!');
    inputAge = prompt('Введите возраст');
} while (inputAge !== null && inputAge < 18) {
    alert('Для использования нашего сервиса, Вам должно быть больше 18 лет');
    inputAge = prompt('Введите возраст');
};

// const userOne = new UserInfo(inputName, inputAge)    по идее я должен получить сущность с методом вывода информации уже в этом задании,
// userOne.message()                                    но т.к. функции-конструкторы связаны то я делаю это во второй функции-коснтрукторе
// console.log(userOne)


// ----------------------------------------Task 2-------------------------------------------

function CarInfo(label, year, price) {
    this.label = label;
    this.year = year;
    this.price = price;
    this.owner = new UserInfo(inputName, inputAge); // Формально я бы мог взять объект "userOne" полученный конструктором в строчке 24 из 1 задания, 
    this.showCarInfo = function () {               // но тогда бы для каждого нового пользователя пришлось бы менять эту переменную, поэтому я решли получать инфу прям в этом коснтуркторе
        alert(`Мы подобрали Вам: ${this.label}, год выпуска: ${this.year}, цена: ${this.price}$`);
        console.log((`Ваш выбор: ${this.label}, год выпуска: ${this.year}, цена: ${this.price}$`));
    };
};


// ---------------Блок присвоения и валидации значений---------------
let car;

let inputLabel = prompt('Укажите марку автомобиля');
while (inputLabel == false) {
    alert('Вы не можете передать пустое значение!');
    inputLabel = prompt('Укажите марку автомобиля');
};

let inputYear = prompt('Укажите год выпуска');
while (inputYear == false) {
    alert('Вы не можете передать пустое значение!');
    inputYear = prompt('Укажите год выпуска автомобиля');
};

let inputPrice = prompt('Укажите ориентировочную цену цену USD');
while (inputPrice == false) {
    alert('Вы не можете передать пустое значение!');
    inputPrice = prompt('Укажите ориентировочную цену автомобиля');
};

if (inputLabel === null || inputYear === null || inputPrice === null || inputName == null || inputAge == null) {
    console.log('Мы не можем подобрать авто, если вы укзаали не все параметры');
} else {
    car = new CarInfo(inputLabel, inputYear, inputPrice);
    car.owner.message();
    car.showCarInfo();
    console.log(car.owner);
    console.log(car);
};










