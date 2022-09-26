'use strict';

const userForm = document.forms.userForm;
const carForm = document.forms.carForm;
const buyList = document.querySelector('.prototypes__buy-list');
const userButton = document.querySelector('[name="userButton"]');
const changeUserButton = document.querySelector('[name="changeUserButton"]');
const clearLSButton = document.querySelector('._clearButton');
let usersArray = [];
let carsArray = [];

function Methods() {
  this.showUserInfo = function () {
    const buyItem = document.createElement('div');
    buyItem.classList.add('prototypes__buy-item');
    const userText = document.createElement('p');
    buyItem.setAttribute('data-id', usersArray.length);
    userText.textContent = `Покупатель: ${this.name} ${this.surname}, страна: ${this.area}, телефон: ${this.phone}.`;
    const carContainer = document.createElement('div');
    carContainer.classList.add('prototypes__car-container');
    buyList.append(buyItem);
    buyItem.append(userText);
    buyItem.append(carContainer);
  };
  this.showCarInfo = function () {
    const carText = document.createElement('p');
    carText.textContent = `Автомобиль: ${this.label}, год: ${this.year}, цена: ${this.price}$`;
    const buyItem = document
      .querySelector(`[data-id="${usersArray.length}"]`)
      .querySelector('.prototypes__car-container');
    buyItem.append(carText);
  };
}
const stealingMethods = new Methods(); // получаю в константу прототип для объектов user и car

const carInputs = document.querySelectorAll(
  '[name = "carLabel"], [name="carYear"], [name="carPrice"], [name="carButton"]'
);

const userInputs = document.querySelectorAll(
  '[name = "userName"], [name="userSurname"], [name="userCountry"], [name="userPhone"], [name="userButton"]'
);

// --------------------------Форма user------------------------------
userForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // --------------------------Валидация------------------------------
  let error = 0;
  const userReqFields = document.querySelectorAll('._userReq');
  for (let i = 0; i < userReqFields.length; i++) {
    const userInput = userReqFields[i];
    removeError(userInput);
    if (
      userInput.getAttribute('name') === 'userName' ||
      userInput.getAttribute('name') === 'userSurname'
    ) {
      if (!userInput.value) {
        addError(userInput, 'Поле не должно быть пустым');
        error++;
      }
    }
    if (userInput.getAttribute('name') === 'userPhone') {
      if (!userInput.value.match(/^380\d{9}$/)) {
        addError(userInput, 'Телефон должен быть формата: "380ХХХХХХХХХ');
        error++;
      }
    }
  }
  if (error === 0) {
    console.log('Submit');
  } else {
    return;
  }

  // -------------------------Объект User-------------------------
  const user = {
    name: '',
    surname: '',
    area: '',
    phone: '',
    cars: [],
    id: '',

    set firstName(newName) {
      this.name = newName;
    },
    set lastName(newSurname) {
      this.surname = newSurname;
    },
    set country(newArea) {
      this.area = newArea;
    },
    set phoneNumber(newPhone) {
      this.phone = newPhone;
    },
    set buyingCars(newCar) {
      this.cars.push(newCar);
    },
    set userId(newId) {
      this.id = newId;
    },
    get fullInfo() {
      return (
        this.name + ' ' + this.surname + ' ' + this.area + ' ' + this.phone
      );
    },
  };

  // -------------------Установка значений для User----------------------
  user.firstName = document.querySelector('[name = "userName"]').value;
  user.lastName = document.querySelector('[name = "userSurname"]').value;
  user.country = document.querySelector('[name = "userCountry"]').value;
  user.phoneNumber = document.querySelector('[name = "userPhone"]').value;

  usersArray.push(user);
  user.userId = usersArray.length;
  localStorage.setItem('usersData', JSON.stringify(usersArray));

  Object.setPrototypeOf(user, stealingMethods);
  user.showUserInfo();
  userForm.reset();
  error = 0;

  // ---------------------Блокировка инпутов----------------------------
  carInputs.forEach((item) => (item.disabled = false));
  userInputs.forEach((item) => (item.disabled = true));
  userButton.classList.add('_active');
  changeUserButton.classList.add('_active');
});

// --------------------------Форма car------------------------------
carForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // --------------------------Валидация------------------------------
  let error = 0;
  const carReqFields = document.querySelectorAll('._carReq');
  for (let i = 0; i < carReqFields.length; i++) {
    const carInput = carReqFields[i];
    removeError(carInput);
    if (carInput.getAttribute('name') === 'carPrice') {
      if (!carInput.value.match(/^\d{4}/)) {
        addError(carInput, 'Цена не может быть менее 1000$');
        error++;
      }
    }
  }
  if (error === 0) {
    console.log('Submit');
  } else {
    return;
  }

  // -------------------------Объект car-------------------------
  const car = {
    label: '',
    year: '',
    price: '',
    id: '',
    set carLabel(newLabel) {
      this.label = newLabel;
    },
    set carYear(newCarYear) {
      this.year = newCarYear;
    },
    set carPrice(newCarPrice) {
      this.price = newCarPrice;
    },
    set carId(newCarId) {
      this.id = newCarId;
    },

    get fullInfo() {
      return this.label + ' ' + this.year + ' ' + this.price;
    },
  };

  // ----------------------Установка значений для car-------------------------
  car.carLabel = document.querySelector('[name = "carLabel"]').value;
  car.carYear = document.querySelector('[name = "carYear"]').value;
  car.carPrice = document.querySelector('[name = "carPrice"]').value;
  car.carId = usersArray.length;

  carsArray.push(car);
  localStorage.setItem('carsData', JSON.stringify(carsArray));

  Object.setPrototypeOf(car, stealingMethods);
  car.showCarInfo();
  carForm.reset();
  error = 0;
});

// ------------------Восстановление данных по localStorage--------------------
if (!localStorage.getItem('usersData')) {
  console.log('LocalStorage for users is empty');
} else {
  usersArray = localStorage.getItem('usersData');
  usersArray = JSON.parse(usersArray);
  usersArray.forEach((item) => {
    Object.setPrototypeOf(item, stealingMethods);
    const buyItem = document.createElement('div');
    buyItem.classList.add('prototypes__buy-item');
    const userText = document.createElement('p');
    buyItem.setAttribute('data-id', item.id);
    userText.textContent = `Покупатель: ${item.name} ${item.surname}, страна: ${item.area}, телефон: ${item.phone}.`;
    const carContainer = document.createElement('div');
    carContainer.classList.add('prototypes__car-container');
    buyList.append(buyItem);
    buyItem.append(userText);
    buyItem.append(carContainer);
  });
}

if (!localStorage.getItem('carsData')) {
  console.log('LocalStorage for cars is empty');
} else {
  carsArray = localStorage.getItem('carsData');
  carsArray = JSON.parse(carsArray);
  carsArray.forEach((item) => {
    Object.setPrototypeOf(item, stealingMethods);
    const carText = document.createElement('p');
    carText.textContent = `Автомобиль: ${item.label}, год: ${item.year}, цена: ${item.price}$`;
    const buyItem = document
      .querySelector(`[data-id="${item.id}"]`)
      .querySelector('.prototypes__car-container');
    buyItem.append(carText);
  });
}

// -------------------------Вспомогательные функции-------------------------
function addError(element, message) {
  const errorText = document.createElement('p');
  errorText.classList.add('_errorText');
  errorText.textContent = message;
  element.classList.add('_error');
  element.after(errorText);
}

function removeError(element) {
  if (element.closest('.prototypes__form-item').querySelector('._errorText')) {
    element.classList.remove('_error');
    element
      .closest('.prototypes__form-item')
      .querySelector('._errorText')
      .remove();
  }
}

clearLSButton.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

changeUserButton.addEventListener('click', function (event) {
  event.preventDefault();
  userButton.classList.remove('_active');
  this.classList.remove('_active');
  carInputs.forEach((item) => (item.disabled = true));
  userInputs.forEach((item) => (item.disabled = false));
});

// подумать над id
// переиспользовать для ls методы из "function Methods()"
