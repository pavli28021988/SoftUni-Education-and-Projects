function solve(lostFights,helmetPrice,swordPrice,shieldPrice,amorPrice){

    let expenses = 0;
    
    let shieldBrokeCounter = 0;

    for (let i = 1; i<=lostFights; i++){

        if (i % 2 === 0 ){

            expenses += helmetPrice;
    
            
    
        }
    
    
        if (  i % 3 === 0){
    
    
            expenses += swordPrice
          
        }
    
        if (  i % 6 === 0){
    
            expenses += shieldPrice;
            shieldBrokeCounter++;
            if (shieldBrokeCounter % 2 === 0){
                expenses += amorPrice
            }
            
        }

        
    
     
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

    
}
solve(7,2,3,4,5);
solve(23,12.50,21.50,40,200);
