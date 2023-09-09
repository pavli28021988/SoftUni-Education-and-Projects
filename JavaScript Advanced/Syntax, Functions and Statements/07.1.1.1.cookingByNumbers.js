function solve(...param){
    //console.log(param);

    let num = Number(param[0]);
      for(let i = 1; i <param.length;i++){
        if(param[i] === 'chop'){

            num /= 2;
            console.log(num);

        }else if(param[i] === 'dice'){
           num =  Math.sqrt(num);
            console.log(num);

        }else if(param[i] === 'spice'){

            num += 1;
            console.log(num);

        }else if(param[i] === 'bake'){

            num*= 3;

            console.log(num);

        }else if(param[i] === 'fillet'){
            num*=0.80;

            console.log(num.toFixed(1));

        }
      }

}
solve("9", "dice", "spice", "chop", "bake", "fillet")


  





