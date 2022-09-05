'use strict';

const todoForm = document.forms.todo;
const list = document.querySelector('.todo-list__list');
const input = document.querySelector('.todo-list__input');
const select = document.querySelector('.todo-list__option');
let counter = 0;
const itemsArray = [];

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Исключение повтора вывода сообщение об ошибке при многократном клике по кнопке Add
  if (todoForm.querySelector('.error-text')) {
    todoForm.querySelector('.error-text').remove();
  }

  if (!input.value.trim()) {
    errorMessage(input, 'Поле ввода не должно быть пустым');
    return;
  }

  // 1. Генерируем заранее, для элемента, случайный id и остальные параметры
  const newItem = {
    id: itemsArray.length == 0 ? 0 : itemsArray[itemsArray.length - 1].id + 1,
    name: input.value.trim(),
    isDone: false,
  };

  // 2. Доавляем в массив созданный объект
  itemsArray.push(newItem);

  //3. Создаем блок нашей заметки
  const taskItem = document.createElement('div');
  taskItem.classList.add('todo-list__item');
  taskItem.setAttribute('data-id', newItem.id); // значение data-id будет вновь сгенерированный id
  list.append(taskItem);

  const taskLabel = document.createElement('p');
  taskLabel.classList.add('todo-list__label');
  taskLabel.textContent = ++counter + '. ' + input.value.trim();
  taskItem.append(taskLabel);

  const taskCheckbox = document.createElement('input');
  taskCheckbox.classList.add('todo-list__checkbox');
  taskCheckbox.setAttribute('type', 'checkbox');
  taskItem.append(taskCheckbox);

  const closeIcon = document.createElement('div');
  closeIcon.classList.add('todo-list__close-icon');
  taskItem.append(closeIcon);

  input.value = '';
});

list.addEventListener('click', function (event) {
  function changeIsDone() {
    // 1. получаем id из параметра "data-id" dom-елемента в нашу переменную
    const itemId = event.target
      .closest('.todo-list__item')
      .getAttribute('data-id');
    // 2. Находим в массиве item-ов объект с "data-id" соответстующего нашему клику
    const neededTask = itemsArray.find((item) => item.id == itemId);
    // 3. Обращаемся по клику на чекбокс конкретного item, к свойству его объекта "isDone" и меняем его на true
    neededTask.isDone = event.target.checked;
  }

  if (
    event.target.checked &&
    event.target.classList.contains('todo-list__checkbox')
  ) {
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label')
      .classList.add('_crossed');

    changeIsDone();
    filterTasks();
  } else if (
    !event.target.checked &&
    event.target.classList.contains('todo-list__checkbox')
  ) {
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label')
      .classList.remove('_crossed');

    changeIsDone();
    filterTasks();
  }

  // Удаление по клику на крестик
  if (event.target.classList.contains('todo-list__close-icon')) {
    event.target.closest('.todo-list__item').remove();
  }
});

function errorMessage(element, textErrorMessage) {
  let message = document.createElement('p');
  message.classList.add('error-text');
  message.textContent = textErrorMessage;
  element.classList.add('_error');
  element.closest('.todo-list__input-part').after(message);
}

// Очистка полей от ошибок если пользователь начинает вводить данные
todoForm.querySelectorAll('.todo-list__input').forEach(function (item) {
  item.addEventListener('input', function () {
    if (item.classList.contains('_error')) {
      this.classList.remove('_error');
      this.closest('.todo-form').querySelector('.error-text').remove();
    }
  });
});

// -------------------------- Part 2 -----------------------------------

select.addEventListener('change', filterTasks);

function filterTasks() {
  const domArray = document.querySelectorAll('.todo-list__item');
  domArray.forEach(function (domItem) {
    domItem.classList.remove('_hidden');
  });
  if (select.selectedIndex == 1) {
    const processArray = itemsArray.filter(function (item) {
      return item.isDone == true;
    });
    // Да знаю я, знаю, что for не является оптимальным. По-другому 2 массива разной длины я сравнить не могу.
    // По идее этот перебор тоже можно сделать в виде функции, но мне кажется, будет выглядеть еще сложнее, чем без нее.
    for (let i = 0; i < processArray.length; i++) {
      for (let j = 0; j < domArray.length; j++) {
        if (processArray[i].id == domArray[j].getAttribute('data-id')) {
          domArray[j].classList.add('_hidden');
          break;
        }
      }
    }
  } else if (select.selectedIndex == 2) {
    const doneArray = itemsArray.filter(function (item) {
      return item.isDone == false;
    });
    for (let i = 0; i < doneArray.length; i++) {
      for (let j = 0; j < domArray.length; j++) {
        if (doneArray[i].id == domArray[j].getAttribute('data-id')) {
          domArray[j].classList.add('_hidden');
          break;
        }
      }
    }
  }
}
