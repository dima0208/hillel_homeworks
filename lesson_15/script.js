'use strict';

// ------------------------Инкапсуляция-----------------------------

function Student(name, surname, age) {
  this.name = name;
  this.surName = surname;
  let _age = age;

  this.getAge = function () {
    return _age;
  };

  this.setAge = function (newAge) {
    _age = newAge;
  };
}

const studentOne = new Student('Smith', 'Will', 35);
console.log(studentOne);
console.log(studentOne.getAge());
console.log(studentOne.setAge(25));
console.log(studentOne.getAge());
console.log(studentOne.age);

Object.defineProperty(studentOne, 'color', {
  value: 'black',
  writable: true,
});

console.log(studentOne);
console.log(studentOne.color);
studentOne.color = 'white';
console.log(studentOne);

// --------------------Getter and setter----------------------------
const person = {
  firstName: '',
  lastName: '',

  get name() {
    return this.firstName + ' ' + this.lastName;
  },

  set name(newName) {
    const [firstName, lastName] = newName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

person.name = 'Will Smith';
console.log(person);
console.log(person.name);

// --------------------Getter and setter2----------------------------
const coder = {
  skillsArr: [],
  get skills() {
    return this.skillsArr.join(' ');
  },
  set skills(newSkillsArr) {
    const newArray = newSkillsArr.split(', ');
    newArray.forEach((item) => this.skillsArr.push(item));
  },
};
coder.skills = 'html, css, javascript';
coder.skills = 'react';
console.log(coder);
console.log(coder.skills);

// ------------------Заимствование (прототипы)------------------------
function Human() {
  this.getInfo = function () {
    console.log('Name: ', this.name, 'Age: ', this.age);
  };
  this.planet = 'Earth';
}

function Developer(name, age, gender, technicalSkills, area) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.technicalSkills = technicalSkills;
  this.area = area;

  this.getProffesionalInfo = function () {
    console.log('Skills: ', this.technicalSkills, 'country: ', this.area);
  };
}
Developer.prototype = new Human();
const developer = new Developer(
  'Shtreban',
  25,
  'male',
  'JS, React',
  'Kazahstan'
);
developer.getInfo();
developer.getProffesionalInfo();
console.log(developer.planet);

const man2 = {
  age: 24,
  name: 'Woody',
};

Object.setPrototypeOf(man2, developer);

console.log(man2.planet);
console.log(man2.getInfo());
console.log(man2.getInfo());

console.log(man2.hasOwnProperty('planet'));
console.log(man2.hasOwnProperty('age'));

for (let key in man2) {
  console.log(key);
}

for (let key of Object.keys(man2)) {
  console.log(key);
}
