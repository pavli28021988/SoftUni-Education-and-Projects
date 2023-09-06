function solve(arr1,arr2){

    let store = {};

    for (let i = 0; i < arr1.length;i+=2){

        let product = arr1[i];
        store[product] = Number(arr1[i+1]);

    }

    for(let i=0;i<arr2.length;i+=2){
        let product = arr2[i];
        if(!store.hasOwnProperty(product)){
            store[product] = 0;
        }

        store[product] += Number(arr2[i+1]);
    }
    let res = Object.entries(store);
    for(let [key,value] of res){
        console.log(`${key} -> ${value}`);

    }

}


solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);


solve([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);