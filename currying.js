//currying in javascript

// function curry(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const add = curry(4)(5)(10);

// console.log(add);

// Curryiing

userObj = {
  name: "Ajay",
  age: 28,
};

function userInfo(info) {
  return function (objinfo) {
    return userObj[objinfo];
  };
}

const res = userInfo(userObj);
