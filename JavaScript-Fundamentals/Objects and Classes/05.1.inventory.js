function solve(arr){

    let heros = [];

    for (let heroInfo of arr){
        let [name,level,items] = heroInfo.split(' / ');

        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }
        heros.push(currentHero);
    }

    

    let sortedByLevel = heros.sort((a,b) => a.level - b.level);

    sortedByLevel.forEach((el) =>{
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })

}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);
solve([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ]);