// [0-9]+ => matches non-empty sequence syntax
//[A-Z][a-z]* => matches a capital + small letters
//[nvj]+ => matches any character that is either n,v or j
//[^abc] => matches any character that is not a,b or c;
//[0-9] => character range: matches any digit from 0-9;
// \w => matches any word character (a-z,A-Z,0-9,_);
// \W => matches any non-word character(opposite of \w);
// \s => matches any white space character;
// \S => matches any non-white space character(opposite of \s);
// \d =>matches any decimal digit(0-9);
// \D => matches any non-decimal character9opposite of \d
// * -matches the previous element zero or more times => \+\d* => +359885976002 a+b => +359885976002 
// + - matches the previous element one or more times => \+\d+ =>  +359885976002 a+b => +359885976002 
// ? - matches the previous element zero or more times => \+\d? => +359885976002 a+b => +3  
// {3} - matches the previous element exactly 3 times => \+\d{3} => +359885976002 a+b => +359
// (subexpression) - captures the matched subexpression as numbered group => \d{2}-(\w{3})-\d{4} -> 22-Jan-2015
// (?: subexpression) defines a non-capturing group => ^(?:Hi|hello),\s*(\w+)$ -> Hi, Peter
// (?<name>subexpression) - defines a named capturing group => (?<day>\d{2})-(?<month>\w{3})-(?<year>\d{4}) -> 22-Jan-2015

// email validator : \w+@[a-z]+\.[a-z]+    ;   [a-z0-9]+@[a-z]+\.[a-z]{2,3}


// RegExp in JS
//let res = /<(\w+)[^>]*>.*?<\/\1>/g
// when the pattern is from another source => let regExp = new RegExp('[A-Za-z]+', 'g')

//----------------------The method test(string)-------------------- 
//=> let text =  'Today is 2015-05-11'; => let regexp = /\d{4}-\d{2}-\d{2}/g;
// let containsValidDate = regexp.test(text); => console.log(containsValidDate); // true




// -----------------------The method match(regexp)-------------------------- => let text = 'Peter: 123 Mark: 456'; -> let regexp = /([A-Z][a-z]+): (\d+)/g;
// -> let matches = text.match(regexp);
//console.log(matches.length); // 2
//console.log(matches[0]); // Peter: 123
//console.log(matches[1]); // Mark: 456



//---------------------------------The method exec(string, text)---------------------------------------------
//->let text = 'Peter: 123 Mark: 456';
//let regexp = /([A-Z][a-z]+): (\d+)/g;
//let firstMatch = regexp.exec(text);
//let secondMatch = regexp.exec(text);
//console.log(firstMatch[0]) // Peter: 123 
//console.log(firstMatch[1]); // Peter
//console.log(firstMatch[2]); // 123



//--------------------------The method replace(regexp, stringReplacement)--------------------------------------------
//let text = 'Peter: 123 Mark: 456';
//let replacement = '999';
//let regexp = /\d{3}/g;
//let result = text.replace(regexp, replacement);
// Peter: 999 Mark: 999


//------------------------------------The method matchAll(regexp) ---------------------------------------------------------------------
//const regexp = /t(e)(st(\d?))/g;
//const str = 'test1test2';
//const array = [...str.matchAll(regexp)];
//console.log(array[0]);
// ['test1', 'e', 'st1', '1', index: 0, input:'test1test2', length: 4]




//-------------------------------The method split(regexp)-----------------------------------------
//let text = '1   2 3      4';
//let regexp = /\s+/g;
//let result = text.split(regexp);
//console.log(result) // ['1', '2', '3', '4'];










