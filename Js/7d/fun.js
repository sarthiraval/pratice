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
    // let fs = prompt("Enter a First name")
    // let ls =  prompt("Enter a Last name")
    // let mn =prompt("Enter a middle name")
    let fs = "sarthi"
    let ls = "raval"
    let mn = "Shaileshkumar"
    let fullname = `${fs}+${mn}+${ls}`
    console.log(fullname)
}
dd()

//function with parmeter
// function name1(why) {}
// name1(why)

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  console.log(areaOfCircle(10)) 
  
  function square(number) {
    return number * number
  }
  console.log(square(10))