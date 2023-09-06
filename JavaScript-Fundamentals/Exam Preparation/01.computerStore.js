function solve(arr){

    let finalPrice = 0;
    let totalPriceBeforeTaxes = 0;
    let typeOfClient = arr.pop();
    //console.log(typeOfClient);

    for (let i = 0; i < arr.length;i++){
        arr[i] = Number(arr[i]);
        
       
       
    }

    for (let num of arr){
        if (num > 0){
            totalPriceBeforeTaxes+=num
        }else{
            console.log('Invalid price!');
        }
    }

    if (typeOfClient !== 'special'){
        finalPrice = totalPriceBeforeTaxes + (totalPriceBeforeTaxes * 0.2);
    }else{
        let discount = 0.1;
        finalPrice = (totalPriceBeforeTaxes + (totalPriceBeforeTaxes * 0.2)) - (totalPriceBeforeTaxes + (totalPriceBeforeTaxes * 0.2)*discount)
    }

    if (finalPrice > 0){
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceBeforeTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${(totalPriceBeforeTaxes * 0.2).toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }else{
        console.log('Invalid order!');
    }
    
    

}
solve(['1050','200','450','2','18.50','16.86','special']);
solve(['1023','15','-20','-5.50','450','20','17.66','19.30','regular']);
solve(['regular']);