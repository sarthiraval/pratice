//if
if(2<3){
    console.log("true")
}

let sd = true
if (sd){
    console.log("false")
}

//if-else 
if(12<3)
{
    console.log("true")
}
else{console.log("false")}

let sds = false
if (sds){
    console.log("true")
}
else{console.log("false")}

//if-elseif-else
let a =10
if(a>=12){
    console.log(a+">=false")
}
else if(a>=12){
    console.log(a+">=false")
}
else if(a>=12){
    console.log(a+"==true")
}
else if(a!=10){
    console.log(a+"===true")
}
else{
    console.log(a)
}


let sa = "Red"
if(sa==""){
    console.log(sa+"==false")
}
else if(sa=="Green"){
    console.log(sa+"==false")
}
else if(sa=="Blue"){
    console.log(sa+"==false")
}
else if(sa=="White"){
    console.log(sa+"==false")
}
else{
    console.log("print pls sa value =",sa)
}


let r_s= {sname:"fs"}
let i_s = toString(r_s)
console.log("Object Type of conversionto String after type of = "+ i_s);


let num1 = parseFloat(prompt("num1").trim().replace(" ",""))
let num2 = parseFloat(prompt("num2").trim().replace(" ",""))
let cals = prompt("+,/,-,*,**").trim()
let res
if(cals == "+" )  {
    res = num1 + num2
}
else if(cals == "-"){
    res = num1 - num2
}
else if (cals == "*"){
    res = num1 * num2
}
else if (cals == "/"){
    res = num1 / num2
}
else{
    res = num1 ** num2
}
console.log(`${num1} ${cals} ${num2} = ${res}`);

// let li = prompt("Enter a name").trim().replace(" ","")
// console.log(li);

// //switch
// const nu1 = parseFloat(prompt("Num").trim())
// const cal = prompt(`+,-,*,/,**`).trim()
// const nu2 = parseFloat(prompt("Num").trim())
// let result 
// switch(cal){
//     case  "+" :
//        result = nu1 + nu2
//        console.log(`${nu1} + ${nu2} = ${result}` )
//        break

//     case  "-" :
//        result = nu1 - nu2
//        console.log(`${nu1} - ${nu2} = ${result}` )
//        break
//     case  "*" :
//        result = nu1 * nu2
//        console.log(`${nu1} * ${nu2} =  ${result}` )
//        break
//     case  "/" :
//        result = nu1 / nu2
//        console.log(`${nu1} / ${nu2} = ${result}` )
//        break
//     case  "**" :
//        result = nu1 ** nu2
//        console.log(`${nu1} ** ${nu2}  = ${result}` )
//        break
//     default:
//           console.log("Invalid any ")
//           break
// }