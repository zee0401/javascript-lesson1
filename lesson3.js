const companies = [
  {
    name: "Google",
    category: "Product Based",
    start: 1981,
    end: 2004,
  },
  {
    name: "Amazon",
    category: "Product Based",
    start: 1992,
    end: 2008,
  },
  {
    name: "Paytm",
    category: "Product Based",
    start: 1999,
    end: 2010,
  },
  {
    name: "Coforge",
    category: "Service Based",
    start: 1989,
    end: 2010,
  },
  {
    name: "Mindtree",
    category: "Service Based",
    start: 1989,
    end: 2010,
  },
];

const ages = [32, 12, 20, 16, 5, 54, 21, 44, 61, 12, 15, 45, 25, 64, 32];

console.log(ages.sort());

//  for each

companies.forEach((company) => {
  console.log(company);
});

//filter

console.log(ages.filter((age) => age < 30));

const productCompany = companies.filter(
  (company) => company.category === "Product Based"
);

console.log(productCompany);

//map

const stringLiteral = companies.map((comapny, index) => {
  return `name:${comapny.name} ${comapny.category}`;
});

console.log(stringLiteral);

// sort

const sortedStart = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortedStart);

const sortedName = companies.sort((c1, c2) => c1.name.localeCompare(c2.name));
console.log(sortedName);

//reduce

console.log(ages.reduce((acc, ele) => acc + ele, 0));
