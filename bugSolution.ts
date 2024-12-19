function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

const person3 = { name: "Jane Doe" }; // Fixed: added name property
printName(person3); // Works fine

//Alternative solution: using a type assertion to bypass the error (generally not recommended, as it might mask issues)
const person4 = {} as { name: string; age?: number }; // Not recommended, but illustrates how to bypass
printName(person4); // Works, but unsafe