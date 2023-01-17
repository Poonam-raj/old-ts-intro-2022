type CreateUser = (name: string, age: number, occupation: string) => Object;

const createUser: CreateUser = (name, age, occupation) => {
  const newUser: Object = { name, age, occupation };
  return newUser;
};
