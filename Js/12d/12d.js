//Regular Expressions:-
// A regular expression or RegExp is a small programming language that helps to find pattern in data

//without flag
let pattern = "l"
let regex = new RegExp(pattern)
console.log("Regex value without flag",regex); //  /l/

//,Number() = 0
//String(),String(""),undefind = /(?:)/
//null = /null
//NaN = /NaN/
//Number = /function Number() { [native code] }/
//Number(12) = /12/
//String = /function String() { [native code] }/
//String("Sarthi") = /Sarthi/
//Boolean = /function Boolean() { [native code] }/
//Boolean() = /false/
//Boolean(12) = /true/

// g = global flag means looking a pattern in whole text
// i =  case insensitive (it search for both lowercase and uppercase)
// mi =  multiline<

//with flag
console.log("with flag");
console.log(new RegExp(/love/gi));

let regx = new RegExp('love','gi')
console.log("Global ,Case-Insentitive",regx);


let az = prompt("enter 10 digits");
const number =  /\(?([0-9]{6})\)?([0-9]{4})/;
 let nu = az.match(number)
if(nu){
    console.log(nu);
    console.log("yes");
}
else{
    console.log("no");
}

