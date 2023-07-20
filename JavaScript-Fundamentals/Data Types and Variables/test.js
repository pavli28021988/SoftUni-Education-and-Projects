/*function solve(age,name){
    console.log(typeof(age));

    console.log(typeof(name));

}
solve(5, 'Todor');*/


/*function solve(){

    let name = 'Todor';

    console.log(name[4]);

    console.log(name[0]);

    console.log(name.length);

}
solve();*/

/*function solve(stringOne,char,stringTwo){

    let result = stringOne.replace('_',char);

    let output = result === stringTwo? 'Matched' : 'Not matched' ;

   
    console.log(output);
}
solve('Str_ng', 'I','Strong')
solve('Str_ng', 'i', 'String')*/


/*function solve(num1,num2,num3){

    let sum = num1 + num2 + num3;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' -Float'
    console.log(sum)
    //let output = sum % 1 === 0 ? sum + ' Integer' : sum + ' Float';
    //console.log(output);

}
solve(9,100,1.1);
solve(100,200,303);*/


//----- everything with value is true and everything without value is false//

 /*function solve(){
  let num = 1;
  if (num){
    console.log(num);//1
  }
}
solve();*/

 /*function solve(){
  let num ;
  if (num){
    console.log(num);
  }else{
    console.log('false') //false;
  }
}
solve();*/
/*-------------------------------*/


/*function solve(num){


    let sum = 0;
    num = num.toString();

    for(let i = 0; i < num.length;i++){
        sum = sum + Number(num[i]);
    }

    let result = sum.toString().includes(9);

    console.log( result ? `${num} Amazing? True` : `${num} Amazing? False`)

    

    

  

}
solve(10)*/
/*--------------------------------*/


function solve(){

  let person = {
    nameFirst: 'John',
    nameLast: 'Moreno',
    age : 35

  };

  person = null;
  console.log(person);
  console.log(typeof (person));

}
solve();


