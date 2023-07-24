/*function solve(){
 let arr = [123456789]
 let arr2 = [1,2,3,4,5,6,7,8,9,]

 let one = arr2[0]

 console.table(arr);
 console.table(arr2);
 console.log(one);

  arr2[4] = arr2[1] + arr2[2]
  console.log(arr2.length);
}
solve();*/

/*function solve(n){

    let arr = ['Monday','Tuesday','Wednesday'];
    let day = arr[n-1];
    console.log(day);

}
solve(2);*/
/*------------------------------------*/
/*adding new elements*/

//1-using PUSH//
/* function solve(){

    let arr = [1,2,3,4,5]
    arr.push(50);

    console.log(arr)

}solve()*/

//2-add element to the end of the array//

// let arr = [1,2,3];
//arr[arr.length] = 40;
//console.log(arr);//[1,2,3,40]

/*function solve(){
 let arr = [1,2,3,4];
 arr[5] = 50;
 arr [-5] =80;
 console.log(arr);
 console.log(arr.length);
 console.log(arr[4]);
 console.log(arr[-5],arr,arr[5]);
 arr.push(100);
 console.log(arr);
 arr[arr.length] = 500;
 console.log(arr);
}
solve()*/


//--------------------------------------//


//check if array contains specified element :

/* let arr = [1,2,3,4];
console.log(arr.incudes(20))//false

console.log(arr.includes(1))//true*/

//create a string from all elements,SEPARATED by a given string:


/* console.log(arr.join(':'))//1:2:3:4

  let words = ["one", "two"];
  console.log(words.join(" - "))// one - two


  */
 //---------------------------------------------//

 //print all element on the consol => For-loop => loop from 1st index[0] to last index (arr.length - 1);

  /*function solve(){
    let capitals = ["Sofia","Washington","London"];

    for (let i =0 ; i <= capitals.length ; i++){
        //console.log(capitals[i]);

        console.log(capitals.toString());
    }
  }
    solve([]);*/


    /*function solve(arr){
        

        let newArr = [...arr];
        let reversed = newArr.reverse()

        console.log(reversed.join(' '));

        

        
        //console.log(arr.join(' '));
    
    }
    solve(['a', 'b', 'c', 'd', 'e']);
    solve(['abc', 'def', 'hig',
    
    'klm', 'nop']);
    solve(['33', '123', '0', 'dd']);*/

    //------------------------------//
    /* for-off loop  */


    /*function solve(){

      let arr = [1,2,3,4,5,6,7,8,9];

      let output = '';

      for (let el of arr){
        output += `${el} `;
      }

      console.log(output);//1 2 3 4 5 6 7 8  9;

    }
    solve()*/
  
