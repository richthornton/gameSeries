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

  findItem(code) {
    let item = this.stock.find((item) => {
      return item.code === code;
    });
    return item;
  }

  calculateChange(itemPrice, money) {
    let change = (money - itemPrice).toFixed(2);
    return change;
  }

  vend(itemCode, money) {
    let selectedItem = this.findItem(itemCode);

    // incorrect money given
    if (selectedItem.price > money) {
      return "Not enough money!";
    }

    if (selectedItem.quantity === 0) {
      return `${selectedItem.name}: Out of stock!`;
    }

    // correct money therefore change quantity in stock
    selectedItem.quantity--;

    let change = this.calculateChange(selectedItem.price, money);

    if (change > 0.0) {
      return `Vending ${selectedItem.name} with ${change} change`;
    } else {
      return `Vending ${selectedItem.name}`;
    }
  }
}

module.exports = VendingMachine;
