'use strict';

const form = document.forms.form;
const idInput = form.input;
const container = document.querySelector('.container');
const ERROR_CLASS = '_error';
const CONTENT_CLASS = 'content';

form.addEventListener('submit', function (e) {
  e.preventDefault();
  removeError(ERROR_CLASS);
  removeContent(CONTENT_CLASS);
  getPostComments();
});

async function getPostComments() {
  if (idInput.value <= 0 || idInput.value > 100) {
    addError(idInput, 'ID must be from 1 to 99');
    return;
  }
  try {
    const URL = `https://jsonplaceholder.typicode.com/posts/${idInput.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    renderPost(container, data);

    const responseCom = await fetch(`${URL}/comments`);
    const dataCom = await responseCom.json();
    renderComments(document.querySelector(`.${CONTENT_CLASS}`), dataCom);
  } catch (error) {
    console.log(error);
  }
}

function removeContent(contentClass) {
  const content = document.querySelectorAll(`.${contentClass}`);
  content.forEach((item) => {
    item.remove();
  });
}

function addError(element, errorMessage) {
  const message = document.createElement('p');
  message.textContent = errorMessage;
  message.classList.add(ERROR_CLASS);
  element.after(message);
}

function removeError(errorClass) {
  const errors = document.querySelectorAll(`.${errorClass}`);
  errors.forEach((item) => {
    item.remove();
  });
}

function renderPost(DOMContainer, json) {
  DOMContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class=${CONTENT_CLASS}>
      <h2 class="post-title">${json.title}</h2>
      <p class="post">${json.body}</p>
      <h3 class="comments-title">Comments:</h3>
    </div>`
  );
}

function renderComments(containerWithPost, json) {
  json.forEach((item) => {
    containerWithPost.insertAdjacentHTML(
      'beforeend',
      `
      <p class="user-email">${item.email} wrote:</p>
      <p>${item.body}</p>`
    );
  });
}
