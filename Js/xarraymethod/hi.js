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


//The keys() method returns an Array Iterator object with the keys of an array.
//The keys() method does not change the original array
let fbs  = ["sarthi","Harshit","janik","siddharth"]
let fbas = fbs.keys()

for (let x of fbas) {
  console.log(x);
}
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

