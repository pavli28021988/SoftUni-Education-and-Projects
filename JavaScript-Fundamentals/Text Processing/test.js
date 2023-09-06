function solve(){

    let text = "Hello" + ", ";
    text += "JS"
    console.log(text);

    let greet = "Hello, ";
    let name = "John";
    let result = greet.concat(name)
    console.log(result);


    function string(){
        let str = "I am JavaScript Developer";
        let text = "Intro to programming";
        let sms = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration. "
        console.log(str.indexOf("Java"));
        console.log(str.indexOf("java"));
        console.log(text.lastIndexOf('o'));
        console.log(str.substring(5,10));

        console.log(sms.replace(".bg",".com"));
    }

    function splittingAndFinding(){

        let text = "I love fruits";
        let words = text.split(' ');
        console.log(words);
        console.log(text.includes("fruits"));
        console.log(text.includes("banana"));

    }
    function trimMethod(){
        let text = " Annoying spaces   ";
        let text1 = 'He passed away';
        let text2 = '010'
        console.log(text1.padEnd(20, '.'));
        console.log(text2.padStart(8,'0'));


        console.log(text.trim());//trim() removes spaces from both ends of a string

        console.log(text.trimStart());
        console.log(text.trimEnd());
    }

    console.log(string());
    console.log(splittingAndFinding());
    console.log(trimMethod());

}
solve()