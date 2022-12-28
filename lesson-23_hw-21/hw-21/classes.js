'use strict';

class BaseInput {
  constructor(tag, name, id, cssClass, label) {
    this.tag = tag;
    this.name = name;
    this.id = id;
    this.cssClass = cssClass;
    this.label = label;
  }
}

class TextInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, type, value) {
    super(tag, name, id, cssClass, label);
    this.type = type;
    this.value = value;
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('form-label');
    formItem.prepend(inputLabel);

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);
    formInput.setAttribute('type', this.type);
    formInput.setAttribute('value', this.value);
    formItem.append(formInput);
    return formItem;
  }
}

class RadioCheckInput extends TextInput {
  constructor(tag, name, id, cssClass, label, type, value) {
    super(tag, name, id, cssClass, label, type, value);
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');
    formItem.classList.add('inline-item');

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);
    formInput.setAttribute('type', this.type);
    formInput.setAttribute('value', this.value);
    formInput.setAttribute('checked', '');
    formItem.append(formInput);

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('inline-label');
    formItem.append(inputLabel);
    return formItem;
  }
}

class SelectInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, selectOptions) {
    super(tag, name, id, cssClass, label);
    this.selectOptions = selectOptions;
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('form-label');
    formItem.prepend(inputLabel);

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);

    this.selectOptions.forEach((option) => {
      const nodeOption = document.createElement('option');
      nodeOption.textContent = option;
      formInput.append(nodeOption);
    });

    formItem.append(formInput);
    return formItem;
  }
}
