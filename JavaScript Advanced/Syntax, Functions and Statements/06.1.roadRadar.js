function solve(speed,area){

    let info = '';

    let speedLimit = 0;

    let difference = 0;

    let status = '';

 

    if(area === 'city'){

        speedLimit = 50;

    }else if(area === 'residential'){

        speedLimit = 20;

    }else if(area === 'interstate'){

        speedLimit = 90;

    }else if(area === 'motorway'){

        speedLimit = 130;

    }

 

    if(speed <= speedLimit && speed > 0){

            info = `Driving ${speed} km/h in a ${speedLimit} zone`

    }else{

            difference = speed - speedLimit;

            if(difference<=20){

                status = 'speeding';

            }else if(difference>20 && difference<=40){

                status = 'excessive speeding';

            }else{

                status = 'reckless driving';

            }

            info = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`

    }





 

    console.log(info);

}
solve(40, 'city');
console.log('------------------');
solve(21, 'residential');
console.log('---------------------');
solve(120, 'interstate');
console.log('--------------------');
solve(200, 'motorway');




/*function solve(speed,area){

    let limit = 0;
    let status = '';
    let info = '';

    switch(area){
        case 'motorway': limit = 130;
           

        if(speed< limit){
           info = `Driving ${speed} km/h in a ${limit} zone`
        }

        if(speed > limit){

             let difference = Math.abs(limit - speed);
            if(difference >= 20){
                
                status = 'speeding'

            }else if(difference >= 40){
                
                status = 'excessive speeding '
            }else{
                
                status = 'reckless driving '

            }
            //info = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
        }
        

        
        
        ;break;
        case 'interstate': limit = 90;
        if(speed< limit){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }

        if(speed > limit){

            let difference = Math.abs(limit - speed);
            if(difference >= 20){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${speeding}.`);

            }else if(difference >= 40){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${excessive} ${speeding}.`);
            }else{
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${reckless} ${driving}.`);

            }
        }
           
        ;break;
        case 'city': limit = 50;
        if(speed< limit){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }

        if(speed > limit){

            let difference = Math.abs(limit - speed);
            if(difference >= 20){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${speeding}.`);

            }else if(difference >= 40){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${excessive} ${speeding}.`);
            }else{
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${reckless} ${driving}.`);

            }
        }
           ;break;
        case 'residential': limit = 20;  
        if(speed< limit){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }

        if(speed > limit){

            let difference = Math.abs(limit - speed);
            if(difference >= 20){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${speeding}.`);

            }else if(difference >= 40){
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${excessive} ${speeding}.`);
            }else{
                
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${reckless} ${driving}.`);

            }
        } 
        ;break;
    }

}*/


/*function solve([speed, area]) {
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding);
    }
 
    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}*/


/*function solve([arg1, arg2]) {
    if (arg2 == 'city') {
        if (arg1 > 50) {
            let speeding = arg1 - 50;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'motorway') {
        if (arg1 > 130) {
            let speeding = arg1 - 130;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'interstate') {
        if (arg1 > 90) {
            let speeding = arg1 - 90;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'residential') {
        if (arg1 > 20) {
            let speeding = arg1 - 20;
            logSpeeding(speeding);
        }
    }
 
    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}*/
/*solve(40, 'city');
console.log('------------------');
solve(21, 'residential');
console.log('---------------------');
solve(120, 'interstate');
console.log('--------------------');
solve(200, 'motorway');*/

//------------------------------------------------------------SOLUTION--------------------------------------------------------------------//

/*

function solve(speed,area){

    let info = '';

    let speedLimit = 0;

    let difference = 0;

    let status = '';

 

    if(area === 'city'){

        speedLimit = 50;

    }else if(area === 'residential'){

        speedLimit = 20;

    }else if(area === 'interstate'){

        speedLimit = 90;

    }else if(area === 'motorway'){

        speedLimit = 130;

    }

 

    if(speed <= speedLimit && speed > 0){

            info = `Driving ${speed} km/h in a ${speedLimit} zone`

    }else{

            difference = speed - speedLimit;

            if(difference<=20){

                status = 'speeding';

            }else if(difference>20 && difference<=40){

                status = 'excessive speeding';

            }else{

                status = 'reckless driving';

            }

            info = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`

    }





 

    console.log(info);

}


*/