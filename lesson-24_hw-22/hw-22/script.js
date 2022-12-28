const form = document.forms.form;
const idInput = form.input;
const container = document.querySelector('.container');
const ERROR_CLASS = '_error';
const CONTENT_CLASS = 'content';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeError(ERROR_CLASS);
  getPostComments();
});

async function getPostComments() {
  if (idInput.value <= 0 || idInput.value > 100) {
    addError(idInput, 'ID must be from 1 to 99');
    return;
  }
  removeContent(CONTENT_CLASS);
  try {
    const URL = `https://jsonplaceholder.typicode.com/posts/${idInput.value}`;
    const responsePost = await fetch(URL);
    const dataPost = await responsePost.json();
    renderPost(container, dataPost);

    const responseComments = await fetch(`${URL}/comments`);
    const dataComments = await responseComments.json();
    renderComments(document.querySelector(`.${CONTENT_CLASS}`), dataComments);
  } catch (error) {
    console.log(error);
  }
}
