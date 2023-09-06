function solve(data){

    let state = data.shift().split("|")
    //console.log(state);

    let index = 0;
    let command = data[index];
    index++;

    while(command !== 'Yohoho!'){
        let tokens = command.split(" ");
        let operator = tokens.shift();
        switch (operator){
            case "Loot":
               for (el of tokens) {
                if (!state.includes(el)){
                    state.unshift(el);
                }
               }
            break;
            case "Drop" :
              let i = Number(tokens[0]) ;
              if( i < 0 || i > state.length){
                command = data[index];
                index++
                continue;
              }
              let element = state.splice(i,1);
              state.push(element[0]);
              
            break;
            case "Steal" : 
            let count = Number(tokens[0]);
            let items = state.splice(-count);
            console.log(items.join(', '));
            break;
            
           
            
        }
        command = data[index];
        index++
       
        
    }

    
    
    if(state.length > 0){
        let sum = 0;
        for (let el of state){
            sum += el.length;
        }

        let avg = sum / state.length;
        
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }else{
        console.log('Failed treasure hunt.');
    }
    
    

}
solve(["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"]);
solve(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);

//---SOLUTION 2-----!!!!//

/*
function treasureHunt(arr) {
  let treasureChestItems = arr.shift().split('|');
 
  while (arr[0] !== 'Yohoho!') {
    let tokens = arr.shift().split(' ');
    let command = tokens.shift();
 
    if (command === 'Loot') {
      while (tokens.length) {
        let item = tokens.shift();
        if (!treasureChestItems.includes(item)) {
          treasureChestItems.unshift(item);
        }
      }
    } else if (command === 'Drop') {
      let index = Number(tokens.shift());
      if (index >= 0 && index < treasureChestItems.length) {
        treasureChestItems.push(treasureChestItems.splice(index, 1));
      }
    } else if (command === 'Steal') {
      let count = Math.min(treasureChestItems.length, Number(tokens.shift()));
      let index = treasureChestItems.length - count;
      let stolen = treasureChestItems.splice(index, count);
      console.log(stolen.join(', '));
    }
  }
 
  if (treasureChestItems.length) {
    let averageTreasureGain = treasureChestItems.reduce((prevSum, item) => prevSum + item.length, 0) / treasureChestItems.length;
    console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
  } else {
    console.log('Failed treasure hunt.');
  }
} */



//--------solution 3-------------//
/*
function treasure(arr) {
    let theTreasure = arr.shift().split('|');
    // let command = arr.shift();
    let line = arr.shift();

    while (true) {

        // let tokens = command.split('')
        let [command, ...items] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command == 'Loot') {
            for (let j = 1; j < items.length; j++) {
                if (!theTreasure.includes(items[j])) { // j !!!
                    theTreasure.push(items[j]);
                }
            }
        } else if (command == ' Drop') {
            let index = Number(items[0]);
            if (index >= 0 && index < theTreasure.length) {
                // let theLoot = theTreasure.pop(index);
                // Removes the last element from an array and returns it
                let theLoot = theTreasure.splice(index, 1);
                theTreasure.push(theLoot)
            }
        } else if (command == 'Steal') {
            let steal = [];
            let count = Number(items[0]);

            //someone steals the last count loot items. 
            //If there are less items than the given count remove as much as there are.

            // if (count < theTreasure.length) {
            //     for (let i = theTreasure.length - count; i < theTreasure.length; i++) {
            //         steal.push(theTreasure[i])
            //     }
            //     console.log(steal.join(', '));
            // }
        }

        line = arr.shift();
    }

    if (theTreasure.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let average = theTreasure.length
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}


*/


