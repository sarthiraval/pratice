alert("yes")

let f = "jhk";
let a = 10 ;
let b = 20 ;
let c = a+b;
document.getElementById("demo").innerHTML = f;
document.getElementById("demos").innerHTML = c;
document.write(5 + 6);
    
//Arithmetics    
console.log('Hi Sarthi')
console.log(8 + 4)
console.log(8 - 4)
console.log(8 * 2)
console.log(8 / 2)
console.log(8 % 2)
console.log(8 ** 2)

//console.log('Hi Sarthi')
/*console.log(8 + 4)
console.log(8 - 4)
console.log(8 * 2)
console.log(8 / 2)
*/

//whitespace
let city="Ahmedabad";
console.log(city)

let firstname = "sarthi"
console.log(firstname)

let Firstname ="Sarthi"
console.log(Firstname)
let age = 40;
console.log(age)
let booleans = true
console.log(booleans)
let und = undefined
console.log(und)
let nullvalue = null
console.log(nullvalue)

console.log("string",typeof(firstname)) //string
console.log("numbber",typeof(age))   //numbber
console.log("boolean",typeof(booleans))  //boolean
console.log("undefined",typeof(und))  //undefined
console.log("null",typeof(nullvalue)) //null


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

let n_s = 0.3;
let Ns = 0.3;
let ns = 0.3;
console.log(n_s)
console.log(Ins)
console.log(ins)

const i_ns = 0.3;
const Ins = 0.3;
const ins = 0.3;
console.log(i_ns)
console.log(Ins)
console.log(ins)


var s_s = "s"
var Ss= "s"
var ss= "s"
var Ss= "s"
console.log(s_s)
console.log(Ss)
console.log(Ss)
console.log(ss)

//object
const persons = {name : "sarthi",ln : 'raval',age : "21"}
console.log(persons)
console.log(typeof(persons))
console.log(persons.length)

//arryas
let car = ["BMW","Mercidies","Honda","Jagure","Toofan","Scoripe","Boolero"]
console.log(car);
console.log(typeof(car))
console.log(car.length)

let hj = [1, 2, 3]
let hh = hj
console.log(hh == hj)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo)  


const cars = ["BMW","Mercidies","Honda","Boolero","Jagure","BMW","Toofan","Scoripe","Boolero"]
console.log(cars)
//cars.log[5] = "Honda"
console.log(cars.splice(-5,2))

let slices = cars.slice(-5,-3)
console.log(slices)

const cas = ["BMW","Mercidies","Honda","Boolero","Jagure","BMW","Toofan","Scoripe","Boolero"]
console.log(cas.reverse())
console.log(cas.reverse().sort())

//funcations
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

function jovo() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
   document.getElementById("demo2").innerHTML = "How are you?";
   }

//Numbers
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) 
/*
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
*/
let nums = [1, 2, 3]
let numbers = nums

console.log("true",nums == numbers)  // true

let object = {ids : 1 ,id1 : 2 ,id2 : 3}
let df = 5
console.log("object",numOne,numTwo,nums,df,object)

//Numbers Math Object

const PI = Math.PI
console.log(PI)

console.log(Math.PI) // pi

console.log("Round",Math.round(Math.PI)) // pi

console.log("Round",Math.round(9.56))

console.log("Round",Math.round(9.16))

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


//String concatenation
let hiss = "whys"
let are = "are" 
let you = "you'here'"
let fullName = hiss + are + you; // concatenation, merging two string together.
console.log("string",fullName);

//1.Concatenating Using Addition Operator
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let ciy = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let ag = 250

let fulName =firstName + space + lastName
let personInfoOne = fulName + '\'I am\' ' + ag + '\" I live in \"' + country; // ES5 string addition

console.log("ADD",personInfoOne)

//2.Long Literal Strings
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log("Long Literal",paragraph)

//3.Template Literals (Template Strings)
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let as = 2
let bs = 3
console.log(`The sum of ${as} and ${bs} is ${as + bs}`) // injecting the data dynamically
let f_n  = "Sarthi"
let ln = "Raval"
let mn = "ShileshKumar"
let cy = "Ahmedabad" 
let js ="JS"
let jb ='student'
let ae= 21
let Fm = f_n +mn+ln

let pikn = `I am ${f_n} ${mn} ${ln} I live in ${cy} .I am ${jb} . I learn ${js}. I am ${ae} years`
console.log("Template Literals",pikn)

let pin = `I am ${Fm} I live in ${cy} .I am ${jb} . I learn ${js}. I am ${ae} years`
console.log("Template Literals :- ",pin)


//4.Escape Sequences in Strings
console.log("use /n",'I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log("use /t",'Days\tTopics\tExercises')
console.log("use /t",'Day 1\t3\t5')
console.log("use /t",'Day 2\t3\t5')
console.log("use /t",'Day 3\t3\t5')
console.log("use /t",'Day 4\t3\t5')
console.log("use \\",'This is a backslash  symbol (\\)') // To write a backslash
console.log("use \" \"",'In every programming language it starts with \"Hello, World!\"')
console.log("use \'\'","In every programming language it starts with \'Hello, World!\'")
console.log("use \'\'",'The saying \'Seeing is Believing\' isn\'t correct in 2020')


//String Methods
let len = 'I AM DON'
console.log(len.length)

//Accesing ch in a String
let s = "I AM DON"
console.log("accesnding",s[0])
console.log("accesnding",s[5])
console.log("accesnding",s.length -1)
console.log("accesnding",s[s.length -1])

//uppecase
console.log("uppercase",s.toUpperCase())

//lowercase
console.log("lowercase",s.toLowerCase())

//substr()
let ssr = "JavaScript is Good language" 
console.log("substr",ssr.substr(0,4))
console.log("substr",ssr.substr(14))
console.log("substr","substring and bhai log".substr(1,4))


//substring()
console.log("substring",ssr.substring(0,4))
console.log("substring",ssr.substring(14))
console.log("substr","substring and bhai log".substring(1,4))

//split
console.log("split","I am Racer and I Love Racing more than Study".split())
console.log("split","I am Racer and I Love Racing more than Study".split(''))
console.log("split","I am Racer and I Love Racing more than Study".split(' '))
console.log("split",'I, am ,Racer ,and ,I ,Love, Racing ,more ,than ,Study'.split(','))

//trim
console.log("   I am Racer and I Love Racing more than Study  ".trim())

//include
let string = '30 Days Of JavaScript'
console.log("include",string.includes('Days'))     // true
console.log("include",string.includes('days'))     // false - it is case sensitive!
console.log("include",string.includes('Script'))   // true
console.log("include",string.includes('script'))   // false
console.log("include",string.includes('java'))     // false
console.log("include",string.includes('Java'))     // true

//replace
console.log("replace","I am Racer".replace('am Racer','am Good Racer'))

//charAt()
console.log("chartat","i am racer".charAt(0))

let tring = '30 Days Of JavaScript'
let lastIndex = tring.length - 1
console.log("charat",tring.charAt(lastIndex)) // t

//chartcodeAt()
console.log("chartcodeAt","i am racer".charCodeAt(0))

let lastIndexs = string.length - 1
console.log("chartcodeAt",string.charAt(lastIndexs)) // t


//indexof
let strin = '30 Days Of JavaScript'
console.log("indexof",strin.indexOf('D'))          // 3
console.log("indexof",strin.indexOf('Days'))       // 3
console.log("indexof",strin.indexOf('days'))       // -1
console.log("indexof",string.indexOf('JavaScript')) // 11

//lastindexof
let strig = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log("lastindexof",strig.lastIndexOf('love'))       // 67
console.log("lastindexof",strig.lastIndexOf('you'))        // 63
console.log("lastindexof",strig.lastIndexOf('JavaScript')) //83

//concat()
let strng = '30'
console.log("concat",strng.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let coutry = 'Fin'
console.log("concat",coutry.concat("land")) // Finland


//startwith()
let ring = 'Love is the best to in this world'

console.log("startwith",ring.startsWith('Love'))   // true
console.log("startwith",ring.startsWith('love'))   // false
console.log("startwith",ring.startsWith('world'))  // false

//endwith()
let ing = 'Love is the most powerful feeling in the world'

console.log("endwith",ing.endsWith('world'))         // true
console.log("endwith",ing.endsWith('love'))          // false
console.log("endwith",ing.endsWith('in the world')) // true

//search()
let stri = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("search",stri.search('love'))          // 2
console.log("search",stri.search(/javascript/gi))  // 7


//match()
let matchs = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("match",matchs.match('love'))
console.log("match",matchs.match(/love/gi))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'

console.log("match",txt.match(/\d+/g)) // ["2019", "30", "2020"]
console.log("match",txt.match(/\d+/))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]

//repeat
console.log("repeat","love".repeat(5))


let fi= 'no'      // string
let la = 'no'        // string
let co = 'no'         // string
let ci = 'no'           // string
let ages = 250                   // number, it is not my real age, do not worry about it
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


//Changing Data Type (Casting)
//1.String to Int

let o = '10'
let os = parseInt(o)
console.log(os) // 10

let p = '10'
let po = Number(p)
console.log(po) // 10

let num = '10'
let numInt = +num
console.log(numInt) // 10

//2.String to float
let kj = '9.81'
let numFloat = parseFloat(kj)
console.log(numFloat) // 9.81

let jk = '9.81'
let sw = Number(jk)
console.log(sw) // 9.81

let sk = '9.81'
let sl = +sk
console.log(sl) // 9.81

//3.Float to Int
let k = 9.81
let kjs = parseInt(k)
console.log(kjs) // 9

let numOe = 3
let numTo = 3
console.log(numOe == numTo) 
/*
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
*/
let nume= [1, 2, 3]
let numbr = nume
console.log(nume == numbr)