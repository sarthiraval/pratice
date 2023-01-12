//function without paramaeter an return
function sq(){
    //let num = parseFloat(prompt("enter a number"))
    let num = 2
    let sqp = num * num
    console.log("function without parameter an return mul",sq)
 }
 sq()
 
 function sqd(){
    // let num1 = parseFloat(prompt("enter a number"))
    // let num2 = parseFloat(prompt("enter a number"))
    let num1 = 5
    let num2 = 2
    let sq = num1 - num2
    console.log("function without parameter an return min",sq)
 }
 sqd()

function sqe(){
    // let rtt = parseFloat(prompt("enter a number"))
    // let tr = parseFloat(prompt("enter a number"))
    let rtt = 2
    let tr = 2
    let sq = rtt ** tr
    console.log("function without parameter an return squre",sq)
}
sqe()
function sqw(){
    // let nu = parseFloat(prompt("enter a number"))
    // let nur = parseFloat(prompt("enter a number"))
    let nu = 8
    let nur = 8
    let sq = nu / nur
    console.log("function without parameter an return div",sq)
}
sqw()
function sqh(){
    // let nm1 = parseFloat(prompt("enter a number"))
    // let nm2 = parseFloat(prompt("enter a number"))
    let nm1 = 2
    let nm2 = 2
    let sq = nm1 + nm2
    console.log("function without parameter an return Sum",sq)
}
sqh()

function dd(){
    // let fs = prompt("Enter a First name").replace(/\s/g,"")
    // let ls =  prompt("Enter a Last name").replace(/\s/g,"")
    // let mn =prompt("Enter a middle name").replace(/\s/g,"")
    let fs = "sarthi"
    let ls = "raval"
    let mn = "Shaileshkumar"
    let fullname = fs+" "+mn+" "+ls
    console.log("function without parameter an return String",fullname);
    console.log(`${fs} ${mn} ${ls}`);
    console.log("function without parameter an return String",fs,mn,ls);
   
}
dd()

//function with parmeter
// function name1(why) {}
// name1(why)

function areaOfCircler(r) {
    //let r = parseFloat(prompt(("Enter a radius number")))
    let pi = 3.14
    let area =  pi * r * r
    //console.log(area);
    return area
  }
//areaOfCircle()
console.log("function with parameter an return Radius",areaOfCircler(4));

  function square(number) {
    return number * number
  }
  console.log("function with parameter an return Squre",square(10))

//function with two parameter

function sum(number1,number2) {

    let sum  = number1 + number2
    //console.log(sum);
   return sum

}
//sum(10,20)
console.log("function with parameter an return Sum",sum(10,20))

function div(number1,number2){
    let div = number1 / number2
  //  return div
    console.log("function without parameter an return Div",div);
}
div(40,2)
//console.log("function with parameter an return div",div(40,2));


function mul(number1,number2){
    let mul = number1 * number2
    return mul
    //console.log(mul);
}
//mul(40,2)
console.log("function with parameter an return mul",mul(40,2));


function add(number1,number2){
    let add = number1 + number2
    //return add
    console.log("function with parameter an return Sum",add);
}
add(40,2)
//console.log("function with parameter an return Sum",add(40,2));

function number(number1,number2){

let num = number1+ number2
console.log("function without parameter an return Undefind",num);
}
number(40,undefined)

function string(number1,number2){

    let num = number1+ number2
    console.log("function without parameter an return Sum String",num);
    }
    string(+"40",+"45")

function string(number1,number2){

    let num = number1+ number2
    console.log("function without parameter an return Sum String and Undefind",num);
    }
    string("40",undefined)

function true_false(number1,number2){
    let true_false = number1 + number2
    //return true_false
    console.log("function without parameter an return boolean",true_false);
}
true_false(true,false)
//console.log(true_false(true,false));

function false_(number1,number2){
    let false_ = number1 + number2
    //return false_
    console.log("function without parameter an return mumber and boolean",false_);
}
false_(false,40)
//console.log(false_(true,false));

function true_(number1,number2){
    let true_ = number1 + number2
    //return true_
   console.log("function without parameter an return boolean and number",true_);
}
//console.log(true_(true,40.1))
true_(true,40.1)

function surename(fs,ls) {
    return `${fs} ${ls}`
    // let name = fs + ls
    // console.log(name);
}
console.log("function with parameter an return two String",surename("Sarthi","Raval"));
// surename("Sarthi","Raval")

//Function with many parameters
function puradetails(fs,ls,ms,age,Gender){
    return `Firstname : ${fs} \nLastname : ${ls} \nMiddlename : ${ms} \nAge : ${age} \nGender : ${Gender}`
    // let name = fs + ls+ms+age+Gender
    // console.log(name);
}
// puradetails("Sarthi","Shaileshkumar","Raval",21,"male")
console.log("function without parameter an return multiple String",puradetails("Sarthi","Shaileshkumar","Raval",21,"male"));

function totalname(params) {
	var num = 0
	for(var u=0; u <= 10; u++){
	     num = num + u;
	}
	console.log("total 1 to 10 = ",num);
}
totalname()

//Function with unlimited number of parameters
function totalsum(arr) {
    let s = 0
    for(let i = 0;i<arr.length; i++){
        s = s + arr[i]
    }
    return s
   }
   const numberarray =[10,490,10,590]
   console.log("Function with unlimited number of with array parameters",totalsum(numberarray));

   numberarray.forEach(function(a,b,c ){
    console.log(a,b,c);
   })

   function number(){
    for(let j =1;j<=11;j +=2){
        console.log("1 to 11 even number",j)
    }
   }
   number()

   function nsumber(){

    for(let j=1;j<=11;j+=2){  

    }

   } 
   // number()
   console.log("Function with unlimited number of parameters",nsumber());

   let radius = (r) =>{
    let a = 3.14 * r * r
    return a
    }
    console.log("Function with unlimited radius of parameters",radius(4));


//Function with unlimited number of parameters
//1.Unlimited number of parameters in regular function

function total(){
    let sq = 0
    for(let i = 0;i<arguments.length;i++){
        sq = sq + arguments[i]
    }
    return sq
}
console.log("number total",total(1,2,3,4,5,6));
console.log("number total",total(45,45,45,45,45));
console.log("boolean total",total(true,true,true,true,true));
console.log("boolean total",total(false,false,false,false,false));
console.log("boolean total",total(true,false,true,false,true,false));
console.log("null total",total(15,20,10,null,45,10));
console.log("undefind total",total(15,20,undefined,45,45,10));
console.log("String total",total("15",20,20,45,45,10));
console.log("String total",total(15,20,20,45,45,"10"));
console.log("String total",total(15,20,20,45,"32",45,10));
console.log("Nan total",total(15,20,20,45,45,NaN))
console.log("String total",total(15,20,20,45,45,""))
console.log("String total",total(15,15,"",20,45,45,45))

//2.Unlimited number of parameters in arrow function
// const ms = (...args) => {
//     // console.log(arguments), arguments object not found in arrow function
//     // instead we use a parameter followed by spread operator (...)
//     console.log(args)
//    }
//ms(1, 2, 3, 4)

const newsws = (...qw) => {
    let sum = 0
    for(const elemn of qw){
        //sum = sum +element
        sum+= elemn
    }
    return sum
}
console.log("Function with unlimited number of parameters number sum",newsws(1,2,3,4,5));
console.log("Function with unlimited number of parameters number sum",newsws(45,45,45,45,45));
console.log("Function with unlimited boolean of parameters",newsws(true,true,true,true,true));

let detail = (...dw)=> {
    dw.forEach(e=>console.log("Function without unlimited string of parameters with object",e))
    }
detail("S","W","ds","sd");
let details = (...dw)=> {
    dw.forEach(e=>console.log("Function with unlimited String sum of parameters",e+1))
    }
details(+"10",+"20",+"30",+"40");


//Anonymous Function
const ano = function() {
    console.log("Anonymous Function","Why")
  }
ano()

//expression function
//Expression functions are anonymous functions.
//After we create a function without a name and we assign it to a variable.
//To return a value from the function we should call the variable.  
let anos = function(d){
      //d += d
     //console.log(d);
   return d + d
}
//anos(2)
console.log("Expression functions are anonymous with return functions",anos(2));

// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(d){
    console.log("Expression functions are anonymous without return functions mul",d*d);
})(4)

let spre = (function(d){
    return d * d
})(2)
console.log("Expression functions are anonymous with return functions",spre);

//Arrow Function
//Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences
let fd = f =>{ return f * f}
console.log("Expression functions are arrow function anonymous with return functions",fd(2))

let d = n => n+n 
console.log("Expression functions are arrow function anonymous without return arrow function functions",d(4));

// let uppesr = ae =>{
// let ress =[]
//     for (let ele of ae){
//         ress.push(ele.toUpperCase())
//     }
//     return ress
// }
//let fds = ['s','sa','sar','sart','sarth','sarthi']
// let fds = []
// let fdsd = prompt("Enter a number")
// for(let i = 0;i< fdsd;i++){
//     fds.push(prompt("Enter a String"))
// }
// console.log(uppesr(fds));

let str = (fs,ls)=>{
    return `${fs} ${ls}`
}
console.log("Expression functions are arrow function anonymous with return arrow function ",str("sarthi","Raval"));

let addq = (n1,n2)=>{
    dqqqqq = n1+ n2 
    return dqqqqq

}
console.log("Expression functions are arrow function anonymous with return arrow  functions",addq(2 ,3));

//Function with default parameters
// function functionName(param = value) {
//     //codes
//   }
  
//   // Calling function
//   functionName()
//   functionName(arg)

function dfs (name= 'Sarthi'){
    let ms = `${name}`
    return ms
}
console.log("calling Function with default parameters with return ",dfs())
console.log("calling Function with default parameters with return ",dfs("s"));


function detailss(fs="Tanvi",ls="Shah"){
    let d = ' '
    let fullname =  fs + d +ls
    return fullname
}
console.log("calling Function with default parameters with return ",detailss());
console.log("calling Function with default parameters with return ",detailss("Siddharth","Soni"));

//let g = parseFloat(prompt("Enter a gravity"))
function sd (value , gravity = 3/*g*/){
    let wei = value * gravity
    //return wei
  console.log("with default parameters without return double value pass",wei);
}
// console.log(sd(100));
// console.log(sd(100,2));
sd(100)
sd(100,2)

// function numbers(){
//     let n1 = parseFloat(prompt("Enter a n1").replace(/\s/g,"")) 
//     let n2 =  parseFloat(prompt("Enter a n2").replace(/\s/g,""))
//     const cal = prompt(`+,-,*,/,**`).trim().replace(/\s/g,"")
//     let result 
//     switch(cal){
//         case  "+" :
//         result = n1 + n2
//         console.log(`${n1} + ${n2} = ${result}` )
//         break

//         case  "-" :
//         result = n1 - n2
//         console.log(`${n1} - ${n2} = ${result}` )
//         break
//         case  "*" :
//         result = n1 * n2
//         console.log(`${n1} * ${n2} =  ${result}` )
//         break
//         case  "/" :
//         result = n1 / n2
//         console.log(`${n1} / ${n2} = ${result}` )
//         break
//         case  "**" :
//         result = n1 ** n2
//         console.log(`${n1} ** ${n2}  = ${result}` )
//         break
//         default:
//             console.log("Invalid any ")
//             break
//     }
// }
// numbers()

