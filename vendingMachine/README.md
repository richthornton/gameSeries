Task

In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called VendingMachine with at least one method called vend. On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed. The vend method should take two arguments 1. Selection code of the item (not case sensitive) and 2. Amount of money the user inserts into the machine.
An example call of the vend method

machine.vend("A01", 0.90)

Rules

1. If the money given to the machine is less than the item cost return "Not enough money!"

2. If the quantity is 0 for an item return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.

3. If an item is correctly selected return "Vending Item Name with 9.40 change.". Where "Item Name" is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "Vending Item Name". Where "Item Name" is the name of the item.

5. If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

8. Change is always given to 2 decimal places ie 7.00

```
var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];
```

| Input                                    | Output                                                |
| ---------------------------------------- | ----------------------------------------------------- |
| machine.vend("A01", 0.60)                | Vending Smarties                                      |
| machine.vend("A02", 0.60)                | Vending Caramac Bar                                   |
| machine.vend("A02", 0.50)                | Not enough money!                                     |
| machine.vend("A01", 1.00)                | Vending Item Name with 0.40 change                    |
| machine.vend("A01", 1.00)                | items[0].quantity to have changed by 1                |
| machine.vend("A01", 1.00) (quantity = 0) | Smarties: Out of stock!                               |
| machine.vend("BO1", 1.00)                | Invalid Selection! : Money in vending machine = float |
