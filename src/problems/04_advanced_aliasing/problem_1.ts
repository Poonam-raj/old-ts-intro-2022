type User = {
  name: string;
  age: number;
  occupation: string;
};

type Admin = {
  name: string;
  age: number;
  accessLevel: number;
};

type Person = User | Admin;

const people: Person[] = [
  {
    name: 'Joe Bloggs',
    age: 36,
    occupation: 'clothing designer',
  },
  {
    name: 'Lisa Simpson',
    age: 21,
    occupation: 'POTUS',
  },
  {
    name: 'Tech Support',
    age: 56,
    accessLevel: 5,
  },
];

const logPerson = (person: Person) => {
  console.log(`${person.name} ${person.age}`);
};

people.forEach(logPerson);
