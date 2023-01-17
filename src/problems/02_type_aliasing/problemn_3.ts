type Burger = {
  bun: string;
  gherkin: boolean;
  filling: string;
  without?: string[];
  salad: boolean;
  extras: string[];
};

const orders: Burger[] = [
  {
    bun: 'sesame',
    gherkin: true,
    filling: 'tofu',
    salad: true,
    without: ['onions'],
    extras: [],
  },
  {
    bun: 'brioche',
    gherkin: false,
    filling: 'beef',
    salad: true,
    extras: [],
  },
  {
    bun: 'sesame',
    gherkin: true,
    filling: 'mushroom',
    salad: true,
    extras: ['cheese', 'gherkin'],
  },
];

function addGherkin(burgerOrder: Burger) {
  const hasGherkin = burgerOrder.gherkin;
  const hasExtra = burgerOrder.extras.includes('gherkin');
  if (hasGherkin) {
    console.log('applying gherkins');
  }
  if (hasExtra) {
    console.log('applying extra gherkins–');
  }
}

orders.forEach(addGherkin);
