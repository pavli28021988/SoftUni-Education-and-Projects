function solve(day,age){

    let price = 0;

    if (age >=0 && age <=18){

        switch (day) {
            case 'Weekday': price = 12  ;break;

            case 'Weekend':price = 15 ;break;

            case 'Holiday': price = 5 ;break;
                
                
        
            
                
        }

    }else if (age > 18 && age <=64){


        switch (day) {
            case 'Weekday': price = 18  ;break;

            case 'Weekend':price = 20 ;break;

            case 'Holiday': price = 12 ;break;
                
                
        
            
                
        }

    }else if (age >64 && age <=122){


        switch (day) {
            case 'Weekday': price = 12  ;break;

            case 'Weekend':price = 15 ;break;

            case 'Holiday': price = 10 ;break;
                
                
        
            
                
        }

    }else{
        console.log('Error!');
    }

    if ( price !==0){
        console.log(price + '$');
    }

}
solve('Weekday', 42);
solve('Holiday', -10);
solve('Holiday', 15);
solve('Weekend', 18);


/*solution 2*/

/* function solve(day,age){


    let price = 0;
    if (day === 'Weekday'){
        if ((age >=0 && age <=18) || (age > 64 && age <=122)){
            price = 12;
        }else if (TODO for age)
    }else if (day === 'Weekend'){
        if ((age >=0 && age <18) || (age >64 && age <=122)){
            price = 15;
        }else if (age > 18 && age <= 64){
            price = 20;
        }
    }else if (day === 'Holiday'){
        if (age >=0 && age <=18){
            price = 5
        }else if (TODO for age)

    }

    if (price !== 0){
        console.log(price + '$');
    }else{
        console.log('Error!);
    }
    

}*/