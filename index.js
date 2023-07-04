const prompt=require('prompt-sync')();
const { log } = require('console');

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

    console.log(inventory);