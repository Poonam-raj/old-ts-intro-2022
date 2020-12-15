const admin: Admin[] = [
  {
    name: "Joe Bloggs",
    age: 36,
    accessLevel: 1,
  },
  {
    name: "Lisa Simpson",
    age: 21,
    accessLevel: 5,
  },
  {
    name: "Tech Support",
    age: 56,
    accessLevel: 10,
  },
];

function updateAdmin(admin: unknown, fieldsToUpdate: unknown): unknown {
  return { ...admin, ...fieldsToUpdate };
}
updateAdmin(admin[0], { name: "barry" });
updateAdmin(admin[0], { accessLevel: 4, age: 22 });
