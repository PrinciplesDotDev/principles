const people = [
  { id: 1, firstName: "Max", lastName: "Bloggs", sex: "M", age: 20 },
  { id: 2, firstName: "Adam", lastName: "Smith", sex: "M", age: 17 },
  { id: 3, firstName: "Anna", lastName: "Doe", sex: "F", age: 25 },
];

const eurusdExchangeRate = { rate: 1.18581, currency1: "EUR", currency2: "USD" };
const orders = [{ amount: 1, currency: 'EUR'}, {amount: 2, currency: 'EUR'}];


orders.map((order) => {...order, usd: eurusdExchangeRate.rate * order.amount})




people
  .map((person) => ({
    ...person,
    fullName: `${person.sex === "M" ? "Mr" : "Ms"} ${person.firstName} ${
      person.lastName
    }`,
    isAllowedIn: person.age >= 18 ? true : false,
  }))

people
  .map(function addFullName(person) {
    const title = person.sex === "M" ? "Mr" : "Ms";
    const newFields = {
      fullName: `${title} ${person.firstName} ${person.lastName}`,
      isAllowedIn: person.age >= 18 ? true : false,
    };
    return {...person, ...newFields};
  })
