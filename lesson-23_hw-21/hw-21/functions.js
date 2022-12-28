function createForm(formWrapper, objectsArray, formTitle) {
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('action', '#');
  formWrapper.append(form);

  const title = document.createElement('h2');
  title.textContent = formTitle;
  form.prepend(title);

  objectsArray.forEach((item) => form.append(item.generateNode()));

  const button = document.createElement('button');
  button.classList.add('form-button');
  button.textContent = 'Submit';
  form.append(button);
}
