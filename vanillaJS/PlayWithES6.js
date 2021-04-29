// Destruction
const myObject = {
  name: 'Manuel',
  age: 35,
};
const { name } = myObject;
console.log(name);
// Bad use
let createArray = new Array({ fruit: 'Apple' }, { fruit: 'Banana' });
const { fruit } = createArray;
console.log(fruit);

// Spread operator
const arr1 = ['manuel', 'fernando', 3, 5];
const arr2 = ['gallego', 'arias'];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Template Literal strings
console.log(`${name} is so big`);
