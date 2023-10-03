//{productName} -> {productLowestPrice} ({townName})
/*
// output
Sample Product -> 1000 (Sample Town) 
Orange -> 2 (Sample Town) 
Peach -> 1 (Sample Town) 
Burger -> 10 (New York)
*/



function solve(data){

    let res = {};

    for(let el of data){
        let[town,product,price] = el.split(' | ');
        price = Number(price);


        if(res.hasOwnProperty(product)){
            //let currentTown = res[product][town];

            let currentPrice = res[product]["price"];
            if(currentPrice > price){
                res[product] = {town,price}
            }
        }else{
            res[product] = {town,price}
        }
    }
    for(let[product,value] of Object.entries(res)){
        console.log(`${product} -> ${value.price} (${value.town})`)
    }

}
solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10']);

//---------------------------------------------------------------------------------------------//
/*

function foo(arr) {
    const data = arr
        .map(x => x.split(" | "))
        .reduce((a, v) => {
            const [town, product, price] = v.map(x => (isNaN(x) ? x : Number(x)))
            a[product] = a[product] || { price, town }
            if (a[product].price > price || a[product].town === town) {
                a[product] = { price, town }
            }
            return a
        }, {})

    return `${Object.entries(data)
        .map(([name, product]) => `${name} -> ${product.price} (${product.town})`)
        .join("\n")}`
}

console.log(
    foo([
        "Sample Town | Sample Product | 1000",
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "New York | Sample Product | 1000.1",
        "New York | Burger | 10",
    ])
)

*/ 