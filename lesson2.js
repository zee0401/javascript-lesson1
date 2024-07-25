// lesson for forEach,map,filter and sort

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

// get names using for

const namesfor = [];

for (i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

console.log(names);

// get name using forEach

const nameeach = [];

users.forEach((user) => {
  nameeach.push(user.name);
});

console.log(nameeach);

// using map

const userName = users.map((user) => {
  return user.name;
});

console.log(userName);

// filter isactive users

const isActiveUser = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(isActiveUser);

//sort

const sorting = users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
console.log(sorting);

const sorted = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .map((user) => user.name);

console.log(sorted);
