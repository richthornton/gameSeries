class VendingMachine {
  constructor(
    stock = [
      { name: "Smarties", code: "A01", quantity: 10, price: 0.6 },
      { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.6 },
      { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
      { name: "Freddo", code: "A04", quantity: 1, price: 0.25 },
    ]
  ) {
    this.stock = stock;
  }

  vend(itemCode) {
    let chosenItem = this.stock.find((item) => {
      return item.code === itemCode;
    });
    return `Vending ${chosenItem.name}`;
  }
}

module.exports = VendingMachine;
