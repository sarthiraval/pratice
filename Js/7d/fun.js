//function without paramaeter an return
function sq(){
    //let num = parseFloat(prompt("enter a number"))
    let num = 2
    let sq = num * num
    console.log(sq)
 }
 sq()
 
 function sqd(){
    // let num1 = parseFloat(prompt("enter a number"))
    // let num2 = parseFloat(prompt("enter a number"))
    let num1 = 5
    let num2 = 2
    let sq = num1 - num2
    console.log(sq)
 }
 sqd()

function sqe(){
    // let rtt = parseFloat(prompt("enter a number"))
    // let tr = parseFloat(prompt("enter a number"))
    let rtt = 2
    let tr = 2
    let sq = rtt ** tr
    console.log(sq)
}
sqe()
function sqw(){
    // let nu = parseFloat(prompt("enter a number"))
    // let nur = parseFloat(prompt("enter a number"))
    let nu = 8
    let nur = 8
    let sq = nu / nur
    console.log(sq)
}
sqw()
function sqh(){
    // let nm1 = parseFloat(prompt("enter a number"))
    // let nm2 = parseFloat(prompt("enter a number"))
    let nm1 = 2
    let nm2 = 2
    let sq = nm1 + nm2
    console.log(sq)
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
    console.log(fullname);
    console.log(`${fs} ${mn} ${ls}`);
    console.log(fs,mn,ls);
   
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
console.log(areaOfCircler(4));

  function square(number) {
    return number * number
  }
  console.log(square(10))

//function with two parameter

function sum(number1,number2) {

    let sum  = number1 + number2
    //console.log(sum);
   return sum

}
//sum(10,20)
console.log(sum(10,20))

function div(number1,number2){
    let div = number1 / number2
  //  return div
    console.log(div);
}
div(40,2)
//console.log(div(40,2));


function mul(number1,number2){
    let mul = number1 * number2
    return mul
    //console.log(mul);
}
//mul(40,2)
console.log(mul(40,2));


function add(number1,number2){
    let add = number1 + number2
    //return add
    console.log(add);
}
add(40,2)
//console.log(add(40,2));

function number(number1,number2){

let num = number1+ number2
console.log(num);
}
number(40,undefined)

function string(number1,number2){

    let num = number1+ number2
    console.log(num);
    }
    string(+"40",+"45")

function string(number1,number2){

    let num = number1+ number2
    console.log(num);
    }
    string("40",undefined)

function true_false(number1,number2){
    let true_false = number1 + number2
    //return true_false
    console.log(true_false);
}
true_false(true,false)
//console.log(true_false(true,false));

function false_(number1,number2){
    let false_ = number1 + number2
    //return false_
    console.log(false_);
}
false_(false,40)
//console.log(false_(true,false));

function true_(number1,number2){
    let true_ = number1 + number2
    //return true_
   console.log(true_);
}
//console.log(true_(true,40.1))
true_(true,40.1)

function surename(fs,ls) {
    return `${fs} ${ls}`
    // let name = fs + ls
    // console.log(name);
}
console.log(surename("Sarthi","Raval"));
// surename("Sarthi","Raval")

//Function with many parameters
function puradetails(fs,ls,ms,age,Gender){
    return `Firstname : ${fs} \nLastname : ${ls} \nMiddlename : ${ms} \nAge : ${age} \nGender : ${Gender}`
    // let name = fs + ls+ms+age+Gender
    // console.log(name);
}
// puradetails("Sarthi","Shaileshkumar","Raval",21,"male")
console.log(puradetails("Sarthi","Shaileshkumar","Raval",21,"male"));

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
   console.log(totalsum(numberarray));

   function number(){
    for(let j =1;j<=11;j +=2){
        console.log(j)
    }
   }
   number()
   
   let radius = (r) =>{
    let a = 3.14 * r * r
    return a
    }
    console.log(radius(4));


//Function with unlimited number of parameters
//1.Unlimited number of parameters in regular function

function total(){
    let sq = 0
    for(let i = 0;i<arguments.length;i++){
        sq = sq + arguments[i]
    }
    return sq
}
console.log(total(1,2,3,4,5,6));
console.log(total(45,45,45,45,45));
console.log(total(true,true,true,true,true));
console.log(total(false,false,false,false,false));
console.log(total(true,false,true,false,true,false));
console.log(total(15,20,10,null,45,10));
console.log(total(15,20,undefined,45,45,10));
console.log(total("15",20,20,45,45,10));
console.log(total(15,20,20,45,45,"10"));
console.log(total(15,20,20,45,"32",45,10));
console.log(total(15,20,20,45,45,NaN))
console.log(total(15,20,20,45,45,""))
console.log(total(15,15,"",20,45,45,45))

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
console.log(newsws(1,2,3,4,5));
console.log(newsws(45,45,45,45,45));
console.log(newsws(true,true,true,true,true));

let detail = (...dw)=> {
    dw.forEach(e=>console.log(e))
    }
detail("S","W","ds","sd");
let details = (...dw)=> {
    dw.forEach(e=>console.log(e+1))
    }
details(+"10",+"20",+"30",+"40");


//Anonymous Function
const ano = function() {
    console.log("Why")
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
console.log(anos(2));

// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(d){
    console.log(d*d);
})(4)

let spre = (function(d){
    return d * d
})(2)
console.log(spre);

//Arrow Function
//Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences
let fd = f =>{
    return f * f
}
console.log(fd(2))

let d = n => n+n 
console.log(d(4));

let uppesr = ae =>{
let ress =[]
    for (let ele of ae){
        ress.push(ele.toUpperCase())
    }
    return ress
}
//let fds = ['s','sa','sar','sart','sarth','sarthi']
let fds = []
let fdsd = prompt("Enter a number")
for(let i = 0;i< fdsd;i++){
    fds.push(prompt("Enter a String"))
}
console.log(uppesr(fds));

let str = (fs,ls)=>{
    return `${fs} ${ls}`
}
console.log(str("sarthi","Raval"));

let addq = (n1,n2)=>{
    dqqqqq = n1+ n2 
    return dqqqqq

}
console.log(addq(2 ,3));

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

