// Javascript program to find smallest and
// second smallest elements


function solve(arr){
    
    let first = Number.MAX_VALUE,
    second = Number.MAX_VALUE;

    if(arr.length <2){
        return ('Invalid Input')
    }
    //find the smallest element//

    for(let i = 0; i < arr.length;i++){
        if(arr[i] < first){
            
        
            first = arr[i];
        }
    }
    //find second smallest element//

    for(let i =0; i <arr.length;i++){
        if(arr[i] < second && arr[i] > first){
            second= arr[i]
        }
    }

    if(second == Number.MAX_VALUE){
        console.log(`There is no ${second} smallest element\n`);
    }else{
        console.log(`The smallest element is  ${first}  and second  Smallest element is ${second}  `);
    }




}
solve([ 12, 13, 1, 10, 34, 1 ])

//-------------------------------another solution------------------//

/*

function print2Smallest( arr, arr_size) 
{ 
    let i, first, second; 
  
    // There should be atleast two elements //
    if (arr_size < 2) 
    { 
        document.write(" Invalid Input "); 
        return; 
    } 
  
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ; 
    for (i = 0; i < arr_size ; i ++) 
    { 
        // If current element is smaller than first 
        then update both first and second //
        if (arr[i] < first) 
        { 
            second = first; 
            first = arr[i]; 
        } 
  
        // If arr[i] is in between first and second 
        then update second //
        else if (arr[i] < second && arr[i] != first) 
            second = arr[i]; 
    } 
    if (second == Number.MAX_VALUE ) 
        document.write("There is no second smallest element\n"); 
    else
        document.write("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n'); 
} 
  
  
    // Driver program 
      
    let arr = [ 12, 13, 1, 10, 34, 1 ]; 
    let n = arr.length; 
    print2Smallest(arr, n); 
      




*/ 

//--------------Approach 3:A N*log(N) approach using Priority_queue data structure. --------------------------//

/*

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  
  dequeue() {
    return this.values.shift();
  }
  
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  
  get top() {
    return this.values[0].val;
  }
  
  get secondTop() {
    return this.values[1].val;
  }
}
  
const arr = [2, 5, 7, 3, 9, 10, 11, 1];
const pq = new PriorityQueue();//min heap priority_queue
      //adding elements to priority queue
for (let i = 0; i < arr.length; i++) {
  pq.enqueue(arr[i], arr[i]);
}
  
const t = pq.top;// smallest element will be on
    // top of pq
pq.dequeue();
const w = pq.top;
  
console.log("smallest element: ", t);
console.log("second smallest element: ", w);


*/ 

//-------------------------Approach 4: Using list properties---------------------//


/*
function print2Smallest(arr) {
  let lst = []; // list is declared
  if (new Set(arr).size === 1) { // checking length of array is greater than 2 or not
    return [-1, -1];
  }
  lst.push(Math.min(...arr)); // appending small element in new list
  let p = Math.min(...arr); // storing min element
  let c = arr.filter((el) => el === p).length; // counting number of a smallest element
  for (let i = 0; i < c; i++) {
    arr.splice(arr.indexOf(p), 1); // removing all the smallest element
  }
  lst.push(Math.min(...arr)); // appending 2nd smallest element
  return lst;
}
  
// Driver function to test above function
let arr = [12, 13, 1, 10, 34, 1];
console.log(print2Smallest(arr));


*/ 