type InnerCounter = () => number;
type Counter = () => InnerCounter;

const count: Counter = () => {
  let i = 0;
  const newFunc: InnerCounter = () => {
    return ++i;
  };
  return newFunc;
};

const counter = count();
const one = counter();
const two = counter();
