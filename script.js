// Object inheritance
const Parent = {
  display: function () {
    console.log(`${this.name} and age is ${this.age}`);
  },
};

const child1 = Object.create(Parent);

child1.name = "Nitin Rajput";
child1.age = 21;
child1.display();

const child2 = Object.create(Parent);

child2.name = "Mahesh";
child2.age = 22;
child2.display();

// prototype chaining
const Gfather = {
  sayHello: function () {
    console.log("hey Grand Father");
  },
};

const father = Object.create(Gfather);

father.hello = function () {
  console.log("say Hi to Father");
};

const You = Object.create(father);
You.hi = function () {
  console.log("Hi....");
};

You.sayHello();

console.log(You);

// function inheritance by using Prototype

function getAllPropertyNames(obj) {
  var propertyNames = [];
  propertyNames = propertyNames.concat(Object.getOwnPropertyNames(obj));
  var prototype = Object.getPrototypeOf(obj);

  if (prototype !== null) {
    propertyNames = propertyNames.concat(getAllPropertyNames(prototype));
  }
  return propertyNames;
}
var person = {
  name: "Alice",
  age: 30,
};

person.__proto__.gender = "Female";

var allPropertyNames = getAllPropertyNames(person);

console.log(allPropertyNames);
