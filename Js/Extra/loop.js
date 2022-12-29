let j =1
for(;j<=10;j +=2){
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
        console.log(j)

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
// if(num1 > num2 && num1>num3){
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
// }

let marks = prompt("Enter a number")
if (marks >= 90 && marks <= 100){
    console.log(marks+"= very good");
}

else if (marks >= 70 && marks <= 90){
    console.log(marks+"=  good");
}
else if (marks >= 60 && marks <= 70){
    console.log(marks+"= small good");
}
else if (marks >= 35 && marks <= 60){
    console.log(marks+"= no good");
}

else if (marks >= 0 && marks <= 35){
    console.log(marks+"= failed");
}


