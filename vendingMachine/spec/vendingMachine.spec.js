const Machine = require("../src/vendingMachine");

describe("The Vending Machine", () => {
  const vendingMachine = new Machine();

  it("returns 'Vending Smarties' when correct item code and money is given", () => {
    expect(vendingMachine.vend("A01", 0.6)).toEqual("Vending Smarties");
  });

  it("returns 'Vending Freddo' when correct item code and money is given", () => {
    expect(vendingMachine.vend("A04", 0.25)).toEqual("Vending Freddo");
  });

  xit("returns 'Not enough money!' when money input is less than price of item", () => {
    expect(vendingMachine.vend()).toEqual();
  });
});
