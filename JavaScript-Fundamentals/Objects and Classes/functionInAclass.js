function solve(){

    class Dog{
        constructor(name){

            this.name = name

        }

        speak( ){

            console.log(`${this.name} says Woof!`);
    
        }
    
    }
    let dog = new Dog('Sparky')
   
    dog.speak();
    //console.log(dog);
    
}
solve()