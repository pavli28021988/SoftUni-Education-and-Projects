/*function solve(){
   //------pop() => removes the last element from the array and returns that value to the caller//

  

    let arr = ['one', 'two', 'three','four', 'five'];

    let popped = arr.pop();

    console.log(arr);

    console.log(popped);

}
solve();*/

/*function solve(arr){

    arr = arr.map(Number);
    console.log(arr);

}
solve(['5','10'])*/


//-------------Push() => push method adds one or more elements to the end of an array and returns the new length of the array-----//


/*function solve(){

    let fruits = ['apple','watermelon','kiwi','banana']

    fruits.push('pineapple', 'avocado')

    console.log(fruits);

}
solve();*/


//----shift()- removes the first element of the array---//

//-----unshift()-adds element to the beginning---//


/*function solve(arr){
    let lengths = arr.map(el => el.length);
    console.log(lengths);

}
solve(['one','two', 'three', 'four'])*/

//MAP()-creates a new array by applying a function to every element

/*function solve(arr){

    let nums = arr.map(Number);
    //console.log(nums);

    let sum = nums.map(el => el + 5);
    console.log(sum);

}
solve(['1','5','10','50','100'])*/

//FILTER() creates a new array from elements matching predicate-predicate is a function returning a boolean value(true or false)

/*function solve(arr){

    let longWords = arr.filter(el => el.length >3);

    console.log(longWords);


}
solve(['one', 'two', 'three', 'four']);*/

/*function solve(arr){

    let positiveNums = arr.filter(el => el > 0);
    console.log(positiveNums);

}
solve([5,10,-100,60,-10,0,80])*/

// SORT() - function sorts the items in an array
// sort() => default behavior-alphabetical order
// sort ((a,b) => a-b) => compare elements as numbers
// sort((a,b) => a.localeCompare(b)); => compare any two characters without regard for the case used

   


/*let names = [ 'Peter', 'George' , 'Mary'];

names.sort(); // ['George', 'Mary' ,'Peter']

//-----------------------------------------------------

let nums = [20,40,10,30,100,5];

nums.sort();   // [10,100,20,30,40,5]

//----------------------------------------------//

let nums = [20,40,10,30,100,5];

nums.sort((a,b) => a-b);  // [5,10,20,30,40,100]

//----------------------------------------------------//

let words = ['nest', 'Eggs','bite', 'Grip', 'jAw'];

words.sort((a,b) => a.localeCompare(b)); // ['bite', 'Eggs', 'Grip', 'jAw', 'nest'];*/


/*function solve(arr){
  let newArray = arr.map((el) => console.log(el));

  //let newArray = arr.map((el) =>{
    //console.log(el);
  //})
  
}
solve([1,2,3,4,5,6])*/

function solve(arr,n){
    if (arr == null){
        return void 0;
    }else if(n == 0){
        return arr[arr.length - 1];
    }else{
        return arr.slice(Math.max(arr.length - n,0));
    }
}

console.log(solve([7, 9, 0, -2],3));



