import './styles/index.scss';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';

const entries = {
  name: 'Dima',
  age: 27,
};

const finalObj = {
  ...entries,
  language: 'JS',
  framwork: 'React',
};

$('.jquery-title').text('Hello from jquery');

console.log(finalObj);
