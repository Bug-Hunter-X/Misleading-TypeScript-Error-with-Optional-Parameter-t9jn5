function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

const person3 = {}; // Error: Type '{}' is missing the following properties from type '{ name: string; age?: number; }': name