type Developer = unknown;

const devs: unknown[] = [
  {
    name: "Jim",
    age: 33,
    languages: ["JS", "TS", "Python"],
    lovesCoding: true,
    job: "tutor",
  },
  {
    name: "Haz",
    age: 21,
    languages: ["JS", "TS", "Python"],
    lovesCoding: true,
    job: "tutor",
  },
];
const logDev = (dev: unknown) => {
  console.log(`${dev.name} ${dev.lovesCoding ? "loves" : "hates"} coding!`);
};

devs.forEach(logDev);
