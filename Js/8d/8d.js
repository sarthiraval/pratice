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
console.log(q,w,e,t,r);

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
{
    var sqq = 's';
    let ss = 'ss';
    const sss = 'sss';
    var qq = 4
    let w = 4
    const e = 5
    console.log(h)

    console.log(sqq);
   // console.log(e++);
    console.log(qq++);
    console.log(w+2) 

    console.log(ss);
    console.log(sss);
}
function name() 
{
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
    //console.log(sqq);
    //console.log(c);
    console.log(sqq);
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

car.nationality = 'India'
car.age = 54
car.title ="All Of This"
car.phone.push('BSNL')
car.phone.push('MTNL')
car.isMarried = false

car.funs = function(){
    let thiss = this.phone
    .splice(0,this.phone.length - 1)
    .join(', ')

  let splices = this.phone.splice(this.phone.length -1)[0]
  let skills = `${thiss} ${splices}`  
  let fname = this.getfs()
  let sfs = `${fname} is a ${this.title} \nHe Live is ${this.nationality} 
  \nHe Studies ${skills}`
  return sfs

}
console.log(car.funs());

// object method
//Object.assign: To copy an object without modifying the original object

let copuperson = Object.assign({},car)
console.log(copuperson);

//Object.keys: To get the keys or properties of an object as an array
let keys = Object.keys(car)
console.log(keys);

//Object.values:To get values of an object as an array
let values = Object.values(car)
console.log(values);

//Object.entries:To get the keys and values in an array
let entiress = Object.entries(car)
console.log(entiress);

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copuperson.hasOwnProperty('Firstname'));
console.log(copuperson.hasOwnProperty('score'));
