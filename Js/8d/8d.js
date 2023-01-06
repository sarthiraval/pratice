// global
h = 1
console.log("Global declartion without variable =",h)
let ec = h+2
console.log("Global declartion without variable =",ec)

h ="I love Coding"
console.log("Global declartion without variable and changing = ",h);

q = 2+3
w = undefined + 2
e = NaN + 2
t = true + 2
r = Number + 2
yqs = "v"+ true
console.log("Global declartion without variable =",q,w,e,t,r,yqs);

yq = "v"+ undefined
wq = undefined - 2
eq = NaN - 2
tq = true - 2
rq = Number - 2
dq = "v" + 1
console.log("Global declartion without variable = ",wq,eq,tq,yq,dq,rq);

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
          \nI pray this god ${this.god},\nI pray this god ${this.gods}
        \nMy Ideal is ${this.myIdeal}`);
        }
        ,
    getfs : function(){
       return `${this.Firstname} ${this,this.Middlename} ${this,this.Lastname}`
    }
    ,
        "Address": {
         
                    "City_name": "Ahmedabad",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
 
    
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

let du = {...car} // 1 level deep 
// let du2 = Object.assign({},car) // 1 level deep 
// let du3 = JSON.parse(JSON.stringify(car))  
console.log(du.Firstname = "Janik");
// console.log(du2.Firstname = "Janik");
// console.log(du3.Firstname = "Janik");
console.log(car.Firstname);


let duq = {...car} // 1 level deep 
let duqq = Object.assign({},car) // 1 level deep 

console.log(du.Address.City_name   = "Naranpura");
console.log(car.Address.City_name);
console.log(duqq.Address.City_name = "Naranpura");
console.log(car.Address.City_name);



// object method
console.log( "object method");
//Object.Create :- The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object
Object.create(car)
car.bike = "Pulsar"
car.god = ["Mahadev","Ashapuri Ma","Chamunda Ma"]
car.gods = {"Mahadev":"Ashapuri Ma"}

car.createmate()

console.table(car);
console.log(car);


//Object.assign: To copy an object without modifying the original object
console.log(car);
let copuperson = Object.assign({},car)
console.log(copuperson);

let copuperso = Object.assign({why : "why"},car)
console.log(copuperso);

//  Object.getOwnPropertyNames() method returns an array of all propertie found directly upon a given object.
console.log(Object.getOwnPropertyNames(car));
//Objetc.getOwnPropertyNames() and Object.keys() different

//Object.keys: To get the keys or properties of an object as an array
let keyss = Object.keys(car)
console.log(keyss);

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
console.log(Object.keys(op));
console.log(Object.getOwnPropertyNames(op));
// Object.defineProperty()
// The Object.defineProperty() method defines a new property directly on an object and returns the object. 
//To change the flags, we can use Object.defineProperty.
//We cannot change it back, because define property doesn?t work on non-configurable properties.
//Syntax = Object.defineProperty(obj, prop, descriptor)  

const oop ={}
Object.defineProperty(oop,"Medicines3",{
    value : "445",
    value : 21,
    writable : true,
    writable :false
})
oop.Medicines3 =14
console.log(oop.Medicines3);


//between the defineProperty() and defineProperties()
//defineProperty() a single property on the object.
//defineProperties()  multiple properties on the object.


//Freeze
//Object.freeze() method freezes an object that prevents new properties from being added to it.
//syntax = let fix = Object.freeze(whythis)
let  o1 = {
  racer : "Jonathan Rea	" ,
  win : 118
}
const o2 = Object. freeze(o1)
o2.racer="Sarthi Raval"
o2.Win = 0
console.log(o2.racer,o2.win);

var whythis = { bestbike : "Kawasaki Ninja H2R "}
console.log(whythis);
whythis.bestbike= "Ninja ZX-14R ABS"
console.log(whythis);
let fix = Object.freeze(whythis)
whythis.bestbike = "Pulsar"
console.log(whythis);

//Object.getOwnPropertyDescriptor = a data descriptor is a property that has a value, which may or may not be writable.
//Syntax = bject.getOwnPropertyDescriptor(obj, prop)  
//value = contains an actual value of a property
//writable = writable or read - only
//enumerable = during the enumeration using for- in loop or  Object.key() Method
//Configurable = Specified property can be changed or not 

//1.of this getOwnPropertyDescriptor
function Studenta() 
{
  let sobjectation = { 
    name  :"Sarthi" ,
    hello : function(){
      console.log("Hello");
    }
 }
  console.log(Object.getOwnPropertyDescriptor(sobjectation,'name'));

}
Studenta()

//2.of this writable
let writabledata = { 
  ss  :"21" ,
  hello : function(){
    console.log("Why");
  },
  sss :'45',
  lklj :"saw"

}
console.log(Object.keys(writabledata));

console.log(writabledata.ss);

const descriptor1 = Object.getOwnPropertyDescriptor(writabledata, 'ss');  
console.log(descriptor1.writable);  
console.log(descriptor1.value);  

Object.defineProperty(writabledata,'ss',{writable: true})
writabledata['ss'] = "Sarthi";
console.log("defineProperty true =",writabledata.ss);
//true = String,NaN,Number,Boolean
//false =  null
//undefind = error
Object.defineProperty(writabledata,'ss',{writable:false})
writabledata['ss'] = "Harshit"
console.log("defineProperty false = ",writabledata.ss);


//3.Enumerable = it enumerable input  is true a  all of key is print 
 //But enumerable input is a false only first key element is not a print  ,and another key is print 

// true = String ,Number, Boolean
// false = null, undefind NaN
Object.defineProperty(writabledata,'sss',{enumerable:false})
console.log(Object.keys(writabledata)); 
Object.defineProperty(writabledata,'ss',{enumerable:false})
console.log(Object.keys(writabledata)); 
Object.defineProperty(writabledata,'ss',{enumerable:true})
console.log(Object.keys(writabledata)); 
console.table(writabledata);
  
//4.configurable = it configurable input  is true a  all of key and value is print 
 //But configurable input is a false only first key element is not a print ,and another key is print 
let aqaq = {  
  ss :"f",
  ssq  :"21" ,
  helloq : function(){
    console.log("dwew");
  },
  sssq :'45',
}
// console.log(aqaq);

let  opof=Object.defineProperty(aqaq,'ssq',{configurable:false})
console.log(opof);
Object.defineProperty(aqaq,'ssq',{enumerable:true})
console.log(Object.keys(aqaq)); 




// getOwnPropertyDescriptors = a data descriptor is a propertys that has a value, which may or may not be writable.



//between the getOwnPropertyDescriptor() and getOwnPropertyDescriptors()
//getOwnPropertyDescriptor() a single property on the object.
//getOwnPropertyDescriptors()  multiple properties on the object.


//Object.getPrototypeOf() Method
// The Object.getPrototypeOf() method of JavaScript returns the prototype of the specified object.
// two objects 
let animal = {
  eats :true,
  eat :false
}
const object1 = Object.create(animal);  

let acc = {
  eats :true,
  eat :false
}
const object2 = Object.create(acc);  

console.log((Object.getPrototypeOf(object1) === animal));
console.log((Object.getPrototypeOf(object2) === acc));
console.log((Object.getPrototypeOf(object1.eats) === animal.eats));


let rabbit = Object.create(animal);  
console.log(Object.getPrototypeOf(rabbit) === animal); 


// The Object.is() method of JavaScript is used to determine whether two values are the same value
//Object.seal() = The object to be sealed is passed as an argument, and the method returns the object which has been sealed.
let animals = {
 
}
console.log(Object.is(animal))  

let accs = {
  eats :true,
  eat :false
}


console.log(Object.is(accs))
console.log(Object.isExtensible(accs))
console.log(Object.seal(accs));
animals.eats = 45;  
console.log(animals.eats);
console.log(Object.isSealed(accs))

//The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null
var Animal = {  
  drive() {  
    console.log(this.name + ' Raval');  
  }  
};  
 
class Dog {  
  constructor(name) {  
  this.name = name;  
 }  
}  
 
Object.setPrototypeOf(Dog.prototype, Animal);   

let add = new Dog('Sarthi')
add.drive()

//Object.preventExtensions() only prevents the addition of new properties from ever being added to an object 
let uu = {"p" : 3}
  Object.preventExtensions(uu)
console.log(Object.hasOwnProperty("p"));

