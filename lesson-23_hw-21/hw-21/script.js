'use strict';

const formContainer = document.querySelector('.form-wrapper');
const inputsFromObjectsArray = [];

class BaseInput {
  constructor(tag, name, id, cssClass, label) {
    this.tag = tag;
    this.name = name;
    this.id = id;
    this.cssClass = cssClass;
    this.label = label;
  }
  pushToFormArray(object) {
    inputsFromObjectsArray.push(object);
  }
}

class TypicalInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, type, value) {
    super(tag, name, id, cssClass, label);
    this.type = type;
    this.value = value;
  }
}

class SelectInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, optionOne, optionTwo, optionThree) {
    super(tag, name, id, cssClass, label);
    this.optionOne = optionOne;
    this.optionTwo = optionTwo;
    this.optionThree = optionThree;
  }
}

const nameInput = new TypicalInput('input', 'name', 'nameInput', 'text-input', 'Name', 'text', 'some name');
const surnameInput = new TypicalInput('input', 'surname', 'surnameInput', 'text-input', 'Surname', 'text', 'some surname');
const officeRadio = new TypicalInput('input', 'workPlace', 'radioOffice', 'radio-input', 'Work from office', 'radio', 'office');
const remoteRadio = new TypicalInput('input', 'workPlace', 'radioRemote', 'radio-input', 'Work from home', 'radio', 'home');
const englishCheck = new TypicalInput('input', 'isEng', 'checkEng', 'check-input', 'Knowledge of English', 'checkbox', 'yes');
const countrySelect = new SelectInput('select', 'country', 'countrySelect', 'select-country', 'Country', 'Ukraine', 'Poland', 'USA');

nameInput.pushToFormArray(nameInput);
surnameInput.pushToFormArray(surnameInput);
officeRadio.pushToFormArray(officeRadio);
remoteRadio.pushToFormArray(remoteRadio);
englishCheck.pushToFormArray(englishCheck);
countrySelect.pushToFormArray(countrySelect);

console.log(inputsFromObjectsArray);

createForm(inputsFromObjectsArray, 'Form from objects');

function createForm(objectsArray, formTitle) {
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('action', '#');
  formContainer.append(form);

  const title = document.createElement('h2');
  title.textContent = formTitle;
  form.prepend(title);

  objectsArray.forEach((item) => {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');

    const formInput = document.createElement(item.tag);
    formInput.setAttribute('name', item.name);
    formInput.setAttribute('id', item.id);
    formInput.setAttribute('class', item.cssClass);
    formItem.append(formInput);

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', item.id);
    inputLabel.textContent = item.label;
    if (item.type === 'checkbox' || item.type === 'radio') {
      formItem.append(inputLabel);
      formItem.classList.add('inline-item');
      inputLabel.classList.add('inline-label');
      formInput.setAttribute('checked', '');
    } else {
      formItem.prepend(inputLabel);
      inputLabel.classList.add('form-label');
    }

    if (item.type === 'checkbox' || item.type === 'radio' || item.type === 'text') {
      formInput.setAttribute('type', item.type);
      formInput.setAttribute('value', item.value);
    }

    if (item.tag === 'select') {
      const optionsArray = [];
      const option1 = document.createElement('option');
      option1.textContent = item.optionOne;
      const option2 = document.createElement('option');
      option2.textContent = item.optionTwo;
      const option3 = document.createElement('option');
      option3.textContent = item.optionThree;
      optionsArray.push(option1, option2, option3);
      optionsArray.forEach((arrayItem) => {
        formInput.append(arrayItem);
      });
    }

    form.append(formItem);
  });

  const button = document.createElement('button');
  button.classList.add('form-button');
  button.textContent = 'Submit';
  form.append(button);
}
