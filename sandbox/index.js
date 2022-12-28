const user = {
  name: 'John',
  age: 30,
};

// console.log(user);
// console.log(JSON.stringify(user));

const user2 = JSON.stringify(user);
console.log(user2);
console.log(JSON.parse(user2));
