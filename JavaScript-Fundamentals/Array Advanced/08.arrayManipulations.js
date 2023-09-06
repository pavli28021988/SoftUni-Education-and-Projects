function solve(commands){

    let arr = commands.shift()
    .split(' ')
    .map(Number);
    //console.log(arr);

    //console.log(commands);

    for (let i = 0; i < commands.length;i++){

        let [command, firstNum,secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command){
            case 'Add': add(firstNum)          ;break;
            case 'Remove':  remove(firstNum)         ;break;
            case 'RemoveAt': removeAt(firstNum)          ;break;
            case 'Insert':   insert(firstNum,secondNum)        ;break;
        }

    }

    function add(el){  //To add an element at the end, use push()

        arr.push(el);

    }


    function remove(num){  //To remove all occurrences of a particular element from the array, you can use filter()

       arr =  arr.filter(el => el !== num);

    }

    function removeAt(index){ //To remove or insert at an index, you can use splice()
         arr.splice(index,1);
    }

    function insert(num,index){

        arr.splice(index,0,num)

    }

    /* 
    

    Note: Removing elements with splice() receives two parameters:

      · Start Index

      · Count of elements you want to remove

    Note: Inserting elements with splice() receives three parameters:

    · Start Index

    · Count of elements to remove – if none enter 0

    · Elements to insert at that position
    
    
    */


    console.log(arr.join(' '));

   

}
solve(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
solve(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);