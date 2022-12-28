let car = [
    {
        "Firstname" : "Sarthi",
        "Middlename":"Shaileshkumar",
        "Lastname" : "Raval",
        "age" : "14",
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : {
            "phonenumber" :{
                 "VI":"60701",
                 "Airtal": "51141350",
                 "JIO" : "13072322"
            }
        },
        "Address": {
         
                    "City_name": "Rajkot",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"    
        }
    }
    , {
        "Firstname" : "Siddhaarth",
        "Middlename":"Harshadbhai",
        "Lastname" : "Soni",
        "age" : "14",
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : {
            "phonenumber" :{
                 "VI":"9726760",
                 "Airtal": "635350",
                 "JIO" : "972322"
            }
        },
        "Address": {
         
                    "City_name": "Rajkot",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
        }
    }
]
console.log(car)



let arrs =[]
console.log(arrs) //null


let arr = new Array()
console.log(arr) //null


let ar = Array(8)
console.log(ar) //[empty × 8]

let arw = Array("AS")
console.log(arw) //[empty × 8]

let aa ='JavaScript'
console.log("aa nu split :",aa.split(''))

let as = 'BMW,Jagure,Honda,Mercedece,Skoda,Kiw'
console.log("as nu split :",as.split(','))

let sa = 'I love Racing.I love also Android java Coding.But Android java code like more than Racing'
console.log("sa nu word split kare 6 :",sa.split(" "))

let sas = ["jk",10,"ds","dsd","sddssds",15,"gg"]
let sasas = ["ss","sad"]
let sasasa =['ds']
console.log("sas print thase :",sas)
console.log("sasas print thase :",sasas)
console.log("sasasa print thase:",sasasa)
console.log("sas nu :",sas.length);
console.log("array nu index find :",sas[1])
console.log("sre print thase number kare 6 :",sas.length -1)
console.log("array nu index find -length no use karine string kare:",sas[sas.length -1])
console.log("array nu index find :",sas[0]== "jk") // t  or f
console.log("sre print thase :",sas)
console.log("array nu index find karine value change kar 6 : ",sas[1] = 17 )
console.log("sre print thase :",sas)

console.log("with lentgh  wade change",sas[sas.length - 1]= 'Jaguare')
console.log(sas)
let saaaas = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log("finding in value with Indexof",saaaas.indexOf("ds"))  // 2
console.log("finding value with Indexof",saaaas.indexOf("jk"))  // 

//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
//Check items in a list
let sarthi = ["jk",10,"ds","dsd","sddssds",15,"gg"]
if(sarthi.indexOf(10) == 1 ){
    console.log("use == This is write")
}
else{console.log("use == This is wrong")}

if(sarthi.indexOf("gg") === -1 ){
    console.log("use === This is write")
}
else{console.log("use === This is wrong")}

if(sarthi.indexOf("gg") == -1 ){
    console.log("use == This is write")
}
else{console.log("use == This is wrong")}

//Check items in a list
if(sarthi.indexOf("ds")){
    console.log("This is write")
}
else{console.log("This is wrong")}


sarthi.indexOf("ds")
?console.log("This is write")
: console.log("This is wrong")

sarthi.indexOf("gg")  === -1
?console.log("This is write")
: console.log("This is wrong")


sarthi.indexOf("gg")  == -1
?console.log("This is write")
: console.log("This is wrong")

let sarthid = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(sarthid.indexOf("dsd"))
console.log(sarthid.indexOf("dd"))

//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
let arthi = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(arthi)
console.log(arthi.lastIndexOf("gg"))
console.log(arthi.lastIndexOf("sd"))
console.log(arthi[arthi.lastIndexOf("gg")])
console.log(arthi[arthi.lastIndexOf("sd")])
//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
let athi = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(athi[0])
console.log(athi)
console.log(athi.includes("gg"))
console.log(athi.includes(10))
console.log(athi.includes("sdsass"))

//Array.isArray:To check if the data type is an array, return in true and false
let ath = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(ath)
console.log(Array.isArray(ath)) //array 6 ke nhi te chek kare 6

//cheking object
let ah = 100
console.log(Array.isArray(ah))
console.log(Object.isFrozen(sasas))
console.log(Object.isFrozen(ah))//object 6  ke nhi teni mate
let burki = {name : "sas"}
console.log(burki)
Object.freeze(burki)
console.log("Ero////",Object.isFrozen(burki));

//toString:Converts array to string
let w = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(w)
console.log(w.toString())
let aw = ["jk",10,"ds","dsd","sddssds",15,"gg"]
let bw= aw.toString()
console.log(typeof bw)
let a = 12;
let b= a.toString()
console.log(typeof b)
//join: It is used to join the elements of the array,
//the argument we passed in the join method will be joined
//in the array and return as a string
let ws = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(ws)
console.log(ws.join("   "))
console.log(ws.join(".,"))
console.log(ws.join("#"))

//Slice array elements
//Slice: To cut out a multiple items in range.
//It takes two parameters:starting and ending position. 
//It doesn't include the ending position.
let rs = ["ds","dad","mother","son","grandmother",45,54]
console.log(rs.slice())
console.log(rs.slice(0))
console.log(rs)
console.log(rs.slice(2,rs.length))
console.log(rs)
console.log(rs.slice(2)) //['mother', 'son', 'grandmother', 45, 54]
console.log(rs)
console.log(rs.slice(1,4))
console.log(rs)

//Splice: It takes three parameters:1.Starting position,
//2.number of times to be removed 3.number of items to be added.
//The splice() method can be used to add new items to an array.
let rss = ["ds","dad","mother","son","grandmother",45,54]
console.log(rss)
console.log(rss.splice()) // // -> remove all items
console.log(rss.splice(2)) //['mother', 'son', 'grandmother', 45, 54]
console.log(rss) // 1['ds', 'dad']
console.log(rss.splice(0, 1))
console.log(rss)// 1 ['dad']
console.log(rss.splice(2, 2, "sa", "sa"))
console.log(rss) //(3) ['dad', 'sa', 'sa']



let ss = ["ds","dad","mother","son","grandmother",45,54]
console.log(ss)
//The pop() method removes (pops) the last element of an array.
//The pop() method changes the original array.
//The pop() method returns the removed element.

console.log(ss.pop()) //out ending
console.log(ss)

//The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.
let dx = ss.push("Kissawi");
console.log(dx) //add ending
console.log(ss)
console.log(ss.shift()) //remove first element
console.log(ss)
console.log(ss.unshift("sas"))  //add first element
console.log(ss)
console.log(ss.sort())
console.log(ss.reverse())


//Array of arrays
//Array can store different data types including an array itself.
//Let us create an array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 4, 9]]
console.log(arrayOfArray[0])
console.log(arrayOfArray)
const arrayOfArrays =  [firstNums,secondNums ]
console.log(arrayOfArrays)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1])
const frontEnsd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
document.getElementById("demo").innerHTML = frontEnsd.toString();



//Arrays are used to store multiple values in a single variable. 
//This is compared to a variable that can store only one value.
//Each item in an array has a number attached to it, called a numeric index, that allows you to access it.
//In JavaScript, arrays start at index zero and can be manipulated with various methods.

let s = ["sarthi","Harshit","janik","siddharth"]
let d =["moin","ganesh",45,14]
let ds = ["pratik","parshav",14,"rohit"] 
let dss = ["pratik",[47,152],"parshav",14,"rohit"] 

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
let concatone = s.concat(d)
let concattwo = s.concat(d,ds)
let concatthree = s.concat(d,ds,dss)
console.log(concatone)
console.log(concattwo) 
console.log(concattwo.length) 
console.log(concatthree) 
console.log(concatthree.length) 

//The constructor property returns the function that created the Array prototype.
let f  = ["sarthi","Harshit","janik","siddharth"]
let con = f.constructer
console.log(con)

//reduce() method in JavaScript is used to reduce the array to a single value
// and executes a provided function for each value of the array (from left-to-right)
// and the return value of the function is stored in an accumulator.
// Syntax = array.reduce(function(parameter), arguments)
//parameter is a named variable passed into a function.
//arguments is an Array -like object accessible inside functions that contains the values of the arguments passed to that function

function Emp(name, developer, number, marks = []) {
  this.name = name;
  this.developer = developer;
  this.number = number;
  this.marks = marks;
  this.sum = function() {
    return this.marks.reduce((ss, s) => s + ss, 0) 
  }
}
let Emp1 = new Emp("Sarthi", "React Native", 6351141350, [2,3,5]);
console.log(Emp1)
console.log(Emp1.sum())

// The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
//array.copyWithin(target, start, end)
let faa  = ["sarthi","Harshit","janik","siddharth"]
console.log(faa.copyWithin(2, 0))
let fa  = ["sarthi","Harshit","janik","siddharth"]
console.log(fa.copyWithin(2,0,2))

//The entries() method returns an Array Iterator object with key/value pairs.
//The entries() method does not change the original array.
let fb  = ["sarthi","Harshit","janik","siddharth"]
let fba = fb.entries()
for (let x of fba) {
  console.log(x);
}

//The every() method executes a function for each array element.
//The every() method returns true if the function returns true for all elements.
//The every() method returns false if the function returns false for one element.
//The every() method does not execute the function for empty elements.
//The every() method does not change the original array

let fc  = [1,2,3,4]
function name(age) {
    return age < 12
}
let fca = fc.every(name)
console.log(fca)

let fcc  = [1,2,3,4]
function names(age) {
    return age > 12
}
let fcb = fcc.every(names)
console.log(fcb)


//The fill() method fills specified elements in an array with a value.
//The fill() method overwrites the original array.
//array.fill(value, start, end)
//Start and end position can be specified. If not, all elements will be filled.
let fd  = ["sarthi","Harshit","janik",14]
let fda = fd.fill(14)
console.log(fda)//[14, 14, 14, 14]
let fdes  = ["sarthi","Harshi","janik",14,15,46,5]
let fdbs = fdes.fill("Harshit",1)
console.log(fdbs) //
let fde  = ["sarthi","Harshit","janik",14,15,46,5]
let fdb = fde.fill("Harshit",1,3)
console.log(fdb) //

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
let fg  = [15,14,1,5,8,9,8,5,14,10,8,10]
function febd(age){
    return  age <= 10
}
let fga = fg.filter(febd)
console.log(fga)



// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
let fe  = [15,14,5,8,9,8,5,14,48,8,89]
function feb(age){
    return  age < 10
}
let fea = fe.find(feb)
console.log(fea)

let fae  = [15,14,15,18,29,18,25,14,48,18,89]
function feba(age){
    return  age < 10
}
let faea = fae.find(feba)
console.log(faea)

// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

let ff  = [15,14,1,5,8,9,8,5,14,48,8,89]
function febs(age){
    return  age > 20
}
let ffa = ff.findIndex(febs)
console.log(ffa) //position of array

let fddsdsd = ff[ff.findIndex(febs)]
console.log(fddsdsd); //value

let ffb  = [15,14,1,5,8,9,8,5,14,48,8,89]
function febsa(age){
    return  age > 20
}
let ffac = ffb.findIndex(febsa)
console.log(ffac)

//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.
let fh  = [15,14,1,5,8,9,8,5,14,48,8,89]
fh.forEach(e =>{
    console.log(e+10)
})


let sahisdghsj = [65, 44, 12, 4];
sahisdghsj.forEach(se=>console.log(se*2))

let kl  = ["sarthi","Harshit","janik",14,15]
kl.forEach(e=>console.log(e+2))
kl.forEach(e=>console.log(e*2))

//The Array.from() method returns an array from any object with a length property.
//The Array.from() method returns an array from any iterable object.
// Array.from() is a static property of the JavaScript Array object.
// You can only use it as Array.from().
// Using x.from(), where x is an array will return undefined.
let  frw = Array.from("ABCDEFG")
console.log(frw)
let  frwa = Array.from("ABCDEFG65464")
console.log(frwa)

//The keys() method returns an Array Iterator object with the keys of an array.
//The keys() method does not change the original array
let fbs  = ["sarthi","Harshit","janik","siddharth"]
let fbas = fbs.keys()

for (let x of fbas) {
  console.log(x);
}

//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
//map() does not execute the function for empty elements.
//map() does not change the original array.

let per = [4,9,64,49,36]
let sq = per.map(Math.sqrt)
console.log(sq)


let pers = [4,9,64,49,36]
let sqd = per.map(hiklklk)
function hiklklk(ssssd) {
    return ssssd +10
}
console.log(sqd)

let persons = [
  {firstname : "sarthi", lastname: "raval"},
  {firstname : "moin", lastname: "rangrez"},
  {firstname : "harshit", lastname: "kapadia"}
];


function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

console.log(persons.map(getFullName))


//prototype allows you to add new properties and methods to arrays.
//prototype is a property available with all JavaScript objects.
//The JavaScript prototype property allows you to add new properties to object:
// let fbp  = ["sarthi","Harshit","janik","siddharth"]
// Array.prototype.dsss = function(){
//     for(let i = 0;i<this.length; i++){
//         this[i] = this[i].toUppercase()
//     }
// }
// let r=fbp.dsss()
// console.log(r)


function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eyecolor;
}

let x = Person.prototype.nationality = "English";
console.log(x);

//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not execute the function for empty array elements.
//The reduce() method does not change the original array.

let ars = [470,9,64,49,36]
let aes = ars.reduce(lllll)
function lllll(total,jp) {
      return total - jp;
}
console.log("left to right :",aes)


//The reduceRight() method executes a reducer function for each array element.
//The reduceRight() method works from right to left.
//The reduceRight() method returns a single value: the function's accumulated result.
//The reduceRight() method does not execute the function for empty elements.

let qrs = [4,9,64,49,36]
let aees = qrs.reduceRight(lllll)
function lllll(total,jp) {
      return total - jp;
}
console.log("right to left :",aees)

//The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

let qsrs = [4,9,64,49,36]
let us = qsrs.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(us);

let qsrso = [4,9,4,7,6]
let uso = qsrso.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(uso);

//The valueOf() method returns the array itself.
// The valueOf() method does not change the original array.
// fruits.valueOf() returns the same as fruit
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const myArrays = fruitss.valueOf();
console.log(myArray)
console.log(myArrays)

//filter upar map lage but map upar filter na lage
//reducer 1 j data apse //filter ma badho data aave
//map ma user input ape te output aave
