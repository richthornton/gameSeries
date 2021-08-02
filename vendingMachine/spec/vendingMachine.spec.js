const Machine = require("../src/vendingMachine");

describe("The Vending Machine", () => {
  beforeEach(() => {
    return (vendingMachine = new Machine());
  });

  it("returns the correct item when correct item code and money is given", () => {
    expect(vendingMachine.vend("A01", 0.6)).toEqual("Vending Smarties");
  });

  it("returns 'Not enough money!' when money input is less than price of item", () => {
    expect(vendingMachine.vend("A01", 0.5)).toEqual("Not enough money!");
  });

  it("if too much money given, it returns item and change to 2dp", () => {
    expect(vendingMachine.vend("A01", 1.0)).toEqual(
      "Vending Smarties with 0.40 change"
    );
  });

  it("changes the item quantity by 1 when successfully selected", () => {
    vendingMachine.vend("A01", 0.6);
    expect(vendingMachine.stock[0].quantity).toEqual(9);
  });
});
