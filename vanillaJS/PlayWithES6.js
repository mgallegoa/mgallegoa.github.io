// Destruction
const myObject = {
  name: "Manuel",
  age: 35,
};
const name1 = myObject.name;
const name2 = myObject["name"];
const { name: name3, age } = myObject;
console.log(name3);
console.log(age);
// Default value and new variable name
let { lastName = "Arias", age: newAge } = myObject;
// Bad use
let createArray = new Array({ fruit: "Apple" }, { fruit: "Banana" });
const { fruit } = createArray;
console.log(fruit);

// Spread operator
const arr1 = ["manuel", "fernando", 3, 5];
const arr2 = ["gallego", "arias"];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Template Literal strings
console.log(`${name2} is so big`);

// Iterate objects
for (const property in myObject) {
  console.log(property);
  console.log(myObject[property]);
}
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));
// Optional chaining
console.log("other" in myObject); //print false
console.log(myObject.other?.val);
