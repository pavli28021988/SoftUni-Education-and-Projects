function solve(country){

    if (country === 'USA' || country === 'England'){
        console.log('English');
    }else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico'){
        console.log('Spanish');
    }else{
        console.log('unknown');
    }

}
solve('USA');
solve('England');
solve('Spain');
solve('Argentina');
solve('Mexico');
solve('Canada');
solve('Bulgaria');
solve('Russia');