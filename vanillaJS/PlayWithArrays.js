// https://www.w3schools.com/jsref/jsref_obj_array.asp
// indexOf: return the index
// includes: return true or false if element exist. Also for string "Hello word".includes("word");
// indexOf: Index of element
// findIndex: return first index element match.
// some: if some element exist. arr.some(el => el === "custom value"). High performance.
// every: all elements match?
// find: first element match. Not match return undefined
//
// sort: order of the elements, arr.sort((a, b) => Math.abs(a) - Math.abs(b)). arr.toSorted() for new array
//
// filter: new array match the condition
// map: Same length but transformed.
// reduce: Only one value from the array

let characters = new Array();
characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
characters.push({
  name: "Manuel Arias",
  height: 182,
  mass: 87,
  eye_color: "brown",
  gender: "male",
});

console.log(characters.find((c) => c.name === "Manuel Arias"));
console.log(characters.findIndex((c) => c.name === "Manuel Arias"));
const uniqueCharacters = characters;
console.log(uniqueCharacters);

//***MAP***
//1. Get array of all names
const arrAllNames = characters.map((c) => c.name);
//2. Get array of all heights
const arrAllHeights = characters.map((c) => c.height);
//3. Get array of objects with just name and height properties
const arrNamesAndHeights = characters.map((c) => ({
  name: c.name,
  height: c.height,
}));
//4. Get array of all first names
const arrFirstName = characters.map((c) => c.name.split(" ")[0]);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((p, n) => p + n.mass, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((p, n) => p + n.height, 0);
//3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((accumulator, curValue) => {
  const color = curValue.eye_color;
  if (accumulator[color]) {
    accumulator[color]++;
  } else {
    accumulator[color] = 1;
  }
  return accumulator;
}, {});
//4. Get total number of characters in all the character names
const totalNumofChar = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0,
);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater = characters.filter((c) => c.mass > 100);
//2. Get characters with height less than 200
const lessHeight = characters.filter((c) => c.height < 200);
//3. Get all male characters
const maleCharacters = characters.filter((c) => c.gender === "male");
//4. Get all female characters
const fameleCharacters = characters.filter((c) => c.gender === "female");

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((p, c) => p.mass - c.mass);
//2. Sort by height
const sortByHeight = characters.sort((p, c) => p.height - c.height);
//3. Sort by name
const sortByName = characters.sort((p, c) => {
  if (p.name < c.name) return -1;
  return 1;
});
//4. Sort by gender
const sortByGender = characters.sort((p, c) => {
  if (p.gender === "female") return 1;
  return -1;
});

//***EVERY***
//1. Does every character have blue eyes?
const isAllBlue = characters.every((c) => c.eye_color === "blue");
//2. Does every character have mass more than 40?
const isMass = characters.every((c) => c.mass > 40);
//3. Is every character shorter than 200?
const isAllShorter = characters.every((c) => c.height < 200);
//4. Is every character male?
const isAllMale = characters.every((c) => c.gender === "male");

//***SOME***
//1. Is there at least one male character?
const isMale = characters.some((c) => c.gender === "male");
//2. Is there at least one character with blue eyes?
const isBlueEye = characters.some((c) => c.eye_color === "blue");
//3. Is there at least one character taller than 210?
const isTaller = characters.some((c) => c.height > 200);
//4. Is there at least one character that has mass less than 50?
const isLow = characters.some((c) => c.mass < 50);
