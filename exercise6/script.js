// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.

const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(persons) {
  let content = "";

  persons.forEach((person) => {
    content += `<p>Name: ${person.name}, Age: ${person.age}</p>`;
  });

  document.body.innerHTML += content;
}
printPersons(persons);
