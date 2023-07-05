const prompt=require('prompt-sync')();
const { log } = require('console');
const fs=require('fs');
writeData=require("./inventory");

console.log("1 - Inventory entiers:");
console.log("2 - Display inventory:");

let process=parseFloat( prompt("Enter the Operation as Press " ));
switch (process) {
    case 1:
        function inventory() {
            let Pcode=prompt("Enter PCode:");
            let Desc=prompt("Enter Descripation:");
            let Category=prompt("Enter Category:");
            let Mrp=prompt("Enter MRP:");
            let Upc=prompt("Enter Upc:");
            let Location=prompt("Enter Stock Location:");

        
            var inventory={
                "Pcode":Pcode,
                "Desc":Desc,
                "Category":Category,
                "Mrp":Mrp,
                "Upc":Upc,
                "Location":Location
            };
        
            writeData.push(inventory);
            obj=JSON.stringify(writeData);
            fs.writeFileSync("inventory.json",obj);
        
            input=parseInt( prompt("IF you want enter data, Press 1 ,Then  Exist Press 0:"));
    
        }
        inventory()
            
            if (input == 0) {
                console.log("Inventory data is Added");
                return false;
            }else{
                inventory()
            }
        break;
    case 2:

        let output=fs.readFileSync('inventory.json');
        let data=JSON.parse(output);
        console.table(data);
        break;

    default:
        console.log("enter the values");
    break;

}
