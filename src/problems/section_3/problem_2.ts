type Pupper = unknown;

const puppers = [
  { name: "peanut", colour: "black", favTreat: "chicken", isTreated: false },
  { name: "snoopy", colour: "brown", favTreat: "sausage", isTreated: true },
];
function treatPuppers(pups: unknown) {
  function treatPup(pup: unknown) {
    if (!pup.isTreated) {
      console.log(`${pup.name} gets a ${pup.favTreat}`);
      pup.isTreated = true;
    }
  }
  pups.forEach(treatPup);
}
