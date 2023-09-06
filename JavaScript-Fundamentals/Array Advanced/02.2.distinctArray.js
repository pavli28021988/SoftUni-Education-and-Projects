function solve(arr){

    //Remove all repeating elements from the array.

    //---method includes()-----


    /*let newArray = [];

    for (let i = 0; i < arr.length;i++){
         if(!newArray.includes(arr[i])){
            newArray.push(arr[i]);
         }
    }

    console.log(newArray.join(' '));*/


    //--method indexOf()------

    /*let newArray = [];

    for(let i =0; i < arr.length;i++){
        if(newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i]);
        }
    }

    console.log(newArray.join(' '));*/

    //--------method filter()--------------

   // return arr.filter((item,index) => arr.indexOf(item) === index);

   //----------method set()---------------//

      //return [...new Set(arr)];

      //--------------------method forEach()--------------//

      /*let newArray = [];

      arr.forEach(i =>{
        if(!newArray.includes(i)){
            newArray.push(i)
        }
      });


      //console.log(newArray);

      return newArray;*/

      //---------------------------method reduce()------------------//

      let newArray = arr.reduce(function (acc,curr){

        if(!acc.includes(curr))
        acc.push(curr);

        return acc;

      },[])

      return newArray

}
console.log(solve([1, 2, 3, 4,4]).join(' '));
solve([7, 8, 9, 7, 2, 3,4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);