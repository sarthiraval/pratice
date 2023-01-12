console.log("Callback");
let callback = (s) =>{
    return s ** 2
}
// console.log("callback =",callback(4));

function ab (){
  console.log(1+3);
}

function c(callback,s)
{
    return callback(s) * s;
}
console.log(c(callback,2))

function weather(all,sd){
    console.log(all,sd);
}
function see(ahmedabad,surat){
    weather(ahmedabad,surat)
}
see( "21.00","24.00")

function mydis(valuebro){
    return ("see = ", valuebro)
    // console.log("See = ",valuebro);
}
function markpro (eng,state,eco,acc,ba){

    let tot = eng+state+eco+acc+ba
  return tot
}
console.log(markpro(95,95,95,99,99  , mydis));


let exaicall = [41,51,61,71,81,90,-69,-45,-79]
console.log(exaicall);
let pos = removeNeg(exaicall,(x) => x >= 0)
console.log(pos);

function removeNeg(mynumbers,callre){
    let newarray =[]
    for(let x of mynumbers){
        if (callre(x)){
        newarray.push(x)
        }
    }
    return newarray
}

function dfs (name= 'Sarthi'){
    let ms = `${name}`
    return ms
}
console.log("calling Function with default parameters with return = ",dfs())
console.log("calling Function with default parameters with return =",dfs("Sid"));


function detailss(fs="Sarthi",ls="Raval"){
    let d = ' '
    let fullname =  fs + d +ls
    return fullname
}
console.log("calling Function with default parameters with return = ",detailss());
console.log("calling Function with default parameters with return =",detailss("Sid","Soni"));

console.log("Returing Function");

let level1 = x => {
    let level2 = y =>{
        let level3 = z =>{
            return x+y+z
        }
        return level3
    }
    return level2
}
console.log(level1(2)(4)(4));

//using funcation
let arrayuesere = [10,20,30,40,50,false]
let summ = arr =>{
    let sum = 0
    let callagain = function(nu){
        sum += nu
    }
    arr.forEach(callagain)
    return sum
}
console.log(summ(arrayuesere));

//without funcation
let why = [1,2,3,4,5,6,7,8,9]
let sumagain = aq =>{
    let mul =1
    aq.forEach(function (e){
        mul *= e
    })
    return mul
}
console.log(sumagain(why));

// console.log("Setting time");
// function he(){
//     console.log("setInterval prints assign a value in every second, 1000ms is 1s");
// }
// function hee(){
//     console.log("setTimeout prints assign a value after it waits for 2 seconds.");

// }
// setInterval(he,1000)
// setTimeout(hee,5000)

// console.log("start");
// setTimeout(function dos(){
//     console.log("Callback");
// },1000)
// console.log("end");

console.log("Functional Programming");
console.log("For each");

let sq =1
let n =[1,2,3,4,5,60]
n.forEach(qwq =>console.log(qwq))

let sum =0
let whya = [1,2,3,4,5,6,7,8,9]
whya.forEach(sd => sum += sd)
console.log("total = ",sum);

let mul =1
let mularray =[1,2,3,4,5]
mularray.forEach(mularrayagaain => mul *= mularrayagaain)
console.log("total",mul);

let arrowwithexpiltreturn = ['Ahmedabad','Surat','Baroda','Navsari']
arrowwithexpiltreturn.forEach(ans => console.log(ans.toUpperCase()))

//It takes a callback function with elements, index , array parameter and return a new array
console.log("Map");
let numbermap = [11,12,1,3,46]
let numbermapsqure = numbermap.map(num => num * num)
console.log(numbermapsqure);

let countriesname = ['Ahmedabad','Surat','Baroda','Navsari']
let countriesnam = countriesname.map(names => names.toUpperCase())
console.log(countriesnam);


let sliceuse = countriesname.map(co => co.toUpperCase().slice(0,2))
console.log(sliceuse);
console.log(sliceuse.slice(0,2));

//let usingprompt = prompt("Enter a city")
let spliceuse = countriesname.map(co => co.toUpperCase())
console.log(spliceuse);
console.log(spliceuse.splice(1,2,"Mumbai".toUpperCase()))
console.log(spliceuse);

console.log("filter");
//Filter out items which full fill filtering conditions and return a new array.

const cassr = ["Audi","Mercidies",'Suzuki',"MOMOS","Jagure","BMW","Hummer"]
const sa = cassr.filter((country) =>
  country.includes('di')
)
console.log(sa)

const countriesEndsByia = cassr.filter(countrys => countrys.endsWith('di'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = cassr.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)

  const mark =[
    {name : 'Sarthi',mark: 99},
    {name : 'Janik',mark: 35},
    {name : 'Sid',mark: 80}
    ,{name : 'Moin',mark: 09},
    {name : 'Ganesh',mark: 85},
    {name : 'Harshit',mark: 89}
  ]
  const markGreaterEighty = mark.filter((mark) => mark.mark > 80)
  markGreaterEighty.map(ab => console.log(ab.name))
  console.log(markGreaterEighty);


  //reduce =Reduce takes a callback function
  let reuceinarray = [12,12,31,45,46,78]
  let suma = reuceinarray.reduce((fs,ss) => fs+ss,0)
  console.log(suma);

  //every = Check if all the elements are similar in one aspect. It returns boolean
  const carevery = ["Audi","Mercidies",'Suzuki',"MOMOS","Jagure","BMW","Hummer"]
  let arAllstr = carevery.every(careverys => typeof careverys === "string")
  console.log(arAllstr);
   
  let bollvalueevery = [true,true,true,true]
  let da = bollvalueevery.every(bollvalueever => bollvalueever === true)
  console.log(da);

//find: Return the first element which satisfies the condition
let findass = [25,12,18,45,120,8,2,7]
let resultfind = findass.find(age => age > 100)
console.log(resultfind);

const names = ['s', 'sa', 'sar', 'sarthi']
let findlength  = names.find((name) => name.length == 2)
console.log(findlength);
 
const marks =[
    {name : 'Sarthi',mark: 99},
    {name : 'Janik',mark: 35},
    {name : 'Sid',mark: 80}
    ,{name : 'Moin',mark: 09},
    {name : 'Ganesh',mark: 85},
    {name : 'Harshit',mark: 89}
  ]
  let marking = marks.find(user => user.mark > 80)
  console.log(marking);

  //findIndex Return the position of the first element which satisfies the condition
  const namess = ['janik', 'sid', 'harshit', 'sarthi']
  let findlengths  = namess.findIndex((name) => name.length > 5)
  console.log(findlengths);

  const naess = [145,127,212,82,782,456,100,500]
  const agesa = naess.findIndex((age) => age < 100)
  console.log(agesa);

  //some: Check if some of the elements are similar in one aspect. It returns boolean
  const somename = ['janik', 'sid', 'harshit', 'sarthi']
  let aresometru = somename.some(b =>b === "sarthi")
  console.log(aresometru);
  const bool = [true,true,true,true]
  let aresometrue = bool.some(b =>b === true)
  console.log(aresometrue);

//sort: The sort methods arranges the array elements either ascending or descending order.
//sorting astring   
let alphbate = ["a","aaa","az","ae","aa","ab","ac","ad"]
console.log(alphbate.sort());

//sort numeric
let numbersome = [9.1,4.5,646.1,18,true]
console.log(numbersome.sort()); //[18, 4.5, 646.1, 9.1,true]
numbersome.sort(function(a,b){
    return a- b
})
console.log(numbersome);//[true,4.5, 9.1, 18, 646.1]
numbersome.sort(function(a,b){
    return b- a
})
console.log(numbersome);//[646.1, 18, 9.1, 4.5,true]

//Sorting Object Arrays
 
const sortmarks =[
    {name : 'Sarthi',mark: 99},
    {name : 'Janik',mark: 35},
    {name : 'Sid',mark: 80}
    ,{name : 'Moin',mark: 09},
    {name : 'Ganesh',mark: 85},
    {name : 'Harshit',mark: 89}
  ]
  sortmarks.sort((a,b) =>{
    if (a.mark < b.mark) return -1
    return 0
    })
console.table(sortmarks);

sortmarks.sort((a,b) =>{
    if (b.mark < a.mark) return -1
    return 0
    })
console.table(sortmarks);

sortmarks.sort((a,b) =>{
    if (b.name < a.name) return -1
    return 0
    })
console.table(sortmarks);

sortmarks.sort((a,b) =>{
    if (a.name < b.name) return -1
    return 0
    })
    console.table(sortmarks);


