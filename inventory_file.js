const prompt=require('prompt-sync')();
const { log, Console } = require('console');
const fs=require('fs');
database=require("./inventory");
const grn_inventory=require("./inventory_grn");


// Inventory resgister function

const inventoryRegister=function (){

    function inventoryEntry(){
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
            "Upc":Upc,
            
        };

        writeData.push(inventory);
        obj=JSON.stringify(writeData);
        fs.writeFileSync("inventory.json",obj);

        input=parseInt( prompt("IF you want enter data, Press 1 ,Then  Exist Press 0:"));

    }
    
        inventoryEntry()
        if (input == 0) {
            console.log("Inventory data is Added");
            return false;
        }else{
            inventoryEntry()
        }
        
}

// Display inventory data 

 const displayInventory=function() {
        let output=fs.readFileSync('inventory.json');
        let data=JSON.parse(output);
        console.table(data);
}

// Filter inventory

const inventoryFilter=function(){
    console.log("1.Pcode");
        console.log("2.Category");
        console.log("3.Mrp");
        console.log("4.Upc");
        console.log("5.Location");

        let category = prompt("Type filter Data: ");
        let outputData=fs.readFileSync('inventory.json');
        
        let print =JSON.parse(outputData);
        if(category == "Pcode" ){
            let categorydata= prompt("Type Pcode:");
            let filter=print.filter(function(element) {
                return element.Pcode == categorydata;
            });
            console.table(filter);
        }
        else if(category == "Category" ){
            let categorydata= prompt("Type Category:");
            
            let filter=print.filter(function(element) {
                return element.Category == categorydata;
            })
            console.table(filter);
        }
        else if(category == "Mrp" ){
            let categorydata= prompt("Type Mrp:");

            let filter=print.filter(function(element) {
                return element.Mrp == categorydata;
            })
            console.table(filter);
        }
        else if(category == "Upc" ){
            let categorydata= prompt("Type Upc:");

            let filter=print.filter(function(element) {
                return element.Upc == categorydata;
            })
            console.table(filter);
        }
        else if(category == "Location" ){
            let categorydata= prompt("Type Location:");

            let filter=print.filter(function(element) {
                return element.Location == categorydata;
            })
            console.table(filter);
        }
        else{
            console.log("Enter the filter data");
        }

}


const inventoryGrn=function(){
    let EmpName=prompt("Enter the Employe Name: ");

    if (EmpName != 0 ||null) {
        let Pcode=parseInt(prompt("Type pcode: "));
        let output=fs.readFileSync('inventory.json');
        let data=JSON.parse(output);
        let fetch=data.find(element=>element.Pcode===Pcode)
    
        if(fetch.Pcode==Pcode){
            console.table(fetch);
           
            let Case=parseInt(prompt("Enter case :"));
            let CaseRate=parseInt(prompt("Enter rate :"));
            let PcsRate=parseInt(prompt("Enter Sale rate :"));

            let Amount=CaseRate*Case;

            let date=new Date();
            let day=date.getDate();
            let month=date.getMonth()+1;
            let year =date.getFullYear();

            let enteryDate=`${day}-${month}-${year}`;
            

            GrnDetail={
                "Pcode":fetch.Pcode,
                "Desc":fetch.Desc,
                "Category":fetch.Category,
                "Mrp":fetch.Mrp,
                "Salerate":PcsRate,
                "Upc":fetch.Upc,
                "Case":Case,
                "CaseRate":CaseRate,
                "Amount":Amount,
                "EmpName":EmpName,
                "date":enteryDate
                
            }

            grn_inventory.push(GrnDetail)
            grnDb=JSON.stringify(grn_inventory);
            fs.writeFileSync("inventory_grn.json",grnDb);    
            console.log(GrnDetail);

        }else{
            console.log("Enter correct Pcode !");
        }

    }
    else{
        console.log("Employe Name Mantiory");
    }

   

//    let grn=data.findIndex((element=>element.Pcode===Pcode));
    
}



module.exports={inventoryRegister,displayInventory,inventoryFilter,inventoryGrn,grnRecord}