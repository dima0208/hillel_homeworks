'use strict';

const todoForm = document.forms.todo;
const list = document.querySelector('.todo-list__list');
const input = document.querySelector('.todo-list__input');
let counter = 0;

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Исключение повтора вывода сообщение об ошибке при многократном клике по кнопке Add
  if (todoForm.querySelector('.error-text')) {
    todoForm.querySelector('.error-text').remove();
  }

  if (!input.value.trim()) {
    errorMessage(input, 'Поле не доожно быть пустым');
    return;
  }

  const taskItem = document.createElement('div');
  taskItem.classList.add('todo-list__item');
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
  if (
    event.target.checked &&
    event.target.classList.contains('todo-list__checkbox')
  ) {
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label')
      .classList.add('_crossed');
  } else if (
    !event.target.checked &&
    event.target.classList.contains('todo-list__checkbox')
  ) {
    event.target
      .closest('.todo-list__item')
      .querySelector('.todo-list__label')
      .classList.remove('_crossed');
  }

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
