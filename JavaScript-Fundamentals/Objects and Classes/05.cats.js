function solve(catsData){

    //let cat = [];
     class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;

        }

        meow() {
            console.log(`${this.name}, ${this.age} says Meow`);
        }

     }

     let cats = [];

     for ( let catData of catsData){

        let token = catData.split(' ');

        //console.log(token);

        let catName = token[0];
        let catAge = token[1];

        let myCat = new Cat(catName,catAge);
        cats.push(myCat);

     }
    
     for (let myCat of cats){
        //console.log(myCat);
        myCat.meow();
     }

}
solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);