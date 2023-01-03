let car = [
    {
        "Firstname" : "Sathi",
        "Middlename":"Shaileshkumar",
        "Lastname" : "Raval",
        "age" : 14,
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : {
            "phonenumber" :{
                 "VI":9726760701,
                 "Airtal": 6351141350,
                 "JIO" : 9913072322
            }
        },
        "Address": [
         {
            "city": {
                    "City_name": "Ahmedabad",
                        "Area": {
                        "Area_name": "Naranpura",
                        "Pincode" : 380012,
                        "Socity_name":"Surya house",
                        "Block_Number" : 164/1958
                     }
                }
        }
     ]
    }
 ,  {
        "Firstname" : "Janik",
        "Middlename":"Nileshbhai",
        "Lastname" : "Kanariya",
        "age" : 22,
        "register" : new Date(),
        "hoobies" : "PhotoGraphey",
         "phone" : {
            "phonenumber" :{
                 "":9726760701,
                 "Airtal": 6351141350,
                 "JIO" : 9913072322
            }
        },
        "Address": [
         {
            "city": {
                    "City_name": "Ahmedabad",
                    "Area": {
                    "Area_name": "Naranpura",
                    "Pincode" : 380012,
                    "Socity_name":"Surya house",
                    "Block_Number" : 164/1958
                     }
                }
        }
     ]
    }
,
    {
        "Firstname" : "yash",
        "Middlename":"Dineshbhai",
        "Lastname" : "Rabari",
        "age" : 22,
        "register" : new Date(),
        "hoobies" : "Developing",
        "phone" : {
            "phonenumber" :{
                 "VI":9726760701,
                 "Airtal": 6351141350,
                 "JIO" : 9913072322
            }
        },
        "Address": [
         {
            "city": {
                    "City_name": "Ahmedabad",
                    "Area": {
                    "Area_name": "Naranpura",
                    "Pincode" : 380012,
                    "Socity_name":"Surya house",
                    "Block_Number" : 164/1958
                     }
                }
        }
     ]
    }
]

console.log(car);
console.table(car);

//Grouping
car.forEach(car => {
  console.group(`${car.Address}`);
  console.groupEnd(`${car.Address}`);
});

console.dir(car)

//dir
var sk = [10, 20, 30];
console.dir(sk)
console.log("geek2 (dir) = ", sk);


//error
console.error("Bye Bye")

//warning
console.warn("Bye Bye")

//clear
//console.clear()


//time and timeend() same hovu joiye
console.time('abc')
let fun = function(){
    console.log("Bike speed is only 250")
}
let fun2 = function(){
    console.log("Your speed is very slow")
}
fun()
fun2()
console.timeEnd('abc')

//count
console.count("Sarthi")
console.count("Raval")
console.count("Sarthi")
console.count("Raval")
console.count("Sarthi")
console.count("Raval")
console.count("Sarthi")
console.count("Raval")
console.count("ShaileshKumar")

for(let i = 0;i<5;i++){
    console.count(i)
}

//info
console.info("Info ni jankari")

//assert
console.assert(100<12,"HI Baby")

//group and groupend
console.group('simple');
console.warn('warning!');
console.error('error here');
console.log('HI');
console.groupEnd('simple');

//Grouping
car.forEach(car => {
  console.group(`${car.Firstname}`);
  console.log(`This is ${car.Firstname}`);
  console.log(`${car.Firstname} is ${car.age} years old`);
  console.log(`${car.Firstname}  ${car.Lastname} ${car.Middlename} `);
  console.groupEnd(`${car.Firstname}`);
});
console.log('new section');


//testing
const p = document.querySelector("h1");     //from html tag printing elements
console.log(p)

//custom console log
//style
let spacing = '10px'
let margins = "15px"
let styles  = `padding : ${spacing};
               margintop :${margins};
               marginbottom :${margins};
               background-color : Yellow;
               color: Red;
               font-styels: italic;
               border: 2px solid powderblue;
               font-size:12px`
console.log('%cI am Racer', styles);           
            
//boolean
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
console.log(isLightOn,isRaining,isHungry,isMarried
    ,truValue,falseValue)

//undefind
let fis = undefined
console.log(fis)
let firstName
console.log(firstName)

//null
let empty = null
console.log(empty) 

//operators
//Assignment operators

// = y is store x value
let  x = 10
let y = "s"
console.log("1:",x=y) //s
let  xw = "s"
let yw = 10
console.log("2:",xw=yw) //10
let  sw = "s"
let w = "a"
console.log("3:",sw=w) //a
let  sx = 10
let sy = 5
console.log("4:",sx =sy) //5

//x + y result is stored in x
//console.log("1:",sx += sy) //15
//console.log("2:",x += y)  //10s
//console.log("3:",xw += yw) //s10
//console.log("4:",sw += w) //sa
//console.log(sx =+ sy) //5


//x * y result is stored in x
//console.log("1:",sx *= sy) //50
//console.log("1:",sx =* sy) //error
//console.log("2:",x *= y) // nan
//console.log("3:",xw *= yw) // nan
//console.log("4:",sw *= w) // nan

//x - y result is stored in x
//console.log("1:",sx -= sy) //5
//console.log(sx =- sy) //-5
//console.log("2:",x -= y)  // nan
//console.log("3:",xw -= yw)  //nan
//console.log("4:",sw -= w) //nan

//x  / y result is stored in x
//console.log("1:",sx /= sy) //2
//console.log(s =/ y) //error
//console.log("2:",x /= y)  // nan
//console.log("3:",xw /= yw) //nan
//console.log("4:",sw  /= w) //nan

//x % y result is stored in x
//console.log("1:",sx %= sy) //0
//console.log(s =% y) //err
//console.log("2:",x %= y)  //nan
//console.log("3:",xw %= yw) //nan
//console.log("4:",sw %= w) //nan

//x ** y result is stored in x
// console.log("1:",sx **= sy) //100000
// console.log("2:",x **= y) // nan
// console.log("3:",xw  **= yw) // nan
// console.log("4:",sw **= w) //nan


//comparison opertor
// == , != ,> , < , <= , =>,===

console.log(">:",10 > 15) //false
console.log(">",10 > 10) //false
console.log(">:",15 > 10) //True
console.log(">:","As" > "A") // true
console.log(">:",undefined > undefined) //false
console.log(">:",undefined > null) //false
console.log(">:",null > null) //false
console.log(">:",null > undefined) //false
console.log(">:",Number > null) //false
console.log(">:",Number > undefined) //false
console.log(">:",Number > NaN) //false


console.log(">=",10 >= 15) //false
console.log(">=",10 >= 10) //true
console.log(">=",15 >= 10) //True
console.log("<=","A" <= "A") // true
console.log(">=","As" >= "A") // true
console.log(">=",undefined >= undefined) //false
console.log(">=",undefined >= null) //false
console.log(">=",null >= null) //true
console.log(">=",null >= undefined) //false
console.log(">=",Number >= null) //false
console.log(">=",Number >= undefined) //false
console.log(">=",Number >= NaN) //false

console.log("<",10 < 15) //false
console.log("<",10 > 10) //false
console.log("<",15 > 10) //True
console.log("<","As" > "A") // true
console.log("<",undefined > undefined) //false
console.log("<",undefined > null) //false
console.log("<",null > null) //false
console.log("<",null > undefined) //false
console.log("<",Number > null) //false
console.log("<",Number > undefined) //false
console.log("<",Number > NaN) //false


console.log("<=",10 <= 15) //true
console.log("<=",10 <= 10) //true
console.log("<=",15 <= 10) //false
console.log("<=","A" <= "a") // true
console.log("<=","As" <= "A") // false
console.log("<=",undefined <= undefined) //false
console.log("<=",undefined <= null) //false
console.log("<=",null <= null) //true
console.log("<=",null <= undefined) //false
console.log("<=",Number <= null) //false
console.log("<=",Number <= undefined) //false
console.log("<=",Number <= NaN) //false

console.log("!=",3!="")       //tr
console.log("!=",3!="3")     //tr
console.log("!=",10 != 15) //true
console.log("!=",10 != 10) //false
console.log("!=",15 != 10) //true
console.log("!=","A" != "A") // false
console.log("!=","A" != "a") // true
console.log("!=","As" != "A") // true
console.log("!=",undefined != undefined) //false
console.log("!=",undefined != null) //false
console.log("!=",null != null) //false
console.log("!=",null != undefined) //false
console.log("!=",Number != null) //true
console.log("!=",Number != undefined) //true
console.log("!=",Number != NaN) //true
console.log("!=",Number != Number) //false
console.log("!=",NaN != NaN) //true

console.log("==",10 == 15) //false
console.log("==",10 == 10) //true
console.log("==",15 == 10) //false
console.log("==","A" == "A") // true
console.log("==","A" == "a") // false
console.log("==","As" == "A") // false
console.log("==",undefined == undefined) //true
console.log("==",undefined == null) //true
console.log("==",null == null) //false
console.log("==",null == undefined) //true
console.log("==",Number == null) //false
console.log("==",Number == undefined) //false
console.log("==",Number == NaN) //false
console.log("==",Number == Number) //false
console.log("==",NaN == NaN) //false
console.log("==","ab" == "")    //fa
console.log("==",1==" ")     //fa
console.log("==",1=="")     //fa
console.log("==",0=="")     //tr
console.log("==",0==" ")     //tr
console.log("==",1==true)    //tr
console.log("==",0==false)   //tr 
console.log("==",0==true)   //fa  

console.log("===",1===true)   //fa
console.log("===",0===true)   //fa
console.log("===",0==="")     //fa
console.log("===",1==="")     //fa
console.log("===","ab" === "")    //fa
console.log("===",10 === 15) //false
console.log("===",10 === 10) //true
console.log("===",15 === 10) //false
console.log("===","A" === "A") // true
console.log("===","A" === "a") // false
console.log("===","As" === "A") // false
console.log("===",undefined === undefined) //true
console.log("===",undefined === null) //true
console.log("===",null === null) //false
console.log("===",null === undefined) //false
console.log("===",Number === null) //false
console.log("===",Number === undefined) //false
console.log("===",Number === NaN) //false
console.log("===",Number === Number) //true
console.log("===",NaN === NaN) //false

console.log('mango'.length == 'avoca'.length)       //tr
console.log('mango'.length == 'avocado'.length)     //fa
console.log('mango'.length === 'avoca'.length)       //tr
console.log('mango'.length === 'avocado'.length)     //fa
console.log('mango'.length != 'avocado'.length)     //tr
console.log('mango'.length != 'avoca'.length)       //fa
console.log('mango'.length > 'avocado'.length)      //fa
console.log('mango'.length > 'avocao'.length)      //fa
console.log('mango'.length < 'avoca'.length)        //fa
console.log('mango'.length < 'avocado'.length)      //tr
console.log('mango'.length <= 'avoca'.length)       //tr
console.log('mango'.length >= 'avoca'.length)       //tr
console.log('mango'.length >= 'avocado'.length)     //fa
console.log('mango'.length <= 'avocado'.length)     //tr


//Arithmetic Operators

let s = 10,ss=20,ds ="ss",sd="gf";
console.log(s+ss) //30
console.log(s+ds) //10ss
console.log(ds+sd) //ssgf


console.log(s-ss) //-10
console.log(s-ds) //nan
console.log(ds-sd) //nan

console.log(s*ss) //200
console.log(s*ds) //nan
console.log(ds*sd) //nan

console.log(s/ss) //0.5
console.log(s/ds) //nan
console.log(ds/sd) //nan


console.log(s%ss) //10
console.log(s%ds) //nan
console.log(ds%sd) //anan

console.log(s**ss) //100000000000000000000
console.log(s**ds) //nan
console.log(ds**sd) //nan

//circle radius
let Pi = 3.14
console.log("raduis",Pi * 100 *100)
console.log("weihgt",9.81*72)

const boilingPoint = 100  
const gravity =9.81
const bodyTemp = 37 
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)


//logical 
//&& ||  !

//&& ampersand 

const check = "5" > 4 && 14 > 5       //t & t = t
console.log(check)

const checkk =  "5" < "4" && 14 < "15"      //f & t = f
console.log(checkk)


const checskk =  "abc" < "ae" && 13 < "15"      //f & t = 
console.log(checskk)

const checkkk =  "5" < "4" && 14 < "12"     //f & f = f
console.log(checkkk)

// || pipe or operator

const chec = "5" > 4 || 14 > 5       //t & t = t
console.log(chec)


const sasa =  "aa" < "ab" && 13 < "15"      //t & t = t
console.log(sasa)

const checc =  "5" < "4" || 14 < "15"      //f & t = t
console.log(checc)

const checcc =  "5" < "4" || 14 < "12"     //f & f = f
console.log(checcc)

//  ! Negation

let ch = 3 >= 3     //tr
console.log(ch)

let chh = !(2 >= 3)     //tr
console.log(chh)

let chs = 3 <= 3     //tr
console.log(chs)

let chhs = !(2 <= 3)     //fa
console.log(chhs)

let abcde = true
let abcdee = !abcde      //fa
console.log(abcdee)

let qwerr = !true
console.log(qwerr)      //fa

let qwer = !false
console.log(qwer)       //tr

let qwers = !1
console.log(qwers)       //f

//  Increment

//Pre -increment
let count = 1
console.log("preincrement",++count)        // 2
console.log("preincrement",count)          //2

//Post-increment
let countt = 1
console.log("postincrement",countt++)        //1
console.log("postincrement",countt)          //2

//  Decrement

//Pre - Decrement
let coun = 0
console.log("Pre - Decrement",--coun)        // -1
console.log("Pre - Decrement",coun)          // -1

//Post - Decrement
let counn = 0
console.log("Post - Decrement",coun--)        // -1
console.log("Post - Decrement",coun)          // -2





//console.log(alert('ss'))
//console.log(prompt("s", "s"))
//console.log(prompt("s"))
//console.log(confirm("Are you sure you like his"))

//ternay opertors
let race = true
race 
 ?console.log("sure")
 :console.log("no sure")
race = false
race 
  ?console.log("sure")
  :console.log("no sure")

  let races = 10 
  races > 100
   ?console.log("yes") 
   :console.log("no")

   races > 8
     ?console.log("yes")
     :console.log("no")

console.log(Date())

console.log(new Date())

console.log("fullyear :",new Date().getFullYear()) //yyyy
console.log("Month :",new Date().getMonth())  //0-11
console.log("Date :",new Date().getDate())  //1-31
console.log("Hourse",new Date().getHours())  //0-23
console.log("Minutes",new Date().getMinutes()) //0-59
console.log("Second",new Date().getSeconds()) //0-59
console.log("milliSecond",new Date().getMilliseconds()) //0-999
console.log("Time",new Date().getTime()) 
console.log("Time",Date.now())
console.log("Day",new Date().getDay()) //0-6


let o = "      Sa     ss      "
console.log(o)
console.log(o.trimStart())
console.log(o.trimStart().length)
let q  = o.trimStart()
console.log(q.trimEnd())
console.log(o.trimEnd())
console.log(o.trim())
