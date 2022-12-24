'use strict';

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
        <p class="user-email">${item.email} <span>wrote:</span></p>
        <p>${item.body}</p>`
    );
  });
}

function removeContent(contentClass) {
  const content = document.querySelectorAll(`.${contentClass}`);
  content.forEach((item) => item.remove());
}

function addError(element, errorMessage) {
  const message = document.createElement('p');
  message.textContent = errorMessage;
  message.classList.add(ERROR_CLASS);
  element.after(message);
}

function removeError(errorClass) {
  const errors = document.querySelectorAll(`.${errorClass}`);
  errors.forEach((item) => item.remove());
}
