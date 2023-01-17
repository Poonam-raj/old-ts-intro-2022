type Developer = {
  name: string;
  age: number;
  languages: string[];
  lovesCoding: boolean;
  job: string;
};

const devs: Developer[] = [
  {
    name: 'Jim',
    age: 33,
    languages: ['JS', 'TS', 'Python'],
    lovesCoding: true,
    job: 'tutor',
  },
  {
    name: 'Haz',
    age: 21,
    languages: ['JS', 'TS', 'Python'],
    lovesCoding: true,
    job: 'tutor',
  },
];
const logDev = (dev: Developer) => {
  console.log(`${dev.name} ${dev.lovesCoding ? 'loves' : 'hates'} coding!`);
};

devs.forEach(logDev);
