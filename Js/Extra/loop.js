let j =1
for(;j<=11;j +=2){
    console.log(j)
}
let i = 0
for (;i <10;i +=2){
        console.log(i)
}

for(let y = 1;;y +=2){
    if(y>10){
        break
    }
        console.log(y)

}
for(let y = 0;;y +=2){
    if(y>10){
        break
    }
        console.log(y)
 }
// let num = prompt("Enter  a number")
// if (num %2 == 0)
// {
//     console.log("even")
// }
// else{
//     console.log("odd");
// }
// if (isNaN(num))
// {
//     console.log("not a number")
// }
// else{
//     console.log("number");
// }

// let num1 = prompt("Enter  a number")
// let num2 = prompt("Enter  a number")
// let num3 = prompt("Enter  a number")
// if(num1 > num2  && num1>num3){
//     console.log(num1+"largest number")
// }
// else if (num2 > num3){
//     console.log(num2+"Largest number")
// }
// else {
//         console.log(num3+"Largest number")
// }

// let num4 = parseFloat(prompt("enter number"))
// let num5 =  parseFloat(prompt("enter number"))
// let d = 0
// let op =  prompt("+*-/**")
// if (num4 != "" && num5 !=""){
// if(op == "+"){
//     console.log(num4  + num5 )
// }
// else if(op == "-"){
//     console.log(num4  - num5 )
// }
// else if(op == "/"){
//     console.log(num4  / num5 )
// }
// else if(op == "*"){
//     console.log(num4  * num5 )
// }
// else if(op == "**"){
//     console.log(num4  ** num5 )
// }
// }
// else{
//     console.log("Number is empty");
// }

// let year = parseFloat(prompt("enter number"))
// if((year%4 == 0) && (year%100 !=0 )||year%400 == 0){
//     console.log("year = " + year)
// }
// else{
//     console.log("year is not = "+year)
//}


let q1 = prompt("Enter  a name").trim().replaceAll(" ","")
let q2 = prompt("Enter  a name").split(" ").join(" ")

console.log(q1);
console.log(q2);

let r_s= {sname:46,sanmae :46}
console.log(r_s);
console.log(typeof r_s);
let is = JSON.stringify(r_s) 
console.log(typeof is);
console.log("Object Type of conversionto String after type of = "+ typeof is);


let r__s= {"sname":"46","sanmae" :"46"}
let i__s = String(r__s)
console.log(typeof rq_s);
console.log("Object Type of conversionto String after type of = "+ i__s);


let q__s= ["dsa",1,"dsf","d"]
console.log(q__s);
let qq__s = toString(q__s)
console.log("Object Type of conversionto String after type of = "+ q__s);



let ary1 = [1,2,3]
let ary2 =[1,2,3]
const erging =ary1 + ary2
console.log("number",typeof erging);

let arry1 = ["df","d","df"]
let arry2 =["ds","dds","sd"]
const merging =arry1 + arry2
console.log("number",typeof merging);

let meing = ["df","d","df"]
console.log("number",typeof meing);

const aszq= Array + Array
console.log("number",typeof aszq);


const aszqqqqq= Number + Number
console.log("number",typeof aszqqqqq);

const qaszqqqqq= 10 + 10
console.log("number",typeof qaszqqqqq);

const aszqq= Object + Object
console.log("number",typeof aszqq);

const szqq= {age:21,speed:200,hight:3.5}
console.log("number",typeof szqq);

let obj1 = {age:21,speed:200,hight:3.5}
let obj2 =  {age:21,speed:200,hight:3.5}
const rging =obj1 + obj2
console.log("number",typeof rging);

let ry1 =  {"age":'21',"speed":"200","hight":"3.5"}
let y2  =  {age:21,speed:"200",hight:"3.5"}
const mering =ry1 + y2
console.log("number",typeof mering);


