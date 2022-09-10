'use strict';

const todoForm = document.forms.todo;
const list = document.querySelector('.todo-list__list');
const input = document.querySelector('.todo-list__input');
const select = document.querySelector('.todo-list__option');
let itemsArray = []; // let потому что, пришлось перезаписать массив, чтобы его распарсить в 224 строке
let counter = 0;
// localStorage.clear();

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // Исключение повтора вывода сообщения об ошибке при многократном клике по кнопке Add
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

  // 2. Добавляем в массив созданный объект
  itemsArray.push(newItem);

  // Пуш в localStorage
  localStorage.setItem('taskData', JSON.stringify(itemsArray));

  // 3. Создаем блок нашей заметки
  const taskItem = document.createElement('div');
  taskItem.classList.add('todo-list__item');
  taskItem.setAttribute('data-id', newItem.id); // значение data-id будет вновь сгенерированный id
  list.append(taskItem);

  const taskLabel = document.createElement('p');
  taskLabel.classList.add('todo-list__label');
  taskLabel.textContent = ++counter + '. ' + input.value.trim();
  taskItem.append(taskLabel);

  const taskEditButton = document.createElement('button');
  taskEditButton.classList.add('todo-list__button');
  taskEditButton.textContent = 'Edit';
  taskItem.append(taskEditButton);

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
    // 4. Обновляем данные в localStorage
    localStorage.setItem('taskData', JSON.stringify(itemsArray));
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

  if (event.target.classList.contains('todo-list__close-icon')) {
    // Удаление из массива itemsArray объекта, id которого, соответствует data-id dom-элемента, который мы будем удалять по клику на крестик
    let sameId = itemsArray.findIndex(function (element) {
      return (
        element.id ==
        event.target.closest('.todo-list__item').getAttribute('data-id')
      );
    });
    itemsArray.splice(sameId, 1);

    // Обновляем данные в localStorage
    localStorage.setItem('taskData', JSON.stringify(itemsArray));

    // Удаление dom-элемента по клику на крестик
    event.target.closest('.todo-list__item').remove();
  }

  // Блок редактирования введенной заметки ( Часть --Part 3--)
  if (
    // Проверка, была ли нажата уже кнопка редактирования в самой заметке
    event.target.classList.contains('todo-list__button') &&
    event.target.classList.contains('_editing')
  ) {
    // Исключение повтора вывода сообщения об ошибке при многократном клике по кнопке Add
    if (todoForm.querySelector('.error-text')) {
      todoForm.querySelector('.error-text').remove();
    }
    let editInputValue = event.target
      .closest('.todo-list__item')
      .querySelector('input').value;
    if (!editInputValue) {
      alert('Поле редактирования заметки не может быть пустым');
      return;
    }
    event.target.classList.remove('_editing');
    event.target.textContent = 'Edit';
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label').textContent = editInputValue;
    event.target.closest('.todo-list__item').querySelector('input').remove();

    // 1. получаем id из параметра "data-id" dom-елемента в нашу переменную
    const editInputId = event.target
      .closest('.todo-list__item')
      .getAttribute('data-id');
    // 2. Находим в массиве item-ов объект с "data-id" соответстующего нашему клику
    const neededObjectId = itemsArray.find((item) => item.id == editInputId);
    // 3. Обращаемся по клику на чекбокс конкретного item, к свойству его объекта "isDone" и меняем его на true
    neededObjectId.name = editInputValue;
    // 4. Обновляем данные в locasStorage
    localStorage.setItem('taskData', JSON.stringify(itemsArray));
  } else if (event.target.classList.contains('todo-list__button')) {
    // Добавление самого инпута для ввода данных при редактировании
    event.target.textContent = 'Ok';
    event.target.classList.add('_editing');
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label').textContent = '';
    event.target.closest('.todo-list__item').prepend(editInput);
  }
});

function errorMessage(element, textErrorMessage) {
  let message = document.createElement('p');
  message.classList.add('error-text');
  message.textContent = textErrorMessage;
  element.classList.add('_error');
  element.before(message);
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

// -------------------------- Part 3 -----------------------------------

if (!localStorage.getItem('taskData')) {
  console.log('LocalStorage is empty');
} else {
  itemsArray = localStorage.getItem('taskData');
  itemsArray = JSON.parse(itemsArray);

  // Создаем блок нашей заметки из данных в localStorage
  itemsArray.forEach(function (item) {
    const taskItemLS = document.createElement('div');
    taskItemLS.classList.add('todo-list__item');
    taskItemLS.setAttribute('data-id', item.id);
    list.append(taskItemLS);

    const taskLabelLS = document.createElement('p');
    taskLabelLS.classList.add('todo-list__label');
    taskLabelLS.textContent = ++counter + '. ' + item.name;
    taskItemLS.append(taskLabelLS);

    const taskEditButtonLS = document.createElement('button');
    taskEditButtonLS.classList.add('todo-list__button');
    taskEditButtonLS.textContent = 'Edit';
    taskItemLS.append(taskEditButtonLS);

    const taskCheckboxLS = document.createElement('input');
    taskCheckboxLS.classList.add('todo-list__checkbox');
    taskCheckboxLS.setAttribute('type', 'checkbox');
    if (item.isDone) {
      taskCheckboxLS.setAttribute('checked', true);
    }
    taskItemLS.append(taskCheckboxLS);

    const closeIconLS = document.createElement('div');
    closeIconLS.classList.add('todo-list__close-icon');
    taskItemLS.append(closeIconLS);
  });
}
