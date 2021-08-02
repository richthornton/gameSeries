const Machine = require("../src/vendingMachine");

describe("The Vending Machine", () => {
  const vendingMachine = new Machine();

  it("returns the correct item when correct item code and money is given", () => {
    expect(vendingMachine.vend("A01", 0.6)).toEqual("Vending Smarties");
  });

  xit("returns 'Not enough money!' when money input is less than price of item", () => {
    expect(vendingMachine.vend()).toEqual();
  });
});
