type InnerCounter = unknown;
type Counter = unknown;

const count: Counter = () => {
  let i = 0;
  const newFunc: unknown = () => {
    return ++i;
  };
  return newFunc;
};

const counter = count();
const one = counter();
const two = counter();
