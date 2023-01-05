// global
h = "sarthi"
console.log(h)

h ="I love Coding"
console.log(h);

q = 2+3
w = undefined + 2
e = NaN + 2
t = true + 2
r = Number + 2
yqs = "v"+ true
console.log(q,w,e,t,r,yqs);

yq = "v"+ undefined
wq = undefined - 2
eq = NaN - 2
tq = true - 2
rq = Number - 2
dq = "v" + 1
console.log(wq,eq,tq,rq,yq,dq);

//global object
console.log(globalThis === globalThis.globalThis); // true
console.log(window === window.window); // true
console.log(self === self.self); //true
console.log(frames === frames.frames); // true
// console.log(global === global.global);// false

a = 'Race' // one type of window object
b = "love" // this is global scope variable and found in th window
{
    console.log(a,b);// run abble
}
function scopedetils(){
    console.log(a,b);//  not a run abble
    
}
console.log(a,b); // run abble
if(true){
    console.log(a,b);// run abble
}

// global 
let aqa = 10 // global scope
let ab = 20 // global scope
let c = aqa +ab
function tt(){
    console.log(ab, aqa);
    let aa = 20
    let ba = 30
    let c = aa + ba
    let d = aa+ba+aqa+ab
    console.log(c,d);
}
tt()
console.log(c);


// local
let re = 50
let s = 20
let sas = re +s
function ttt(){
    console.log(re,s,sas);
    let value = false
    if(true){
        let s = "Sarthi"
        let re = 20
        let res= 30
        let dq = re + res + s
        value = !value
        console.log(s,re,res,dq,value,sas);
    }
    console.log(re,s);
}
ttt()
console.log(re,s);

//A variable declared with var only scoped to function but variable declared with let or const is block scope
//(function block, if block, loop block, etc). 
//Block in JavaScript is a code in between two curly brackets ({}).

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  letsLearnScope()
  if (true){
    var gravity = 9.81
    console.log(gravity)
  }
  console.log(gravity)  
  
  for(var i = 0; i < 3; i++){
    console.log(i) 
  }
  console.log(i)


//In ES6 and above there is let and const, 
//so you will not suffer from the sneakiness of var. 
//When we use let our variable is block scoped and it will not infect other parts of our code.
function letsLearnScope() {
  const gravity = 9.81
  console.log(gravity)
}
if (true){
  const  gravity = 9.81
  console.log(gravity) 
}
for(let i = 0; i < 3; i++){
  console.log(i) 
}

//global , fuction,block
console.log("global,fuction,block");
var dsaaa = "sd"
let dsasa = "5"
const popo ="DS"
console.log(dsaaa,dsasa,popo);
{
    var sqq = 's';
    let ss = 'ss';
    const sss = 'sss';
    var qq = 4
    let w = 4
    const e = 5
    console.log(h)
    console.log(e);

    console.log(dsaaa,dsasa,popo);

    console.log(sqq);
   // console.log(e++);
    console.log(qq++);
    console.log(w+2) 

    console.log(ss);
    console.log(sss);
}
function name() 
{
  console.log(dsaaa,dsasa,popo);
  //console.log(e);

    {
    var a = 'Sarthi';
    let sqq = 'Shaileshkumar';
    const c = 'Raval';
    console.log(a);
    console.log(sqq);
    console.log(c);
    console.log(h)

    var xs = 45
    let ds =45
    console.log(qq++);
    console.log(xs+2)
    console.log(ds+2)
 
    //c++
    // console.log(ss);
    // console.log(sss);
    }
    console.log("Outside block")
    console.log(a);
    console.log(sqq);
    console.log(e); //NaN
    console.log(xs);
  console.log(dsaaa,dsasa,popo);

    //console.log(ss);
    //console.log(sss);
}
name()

// Getting values from an object
// We can access values of object using two methods:
// using . followed by key name if the key-name is a one word
// using square bracket and a quote
let fy = {}
console.log(fy);

const shape= {
    1 : "reactangle",
    2 : "circle",
    3 : "tringle"
}
console.log(shape);


let car = 
    {
        "Firstname" : "Sathi",
        "Middlename":"Shaileshkumar",
        "Lastname" : "Raval",
        "age" : 14,
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : [
                 "VI",
                 "Airtal",
                 "JIO" 
        ]
        ,
        createmate : function(){
          console.log(`My Favourite ${this.bike}. 
          \nI pray this god ${this.god}
        \nMy Ideal is ${this.myIdeal}`);
        }
        ,
    getfs : function(){
       return `${this.Firstname} ${this,this.Middlename} ${this,this.Lastname}`
    }
     

    }

console.log(car);
console.table(car);

// dot nottation
console.log(car.Firstname);
console.log(car.Lastname);
console.log(car.Middlename);
console.log(car.getfs);
console.log(car.age);
// console.log(car.location)  undefined

//squre brackers 
console.log(car['Firstname']);
console.log(car['Lastname']);
console.log(car['Middlename']);
console.log(car['getfs']);
console.log(car['age']);
// console.log(car ['location']) undefind

car.nationality = 'Indian'
car.age = 54
car.title ="React Native Developer"
car.phone.push('BSNL')
car.phone.push('MTNL')
car.MyIdeal = "My Father"
car.isMarried = false

car.funs = function(){
    let thiss = this.phone
    .splice(0,this.phone.length - 1)
    .join(', ')
    console.log(thiss);

  let splices = this.phone.splice(this.phone.length -1)[0]
  console.log(splices);
  let skills = `${thiss} ${splices}`  
  let fname = this.getfs()
  let sfs = `${fname} is a ${this.title} \nHe is a ${this.nationality} 
  \nI Owner of this companys ${skills}`
  return sfs

}
console.log(car.funs());

// object method
console.log( "object method");

//Object.assign: To copy an object without modifying the original object

let copuperson = Object.assign({},car)
console.log(copuperson);

let copuperso = Object.assign({why : "why"},car)
console.log(copuperso);



//Object.keys: To get the keys or properties of an object as an array
let keys = Object.keys(car)
console.log(keys);

//Object.values:To get values of an object as an array
let values = Object.values(car)
console.log(values);

//Object.entries:To get the keys and values in an array
let entiress = Object.entries(car)
console.log(entiress);
let entress = Object.entries(car)[2]
console.log(entress);

const obj = { 1: 'marrc', 2: 'sort', 3: 'carry' };  
console.log(Object.entries(obj)[2]);

// key has a declaration for a number to a Sorting output
const obj2 = { 10: 'arvind', 20: 'rahul', 7: 'Ankit'};    
console.log(Object.entries(obj2)[2]);  
console.log(Object.entries(obj2)[2])

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copuperson.hasOwnProperty('Firstname'));
console.log(copuperson.hasOwnProperty('score'));

//delete
delete car.hoobies  
console.log(car);


// channge
car['age'] = 21;
console.log(car);


//Object.Create :- The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object
const creates = Object.create(car)
creates.bike = "Pulsar"
creates.god = ["Mahadev","Ashapuri Ma","Chamunda Ma"]
creates.createmate()

console.table(car);

//Object.defineProperties()
//Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object.
//Syntax = Object.defineProperties(obj, props)
// Obj: The object on which to define or modify properties.
// Props: An object whose own enumerable properties constitute descriptors for the properties to be defined or modified.
//value = The value associated with the property
//Return:This method reruns an object that was passed to the function
const op ={}
Object.defineProperties(op,{
  Medicines1 :{
    value : "445",
    value : 21,
    writable : true,
    writable :false
  },
  Medicines2:{
    value : "45",
    value : 21,
    writable : true,
    writable :false
  }
})
console.log(op.Medicines1,op.Medicines2);

// Object.defineProperty()
// The Object.defineProperty() method defines a new property directly on an object and returns the object. 
//To change the flags, we can use Object.defineProperty.
//We cannot change it back, because define property doesn?t work on non-configurable properties.
//Syntax = Object.defineProperty(obj, prop, descriptor)  

const oop ={}
Object.defineProperties(oop,"Medicines1",{
    value : "445",
    value : 21,
    writable : true,
    writable :false
})
console.log(op.Medicines1,op.Medicines2);


//between the defineProperty() and defineProperties()
//defineProperty() a single property on the object.
//defineProperties()  multiple properties on the object.
