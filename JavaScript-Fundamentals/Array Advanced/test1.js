
//Write a JavaScript function to check whether an `input` is an array or not.


/*function solve(input){


    if (typeof input === 'object'){
        return true;
    }else{
        return false;
    }


    //console.log(typeof input);

}

console.log(solve('w3resource'));
console.log(solve([1, 2, 4, 0]));*/


function solve(input){

    if (toString.call(input) === "[object Array]"){
        return true;
    }else {
        return false;
    }




}

console.log(solve('w3resource'));
console.log(solve([1, 2, 4, 0]));


/*var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));*/

