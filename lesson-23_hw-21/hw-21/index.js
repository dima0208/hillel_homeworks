const formContainer = document.querySelector('.form-wrapper');

const nameInput = new TextInput('input', 'name', 'nameInput', 'text-input', 'Name', 'text', 'some name');
const surnameInput = new TextInput('input', 'surname', 'surnameInput', 'text-input', 'Surname', 'text', 'some surname');
const officeRadio = new RadioCheckInput('input', 'workPlace', 'radioOffice', 'radio-input', 'Work from office', 'radio', 'office');
const remoteRadio = new RadioCheckInput('input', 'workPlace', 'radioRemote', 'radio-input', 'Work from home', 'radio', 'home');
const englishCheck = new RadioCheckInput('input', 'isEng', 'checkEng', 'check-input', 'Knowledge of English', 'checkbox', 'yes');
const countrySelect = new SelectInput('select', 'country', 'countrySelect', 'select-country', 'Country', [
  'Ukraine',
  'Poland',
  'USA',
  'Great Britain',
  'Norway',
  'Australia',
]);

const arrayOfInputs = [nameInput, surnameInput, officeRadio, remoteRadio, englishCheck, countrySelect];

createForm(formContainer, arrayOfInputs, 'Form with using classes');
