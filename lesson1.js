//Lesson for Find,indexof,reduce,includes,set,concat,findindex,some,push

const users = [
  {
    id: 1,
    name: "Ajay",
    isActive: true,
    age: 21,
  },
  {
    id: 2,
    name: "Akash",
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: "Fraz",
    isActive: true,
    age: 38,
  },
  {
    id: 4,
    name: "vipin",
    isActive: false,
    age: 30,
  },
];

Find Method
const userName = (name, users) => {
  const user = users.find((user) => user.name === name);
  return Boolean(user);
};

FindIndex;
const userName = (name, users) => {
  const user = users.findIndex((user) => user.name === name);
  return user >= 0;
};

some
const userName = (name, users) => {
  const user = users.some((user) => user.name === name);
  return user;
};

console.log(userName("Ajay", users));

Adding elements to arrary using Push method

const arr = [1, 2, 3];

const append = (ele) => {
  arr.push(ele);
  return arr;
};

const newArray = append(5);
console.log(newArray);
console.log(arr);

adding elements to the array using spread operator

const arr = [1, 2, 3];

const append = (ele) => {
  //   arr.push(ele);
  return [...arr, ele];
};

const newArray = append(5);
console.log(newArray);
console.log(arr);

Remove Dublicate from array using loop

const arr = [1, 2, 3, 3, 4, 5, 4];

const uniqueArr = () => {
  const unique = [];

  arr.forEach((ele) => {
    if (!unique.includes(ele)) {
      unique.push(ele);
    }
  });
  return unique;
};

console.log(uniqueArr());

Remove dublicate using set

const arr = [1, 2, 3, 4, 4, 3, 2, 6];

const unique = new Set(arr);

const uniqueArr = (arr) => {
  return [...new Set(arr)];
};

console.log(unique);

removing dublicated using reduce//

const arr = [1, 2, 3, 4, 4, 3, 2, 6];

const uniqueArr = () => {
  return arr.reduce((acc, ele) => {
    return acc.includes(ele) ? acc : [...acc, ele];
  }, []);
};

console.log(uniqueArr());

mergeing Array

arr1 = [1, 2];
arr2 = [3, 4];

const mergeArray = () => {
  return [...arr1, ...arr2];
};

const result = mergeArray(arr1, arr2);
console.log(result);

merging array using

concat array

arr1 = [1, 2];
arr2 = [3, 4];

const mergeArray = () => {
  return arr1.concat(arr2);
};

const result = mergeArray();
console.log(result, arr1, arr2);
