function solve(year,month,day){
    /*let date = new Date(year,month - 1,day);
    let previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    let res = previous.toString();
    res = res.split(' ').slice(0,4).join(' ');
    console.log(res);
    //console.log(date);*/
//----------------------------------------------------------//
    /*let date = new Date(year,month - 1 , day);
    date.setDate(date.getDate() - 1);
    let res = date.toString();
    res = res.split(' ').slice(1,4).join('-');
    console.log(res);*/
    
    let myDate = new Date(year,month,day);

    myDate.setDate(myDate.getDate() - 1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()}`);


}
solve(2016, 9, 30);
solve(2015, 5, 10)
solve(2016,10,1)