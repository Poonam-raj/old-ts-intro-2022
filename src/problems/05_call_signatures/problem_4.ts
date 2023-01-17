type NumOrString = (item: string) => string;

const isNumberOrString: NumOrString = (item) => {
  if (typeof item === 'number') return 'num';
  else return 'string';
};
