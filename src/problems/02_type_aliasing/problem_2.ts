type Pupper = {
  name: string;
  colour: string;
  favTreat: string;
  isTreated: boolean;
};

const puppers: Pupper[] = [
  { name: 'peanut', colour: 'black', favTreat: 'chicken', isTreated: false },
  { name: 'snoopy', colour: 'brown', favTreat: 'sausage', isTreated: true },
];
function treatPuppers(pups: Pupper[]) {
  function treatPup(pup: Pupper) {
    if (!pup.isTreated) {
      console.log(`${pup.name} gets a ${pup.favTreat}`);
      pup.isTreated = true;
    }
  }
  pups.forEach(treatPup);
}
