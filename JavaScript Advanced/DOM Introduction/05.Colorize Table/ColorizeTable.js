function colorize() {
    let rows = document.querySelectorAll('table tr');
    let index = 0;

    for(let el of rows){
        index++;
        if(index % 2 === 0 ){
            el.style.background = 'teal';
        }
    }
}

// solution 2------------------------//
/*
  function colorize(){
    let tableRows = document.querySelectorAll('table tr');


    for(let i = 0; i < tableRows.length;i++){
        if(i % 2 === 1){
            tableRow[i].style.backgroundColor = 'teal'
        }
    }
  }


*/ 