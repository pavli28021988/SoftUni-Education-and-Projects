function solve(arr){
  let meetings = {};
  for (let el of arr){
    let[weekday,name] = el.split(' ');

    if(meetings.hasOwnProperty(weekday)){
        console.log(`Conflict on ${weekday}!`);
    }else{
        meetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
    }
  }
  for(let [key,value] of Object.entries(meetings)){
    console.log(`${key} -> ${value}`);
  }
}
solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);
solve(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);