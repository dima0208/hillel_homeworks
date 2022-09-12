'use strict';

const form = document.forms.regexpForm;
form.addEventListener('submit', formSend);

function formSend(event) {
  event.preventDefault();
  let error = formValidate();
  if (error === 0) {
    showSuccessMessage(form, 'Данные успешно отправлены');
    form.reset();
    return;
  }
}

function formValidate() {
  let error = 0;
  const reqFields = document.querySelectorAll('.regexp-form__input');
  for (let i = 0; i < reqFields.length; i++) {
    const input = reqFields[i];
    deleteSuccessMessage(input);
    removeError(input);
    if (
      input.getAttribute('name') === 'name' ||
      input.getAttribute('name') === 'surname'
    ) {
      if (!input.value.match(/^[A-Z]/)) {
        addError(
          input,
          'Значение должно быть латиницей, с заглавной буквы и не пустым'
        );
        error++;
      }
    }
    if (input.getAttribute('name') === 'number') {
      if (!input.value.match(/^\+380\d{9}$/)) {
        addError(input, 'Телефон должен быть формата: "+380ХХХХХХХХХ');
        error++;
      }
    }
    if (input.getAttribute('name') === 'email') {
      if (
        !input.value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        addError(input, 'Введите корректный email');
        error++;
      }
    }
    if (input.getAttribute('name') === 'card') {
      if (!input.value.match(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/)) {
        addError(input, 'Номер карты должен содержать 16 цифр');
        error++;
      }
    }
  }
  return error;
}

function addError(element, message) {
  const errorText = document.createElement('p');
  errorText.classList.add('_errorText');
  errorText.textContent = message;
  element.classList.add('_error');
  element.after(errorText);
}

function removeError(element) {
  if (element.closest('.regexp-form__item').querySelector('._errorText')) {
    element.classList.remove('_error');
    element.closest('.regexp-form__item').querySelector('._errorText').remove();
  }
}

function showSuccessMessage(element, message) {
  const successText = document.createElement('p');
  successText.textContent = message;
  successText.classList.add('_successText');
  element.after(successText);
}

function deleteSuccessMessage(element) {
  element.addEventListener('focus', function () {
    if (
      element.closest('.regexp-form__wrapper').querySelector('._successText')
    ) {
      element
        .closest('.regexp-form__wrapper')
        .querySelector('._successText')
        .remove();
    }
  });
}
