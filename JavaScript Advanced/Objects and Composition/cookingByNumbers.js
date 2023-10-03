/*•	chop - divide the number by two
•	dice - square root of a number
•	spice - add 1 to the number
•	bake - multiply number by 3
•	fillet - subtract 20% from the number*/

//input=> '32','chop','chop','chop','chop','chop' => output=> 16,8,4,2,1


function solve(...commands){

    //console.log(commands);

    let initial = Number(commands.shift());

    const parser = {
        //chop(){},
        chop: x=> x/2,

        //dice(){},
        dice: x=>Math.sqrt(x),

        //spice(){},
        spice:x=>x+1,

        //bake(){},
        bake:x=>x*3,

       // fillet(){},
       fillet:x=>(x*0.8).toFixed(1)
    }

    for(let command of commands){
        initial = parser[command](initial);
        console.log(initial);
    }

}
solve('32','chop','chop','chop','chop','chop')
console.log('-----------------------');
solve('9','dice','spice','chop','bake','fillet')
