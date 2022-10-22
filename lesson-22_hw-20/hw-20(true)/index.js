'use strict';

const itemsContainer = document.getElementsByClassName('item-container')[0];
const select = document.getElementsByClassName('filter-select')[0];

fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    addItemCards(data, itemsContainer);
  })
  .then(() => fetch('https://fakestoreapi.com/products/categories'))
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      select.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
    });
  })
  .then(() => select.addEventListener('change', filterCategories))
  .catch((err) => {
    console.log(err.message);
    itemsContainer.textContent = 'Something going wrong :( Please, refresh this page or visit us later';
  });

// -----------------------------------------------------------------------------------
function addItemCards(arrayFromServer, container) {
  arrayFromServer.forEach((item) => {
    container.insertAdjacentHTML(
      'beforeend',
      `
      <div class="item" data-category="${item.category}">
        <div class="item-image__container">
            <img class="item-image" src="${item.image}">
        </div>
        <div class="item-desciption__container">
            <h5 class="item-title">${item.title}</h5>
            <div class="item-price__container">
                <p class="item-rate">Rate: ${item.rating.rate} of 5 (${item.rating.count} votes)</p>
                <p class="item-price">${item.price} $</p>
            </div>
        </div>
      </div>`
    );
  });
}

function filterCategories() {
  const itemsArray = document.querySelectorAll('.item');
  itemsArray.forEach((item) => {
    if (select.value !== item.getAttribute('data-category') && select.value !== 'all') {
      item.classList.add('_hidden');
    } else {
      item.classList.remove('_hidden');
    }
  });
}
