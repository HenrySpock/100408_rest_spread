console.log('rest_spread.js checking in');

// 1. filterOutOdds():\

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// 2. findMin():

function findMin(...args) {
  return Math.min(...args);
}

// 3. mergeObjects():

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 4. doubleAndReturnArgs():

function doubleAndReturnArgs(arr, ...args) {
  const doubledArgs = args.map(val => val * 2);
  return [...arr, ...doubledArgs];
}

// Slice and Dice!
// 1. removeRandom(items):
const removeRandom = (...items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

// 2. extend(array1, array2):
const extend = (array1, array2) => [...array1, ...array2];

// 3. addKeyVal(obj, key, val):
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// 4. removeKey(obj, key):
const removeKey = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
  return newObj;
}

// 5. combine(obj1, obj2):
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 6. update(obj, key, val):
const update = (obj, key, val) => ({ ...obj, [key]: val });
