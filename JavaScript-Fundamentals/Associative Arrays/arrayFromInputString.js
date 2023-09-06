function solve(input){
  let system = [];

  let items = input.split('\n');
  //console.log(items);

  for(let i = 0; i < items.length;i++){
    let data = items[i].split(', ');
    //console.log(data);

    //let numbers = data[0];
    //let command = data[1];
    //system.push(data[0],data[1]])//[08-30-2018, in.......]

    let item = [];
    item.push(data[0].trim());
    item.push(data[1].trim());


    system.push(item)
  }

 console.log(system);//[Array(2), Array(2), Array(2), Array(2)]
}
solve("08-30-2018, in\n08-29-2018, out\n08-28-2018, in\n08-27-2018, in");
