const prompt=require('prompt-sync')();
const { log } = require('console');
const fs=require('fs');
writeData=require("./inventory");
var inventory_file= require("./inventory_file");


console.log("1 - Inventory entiers:");
console.log("2 - Display inventory:");
console.log("3 - Search by Category:");
console.log("4 - GRN Entry:");




let process=parseFloat( prompt("Enter the Operation as Press " ));
switch (process) {
    case 1:
        
        inventory_file.inventoryRegister();      
        break;

    case 2:

        inventory_file.displayInventory();
        break;

    case 3:
        inventory_file.inventoryFilter();
        break;
    case 4:
        inventory_file.inventoryGrn();
        break;

    default:
        console.log("enter the values");
    break;

}
