    //global , fuction,block
    {
        var s = 's';
        let ss = 'ss';
        const sss = 'sss';
        console.log(s);
        console.log(ss);
        console.log(sss);
    }
    function name() 
    {
        {
        var a = 'Sarthi';
        let b = 'Shaileshkumar';
        const c = 'Raval';
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(s);
        // console.log(ss);
        // console.log(sss);
        }
        console.log("Outside If Statement")
        console.log(a);
        //console.log(b);
        //console.log(c);
        console.log(s);
       //console.log(ss);
        //console.log(sss);
    }
    name()

        
console.log('Arithmetics')
console.log(8 + 4)
console.log(8 - 4)
console.log(8 * 2)
console.log(8 / 2)
console.log(8 % 2)
console.log(8 ** 2)


//whitespace
let city="Ahmedabad";
console.log(city)

let firstname = "sarthi"
console.log(firstname)

let Firstname ="Sarthi"
console.log(Firstname)

console.log("All Typeof")
let fi= 'no'      // string
let j                         // undefined, because a value was not assigned

console.log(typeof fi)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof j)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

let saq = 0
const bf =  saq+ 11
console.log("number:",typeof bf)


const ase = 'idshaihdi'
const be = ase + 'dcdscs'
console.log(be)
console.log("String:",typeof be)

const aaa = 'idshaihdi' + 11
console.log("String : ",typeof aaa)

const aa = 11+ 'idshaihdi' 
console.log("String:",typeof aa)

const aqa = 11+ 12 
console.log("String:",typeof aqa)

const zweqw =  10 + null
console.log("number:",typeof zweqw)

const ze =  undefined + NaN
console.log("number:",typeof ze)

const zwe =  null + NaN
console.log("number:",typeof zwe)

const zwew =  null + null
console.log("Number:",typeof zwew)

const ascz= NaN + NaN
console.log("number",typeof ascz);

const asz= undefined + undefined
console.log("number",typeof asz);

console.log("let declaration")
let n_s = 01;
let Ns = 0;
let ns = 3;
console.log(n_s)
console.log(Ns)
console.log(ns)

console.log("Const declaration")
const i_ns = 0.3;
const Ins = 0.3;
const ins = 0.3;
console.log(i_ns)
console.log(Ins)
console.log(ins)

console.log("Var declaration")
var s_s = "s"
var Ss= "s"
var ss= "s"
var Ss= "s"
console.log(s_s)
console.log(Ss)
console.log(Ss)
console.log(ss)

console.log("Examples")
let a = 10
let b =  '10'
console.log("+no use karyo :",a+ +b)

var ab = 'ABC'
var ba= 'def'
console.log("join thau :",ab+ba)

let kj= 10
let jk =  '10'
console.log("join thau :",kj+=jk)

let u = 10
let v =  '10'
console.log("join thau",u+v)

let f = '10'
let g =  10
console.log("+no use thayo :",+f+g)



let e = '10'
let r = +'10'
console.log("join thau :",e+r)

//reassign 
let ag = 10
ag=50
console.log("reasign and change:",ag)

let al = +'10'
let bl = 10
console.log("+no use thayo : ",al+bl)


let ee = 10
ee += 50
console.log("+karau: ",ee)

console.log("testiing");
let hj = [1, 2,"S", 3]
let hh = hj
console.log(hh == hj)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo) 



let object = {ids : 1 ,id1 : 2 ,id2 : 3}
let df = 5
console.log("object",df,object)

console.log("Object")
let person = {name : 'sarthi',ln : 'raval',age : "21"}
console.log(person)

//dot notation
person.name = "janik"
person.ln='Kanariya'
person.age=25
console.log(person.name)
console.log(person.ln)
console.log(person.age)

//bracket notation
person['name'] = "Siddharth"
person['age'] = 24
person['ln'] = "Soni"
console.log(person.name)
console.log(person.ln)
console.log(person.age)

console.log(typeof(person))
console.log(person.length)

//arryas
console.log("Arrays")
let car = ["BMW","Mercidies","Honda","Jagure","Toofan","Scoripe","Boolero"]
console.log(car);
console.log("Array typeof = ",typeof(car))
console.log(car.length)
let checking = car[5] = "Sarthi"
console.log(checking)
console.log(car)


 

//funcations
console.log("Function")
function sarthi(){
    console.log('Sarthi Raval Shaileshkumar')
}
sarthi();

function sarthis(fname,lname,age){
    console.log('Sarthi Raval Shaileshkumar' + ' '+fname+''+lname+''+age)
}
sarthis('Sarthi','raval',21)

function squre(number){
    return number * number
}
let number = squre(21)
console.log(number)


//Changing data type 
console.log("Changing Data Type (Casting)")
console.log("1.String to Int")

let o = '10'
let os = parseInt(o)
console.log(os) // 10

let p = '10'
let po = Number(p)
console.log(po) // 10

let num = '10'
let numInt = +num
console.log(numInt) // 10

console.log("2.String to float")
let qj = '9.81'
let numFloat = parseFloat(qj)
console.log(numFloat) // 9.81

let jq = '9.81'
let sw = Number(jq)
console.log(sw) // 9.81

let sk = '9.81'
let sl = +sk
console.log(sl) // 9.81

console.log("3.Float to Int");
let k = 9.81
let kjs = parseInt(k)
console.log(kjs) // 9


let abec = 'abcdefg1234'
console.log("1 Includes:",abec.indexOf('bc'))
console.log("7 Includes :",abec.indexOf(1))
console.log("-1 Includes:",abec.indexOf('bcs'))

let aebc = { name: "sarthi" ,age : 13, fn : "raval"}
console.log("true:",aebc.name.includes('sarthi'))

//Data Type Numbers In Math Object
console.log("Data Type Numbers In Math Object");
const PI = Math.PI
console.log(PI)

console.log(Math.PI) // pi

console.log("Round",Math.round(Math.PI)) // pi

console.log("Round",Math.round(9.56)) // 10

console.log("Round",Math.round(9.16)) // 9

console.log("floor",Math.floor(4)) // down to up 4
console.log("floor",Math.floor(4.8)) // down to up 4
console.log("floor",Math.floor(4.4))// down to up 4

console.log("ceil",Math.ceil(4.8)) // down to down 5
console.log("ceil",Math.ceil(4.2)) // down to down 5

console.log("min",Math.min(-5,-2,0,5,6,2)) // min
console.log("max",Math.max(-5,-2,0,5,6,2)) // max

console.log("random",Math.random()) // creates random number between 0 to 0.999999
console.log("random",Math.random() * 11 ) // creates random number between 0 to 0.999999
console.log("floor and random",Math.floor(Math.random() * 11)) // creates random number between 0 and 10
console.log("ceil and round",Math.ceil(Math.random() * 11)) // creates random number between 0 and 10

console.log("abs",Math.abs(10))//Absolute value
console.log("abs",Math.abs(-10))//Absolute value

console.log("sqrt",Math.sqrt(100))     // 10 
console.log("sqrt",Math.sqrt(4)) // 2

console.log("power",Math.pow(4,3))   // 64

console.log("power",Math.E) // 2.718

// Returns the natural logarithm with base E of x, Math.log(x)
console.log("E of x vade",Math.log(5))        
console.log("E of x vade",Math.log(10))       

// Returns the natural logarithm of 2 and 10 respectively
console.log("LN2",Math.LN2)         
console.log("LN10",Math.LN10)        

// Trigonometry
console.log("Sin",Math.sin(0))
console.log("Sin",Math.sin(60))

console.log("cos",Math.cos(0))
console.log("cos",Math.cos(60))
