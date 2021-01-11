type NumOrString = unknown;

const isNumberOrString: NumOrString = (item) => {
  if (typeof item === "number") return "num";
  else return "string";
};
