function solve(input){
    let text = input.join(' ');
    let sum = 0;

    let furnitureArr = [];
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
    
    //console.log(text);
    
    let valid;

    while ((valid = pattern.exec(text)) !== null){
        let validFurnitureName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']); 
        let validQuantity = Number(valid.groups['quantity']);
        furnitureArr.push(validFurnitureName);
        sum += Number(validPrice * validQuantity);

    }
    console.log('Bought furniture: ');
    furnitureArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
solve(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);