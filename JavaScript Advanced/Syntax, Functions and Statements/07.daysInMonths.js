function solve(month,year){

    let res = new Date(year,month,0).getDate();
    console.log(res);

}
solve(1, 2012);

/*
function solve(month,year){
    return new Date(year,month,0).getDate();
}

*/    


/*

function daysInMonth (month, year) {
  return new Date(parseInt(year), parseInt(month) + 1, 0).getDate();
}

//---------- iteraction stuff -----

const byId = (id) => document.getElementById(id);
const monthSelect = byId("month");
const yearSelect = byId("year");

const updateOutput = () => { 
  byId("output").innerText = daysInMonth(monthSelect.value, yearSelect.value)
}
updateOutput();

[monthSelect, yearSelect].forEach((domNode) => { 
  domNode.addEventListener("change", updateOutput)
})
----------------
Month: <select id="month">
  <option value="0">Jan</option>
  <option value="1">Feb</option>
  <option value="2">Mar</option>
  <option value="3">Apr</option>
  <option value="4">May</option>
  <option value="5">Jun</option>
  <option value="6">Jul</option>
  <option value="7">Aug</option>
  <option value="8">Sep</option>
  <option value="9">Oct</option>
  <option value="10">Nov</option>
  <option value="11">Dec</option>
</select>
<br>
Year: <select id="year">
  <option value="2000">2000 (leap year)</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
</select>
<br>

Days in month: <span id="output"></span>

*/
