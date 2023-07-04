const prompt=require('prompt-sync')();
const { log } = require('console');
const fs=require('fs');
writeData=require("./inventory");

    let Pcode=prompt("Enter PCode:");
    let Desc=prompt("Enter Descripation:");
    let Category=prompt("Enter Category:");
    let Mrp=prompt("Enter MRP:");
    let Upc=prompt("Enter Upc:");

    var inventory={
        "Pcode":Pcode,
        "Desc":Desc,
        "Category":Category,
        "Mrp":Mrp,
        "Upc":Upc
    };

    writeData.push(inventory);
    obj=JSON.stringify(writeData);
    fs.writeFileSync("inventory.json",obj);

    let output=fs.readFileSync('inventory.json');
    
    let data=JSON.parse(output);

    console.table(data);
    


    