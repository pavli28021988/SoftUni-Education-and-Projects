function solve(year,month,day){
  let date = new Date(year, month - 1 , day + 1);

  //let day = new Date("2023.05.25")
  //console.log(date);
  //console.log(date.toLocaleString("en-US"))
  console.log(date.toLocaleString("bg-BG"))

  console.log(date.toString())
  console.log(date.toDateString());

  console.log(date.toLocaleDateString('de'));

  console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());//(`${date.getFullYear()-${date.getMonth() + 1}-${date.getDate()}}`);

  //console.log(date.getDay());
  //console.log(date.getDate());

  //console.log(date.getMinutes());
  //date.setFullYear()
}
solve(2016,9,30);