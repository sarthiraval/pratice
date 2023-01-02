//regular expression = 
// /g  = global mathch searching
// /i = case sentititve
// /m =  multiple wor ke chater find kare 6
//space =  \s/

let qq1 = prompt("Enter  a name") //.replace(/\s/g,"")
let qq2 = prompt("Enter  a name") // .replace(/\s/g,"")
let d = qq1.replace(/\s/g,"") 
let r =qq2.replace(/\s/g,"")

        if( qq1!="" && qq2!=""){
            if(d && r ){
                console.log(d);
                console.log(r);
            }

        }
        else{
            console.log("error");
        }


// let q1 = prompt("Enter  a name").trim().replaceAll(" ","")
// let q2 = prompt("Enter  a name").split(" ").join("")

// console.log(q1);
// console.log(q2);

//charchet set = [aeiou] 
//negetive set = [^aeiou]
// dot = /./g
// let re = "Sarthi"
// let wqwqq =  re.match(/./g)
// console.log(wqwqq);
// range [A-Z], [0-9]

//  \w = word find ([A -E])\w+/g
//  \s  = whitespace remove /\s/g,""
// \S=  not space remove /\S/g,""
// \W = not word find ([A -E])\W+/g
// \d = digit find ([0-4])\d+/g
// \D = not  digit find ([2-4])\D+/g
// \b = word ni position /LO\b\ find postion first thi poistion count karse
// \b = word ni position /\bLo\ find postion last thi poistion count karse
// \u = Find the Unicode character specified by the hexadecimal number xxxx
 
// let text = "HELLO Sarthi,LOOK AT YOUR RACING SKIILS!"; 
// let result = text.search(/LO\b/);
// let resul = text.search(/\bLO/);
// console.log(result);
// console.log(resul);

//[ condiotion ] performance /g
//used for pattern matching or string matching
// [abc] a,b or c
// [^abc] any charchter except a,b,c
// [a-z,A-Z] atoz , A to Z
// [A-Z] A to Z
// [a-z] a to z
//[0-9]

// // n+	Matches any string that contains at least one n
// let n_ = "whyy yyyou don't like me whyyyyyyyyyy"
// let res = n_.match(/y+/g)
// console.log(res);
// // n*	Matches any string that contains zero or more occurrences of n
// let _n =  "whyy yyyou don't like me whyyyyyyyyyy"
// let ress = n_.match(/hy*/g)
// console.log(ress);
// // n?	Matches any string that contains zero or one occurrences of n
// let _n_ =  "whyy yyyou don't like me whyyyyyyyyyy"
// let race = _n_.match(/yy?/g)
// console.log(race);

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
