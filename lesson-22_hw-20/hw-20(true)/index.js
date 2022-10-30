const itemsContainer = document.getElementsByClassName('item-container')[0];
const select = document.getElementsByClassName('filter-select')[0];
const ERROR_MESSAGE = 'Something going wrong :( Please, refresh this page or visit us later';

fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => addItemCards(data, itemsContainer))
  .catch((err) => {
    console.log(err.message);
    renderErrorMessage(itemsContainer, ERROR_MESSAGE);
  });

fetch('https://fakestoreapi.com/products/categories')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => select.insertAdjacentHTML('beforeend', `<option>${item}</option>`));
  })
  .then(() => select.addEventListener('change', filterCategories))
  .catch((err) => {
    console.log(err.message);
    renderErrorMessage(itemsContainer, ERROR_MESSAGE);
  });
