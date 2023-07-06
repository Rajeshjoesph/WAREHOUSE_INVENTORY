const prompt=require('prompt-sync')();
const { log } = require('console');
const fs=require('fs');

module.exports=function inventory() {
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

// export { inventory };
