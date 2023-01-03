function changecolor (){
    let eleme = document.body
    eleme.classList.toggle("dark-mode")
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
console.log(typeof Function) //Function
console.log(typeof new Date()) //Object

let asaaaa = "true"
console.log(typeof (asaaaa)); //string

let asaaa = String(true)
console.log(typeof (asaaa)); //string

let arrayd = ["Sarthi","Harshit"]
let op = typeof(arrayd)
let opp = toString(arrayd)
let im = typeof opp
console.log("type of",op,im);//object , string

let datetostrin = String(Date())
console.log("",datetostrin);

let r_s= {"sname":"fs"}
let i_s = String(r_s)
console.log("Object Type of conversionto String after type of = "+ i_s);
//String nu Array,object,boolean,date,number jo conversion thau to Type of String j thase

let stringss = Number("3434")
console.log("Numbers conversion",stringss,(typeof stringss));

let strings = Number(false)
console.log("Numbers conversion",strings,(typeof strings));

let tringss = Number(true)
console.log("Numbers conversion",tringss,(typeof tringss));

let sringss = Number([3,4,3,4])
console.log("Numbers conversion",sringss,(typeof sringss));

let strigss = Number({"3":"4","3":"4"})
console.log("Numbers conversion",strigss,(typeof strigss));

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

const ascz= NaN + NaN
console.log("number",typeof ascz);

const zwew =  null + null
console.log("Number:",typeof zwew)

const asz= undefined + undefined
console.log("number",typeof asz);

const aszq= Array + Array
console.log("number",typeof aszq);


const aszqqq= String + String
console.log("number",typeof aszqqq);

const aszqqqq= Number + String
console.log("number",typeof aszqqqq);

const aszqqqqq= Number + Number
console.log("number",typeof aszqqqqq);

const qaszqqqqq= 10 + 10
console.log("number",typeof qaszqqqqq);

const qqaszqqqqq= "10" + "10"
console.log("number",typeof qqaszqqqqq);

const qaszqq= Object + Number
console.log("number",typeof qaszqq);

const aszqq= Object + Object
console.log("number",typeof aszqq);

console.log("let declaration")
let n_s = 01;
let Ns = 0;
let ns = 3333333;
console.log(n_s)
console.log(Ns)
console.log(ns)

console.log(ns.toFixed(2),typeof ns)


console.log("Const declaration")
const i_ns = 0.3;
const Ins = 0.3;
const ins = 0.3;
console.log(i_ns)
console.log(Ins)
console.log(ins)

console.log("Var declaration")
var s_s = "s"
var ss= "s"
var Ss= "s"
console.log(s_s)
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

var s$e= 10 
s$e = 20
console.log("reasign and change:",s$e)

// const sqe= 10 
// sqe = 20
// console.log("reasign and change:",sqe)

let d1  
console.log(d1);

var d12  
console.log(d12);

//const d 
// // console.log(d123);

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
console.log(userOne == userTwo)  //true



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
function sarthis(){
console.log('Sarthi Raval Shaileshkumar')
}
sarthis();

function sarthiss(fname,lname,age){
console.log('Sarthi Raval Shaileshkumar' + ' '+fname+''+lname+''+age)
}
sarthiss('Sarthi','raval',21)

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

console.log("String concatenation");
let hiss = "whys"
let are = "are" 
let you = "you'here'"
let fullName = hiss + are + you; // concatenation, merging two string together.
console.log("string",fullName);

// Declaring different variables of different data types
console.log("Declaring different variables of different data types");
// 1.Concatenating Using Addition Operator
console.log("1.Concatenating Using Addition Operator")
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let ciy = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let agq = 250

let fulName =firstName + space + lastName
let personInfoOne = fulName + '\'I am\' ' + agq+ '\" I live in \"' + country; // ES5 string addition

console.log("ADD",personInfoOne)

//2.Long Literal Strings
console.log("2.Long Literal Strings");
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log("Long Literal",paragraph)

console.log("3.Template Literals (Template Strings)");
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
let Fm = f_n +' '+mn+' '+ln

let pikn = `I am ${f_n} ${mn} ${ln} I live in ${cy} .I am ${jb} . I learn ${js}. I am ${ae} years`
console.log("Template Literals",pikn)

let pin = `I am ${Fm} I live in ${cy} .I am ${jb} . I learn ${js}. I am ${ae} years`
console.log("Template Literals :- ",pin)


console.log("4.Escape Sequences in Strings");
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


console.log("String Methods");
//String Methods

console.log("Length");
let len = 'I AM DON'
console.log(len.length)

console.log("Accesing ch in a String");
//Accesing ch in a String
let sb = "I AM DON"
console.log("accesnding",sb[0])
console.log("accesnding",sb[5])
console.log("accesnding",sb.length -1)
console.log("accesnding",sb[sb.length -1])

console.log("uppecase");
//uppecase
console.log("uppercase",sb.toUpperCase())


console.log("lowercase");
//lowercase
console.log("lowercase",sb.toLowerCase())

console.log("substr");
//substr()
let ssr = "JavaScript is Good language" 
console.log("substr",ssr.substr(1,4))
console.log("substr",ssr.substr(14))
console.log("substr","substring and bhai log".substr(1,4))


console.log("substring");
//substring()
console.log("substring",ssr.substring(1,4))
console.log("substring",ssr.substring(14))
console.log("substr","substring and bhai log".substring(1,4))

console.log("split");
//split
console.log("split","I am Racer and I Love Racing more than Study".split())
console.log("split","I am Racer and I Love Racing more than Study".split(''))
console.log("split","I am Racer and I Love Racing more than Study".split(' '))
console.log("split",'I, am ,Racer ,and ,I ,Love, Racing ,more ,than ,Study'.split(','))

console.log("trim");
//trim
console.log("   I am Racer and I Love Racing more than Study  ".trim())
let oa = "      Sa     ss      "
console.log(oa)
console.log(oa.trimStart())
console.log(oa.trimStart().length)
let q  = oa.trimStart()
console.log(q.trimEnd())
console.log(oa.trimEnd())
console.log(oa.trim())

console.log("Include");
//include
let string = '30 Days Of JavaScript'
console.log("include",string.includes('Days'))     // true
console.log("include",string.includes('days'))     // false - it is case sensitive!
console.log("include",string.includes('Script'))   // true
console.log("include",string.includes('script'))   // false
console.log("include",string.includes('java'))     // false
console.log("include",string.includes('Java'))     // true

console.log("replace");
//replace
console.log("replace","I am Racer".replace('am Racer','am Good Racer'))

console.log("charAt");
//charAt()
console.log("chartat","i am racer".charAt(0))
let tring = '30 Days Of JavaScript'
let lastIndex = tring.length - 1
console.log("charat",tring.charAt(lastIndex)) // t

console.log("chartcodeAt");
//chartcodeAt()
console.log("chartcodeAt","i am racer".charCodeAt(0))
let lastIndexs = string.length - 1
console.log("chartcodeAt",string.charAt(lastIndexs)) // t

console.log("Indexof");
//indexof
let strin = '30 Days Of JavaScript'
console.log("indexof",strin.indexOf('D'))          // 3
console.log("indexof",strin.indexOf('Days'))       // 3
console.log("indexof",strin.indexOf('days'))       // -1
console.log("indexof",string.indexOf('JavaScript')) // 11

console.log("LastIndex");
//lastindexof
let strig = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log("lastindexof",strig.lastIndexOf('love'))       // 67
console.log("lastindexof",strig.lastIndexOf('you'))        // 63
console.log("lastindexof",strig.lastIndexOf('JavaScript')) //83

console.log("Concat");
//concat()
let strng = '30'
console.log("concat",strng.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
let coutry = 'Fin'
console.log("concat",coutry.concat("land")) // Finland

console.log("startwith");
//startwith()
let ring = 'Love is the best to in this world'
console.log("startwith",ring.startsWith('Love'))   // true
console.log("startwith",ring.startsWith('love'))   // false
console.log("startwith",ring.startsWith('world'))  // false

console.log("endwith");
//endwith()
let ing = 'Love is the most powerful feeling in the world'
console.log("endwith",ing.endsWith('world'))         // true
console.log("endwith",ing.endsWith('love'))          // false
console.log("endwith",ing.endsWith('in the world')) // true

console.log("Search");
//search()
let stri = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("search",stri.search('love'))          // 2
console.log("search",stri.search('JavaScript'))  // 7

console.log("Match");
//match()
let matchs = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("match",matchs.match('love'))
console.log("match",matchs.match(/love/gi))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
console.log("match",txt.match(/\d+/g)) // ["2019", "30", "2020"]
console.log("match",txt.match(/\d+/))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]

// gi = one type of modifier and searching mate use thau 6
console.log("Repeat");
//repeat
console.log("repeat","love".repeat(5))

console.log("Boolean");
//boolean
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
console.log(isLightOn,isRaining,isHungry,isMarried,truValue,falseValue)

console.log("Undefind");
//undefind
let fis = undefined
console.log(fis)
let fisrstName
console.log(fisrstName)

console.log("nul");
//null
let empty = null
console.log(empty) 


console.log("Array of Methods");


let arrs =[]
console.log(arrs) //null


let arr = new Array()
console.log(arr) //null


let ar = Array(8)
console.log(ar) //[empty × 8]

let arw = Array("AS")
console.log(arw) //[empty × 8]

let aqqa ='JavaScript'
console.log("aa nu split :",aqqa.split(''))

let aqqs = 'BMW,Jagure,Honda,Mercedece,Skoda,Kiw'
console.log("as nu split :",aqqs.split(','))

let sqqa = 'I love Racing.I love also Android java Coding.But Android java code like more than Racing'
console.log("sa nu word split kare 6 :",sqqa.split(" "))

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
console.log("finding value with Indexof",saaaas.indexOf("jklo"))  // 

//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
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
let wq = ["jk",10,"ds","dsd","sddssds",15,"gg"]
console.log(wq)
console.log(wq.toString())
let aw = ["jk",10,"ds","dsd","sddssds",15,"gg"]
let bw= aw.toString()
console.log(typeof bw)
let aq = 12;
let bq= aq.toString()
console.log(typeof bq)


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
console.log(rss.splice(5)) // [45, 54]
console.log(rss) // ['
console.log(rss.splice(0, 1))
console.log(rss)// 1 ['dad']
console.log(rss.splice(2, 1, "sa", "sa"))
console.log(rss) //(3) ['dad', 'sa', 'sa']



let sqsq = ["ds","dad","mother","son","grandmother",45,54]
console.log(sqsq)
//The pop() method removes (pops) the last element of an array.
//The pop() method changes the original array.
//The pop() method returns the removed element.

console.log(sqsq.pop()) //out ending
console.log(sqsq)

//The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.
let dx = sqsq.push("Kissawi");
console.log(dx) //add ending
console.log(sqsq)
console.log(sqsq.shift()) //remove first element
console.log(sqsq)
console.log(sqsq.unshift("sas"))  //add first element
console.log(sqsq)
console.log(sqsq.sort())
console.log(sqsq.reverse())


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
console.log(frontEnsd.toString());



let s = ["sarthi","Harshit","janik","siddharth"]
let d =["moin","ganesh",45,14]
let das = ["pratik","parshav",14,"rohit"] 
let dss = ["pratik",[47,152],"parshav",14,"rohit"] 

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
let concatone = s.concat(d)
let concattwo = s.concat(d,das)
let concatthree = s.concat(d,das,dss)
console.log(concatone)
console.log(concattwo) 
console.log(concattwo.length) 
console.log(concatthree) 
console.log(concatthree.length) 

//The constructor property returns the function that created the Array prototype.
let qf  = ["sarthi","Harshit","janik","siddharth"]
let con = qf.constructer
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

//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not execute the function for empty array elements.
//The reduce() method does not change the original array.

let ars = [470,9,64,49,36]
let aes = ars.reduce(lllll)
function lllll(total,jp) {
    return total - jp;
}
console.log("left to right :",aes)


let casr = [
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

console.log(casr);
console.table(casr);

//Grouping
casr.forEach(casr => {
console.group(`${casr.Address}`);
console.log(`${casr.Firstname}`);
console.log(`${casr.Middlename}`);
console.log(`${casr.Lastname}`);
console.groupEnd(`${casr.Address}`);
});

console.dir(casr)


//dir
var ska = [10, 20, 30];
console.dir(ska)
console.log("geek2 (dir) = ", ska);


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
casr.forEach(casr => {
console.group(`${casr.Firstname}`);
console.log(`This is ${casr.Firstname}`);
console.log(`${casr.Firstname} is ${casr.age} years old`);
console.log(`${casr.Firstname}  ${casr.Lastname} ${casr.Middlename} `);
console.groupEnd(`${casr.Firstname}`);
});
console.log('new section');


//testing
const ap = document.querySelector("p");     //from html tag printing elements
console.log(ap)

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
        

//operators
//Assignment operators
console.log("operators");
console.log("Assignment operators");
// = y is store x value
let  x = 10
let y = "s"
console.log("1:",x=y) //s
let  xw = "s"
let yw = 10
console.log("2:",xw=yw) //10
let  swa = "s"
let w = "a"
console.log("3:",swa=w) //a
let  sx = 10
let sy = 5
console.log("4:",sx =sy) //5

//x + y result is stored in x
//console.log("1:",sx += sy) //15
//console.log("2:",x += y)  //10s
//console.log("3:",xw += yw) //s10
//console.log("4:",swa += w) //sa
//console.log(sx =+ sy) //5


//x * y result is stored in x
//console.log("1:",sx *= sy) //50
//console.log("1:",sx =* sy) //error
//console.log("2:",x *= y) // nan
//console.log("3:",xw *= yw) // nan
//console.log("4:",swa *= w) // nan

//x - y result is stored in x
//console.log("1:",sx -= sy) //5
//console.log(sx =- sy) //-5
//console.log("2:",x -= y)  // nan
//console.log("3:",xw -= yw)  //nan
//console.log("4:",swa -= w) //nan

//x  / y result is stored in x
//console.log("1:",sx /= sy) //2
//console.log(s =/ y) //error
//console.log("2:",x /= y)  // nan
//console.log("3:",xw /= yw) //nan
//console.log("4:",swa  /= w) //nan

//x % y result is stored in x
//console.log("1:",sx %= sy) //0
//console.log(s =% y) //err
//console.log("2:",x %= y)  //nan
//console.log("3:",xw %= yw) //nan
//console.log("4:",swa %= w) //nan

//x ** y result is stored in x
// console.log("1:",sx **= sy) //100000
// console.log("2:",x **= y) // nan
// console.log("3:",xw  **= yw) // nan
// console.log("4:",swa **= w) //nan


console.log("comparison opertor");
console.log(" == , != ,> , < , <= , =>,===");
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
console.log("<=",Number <= Number) //true
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
console.log("==",null == null) //true
console.log("==",null == undefined) //true
console.log("==",Number == null) //false
console.log("==",Number == undefined) //false
console.log("==",Number == NaN) //false
console.log("==",Number == Number) //true
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
console.log("Arithmetic Operators");
let sm = 10,assas=20,ds ="ss",sd="gf";
console.log(sm+assas) //30
console.log(sm+ds) //10ss
console.log(ds+sd) //ssgf


console.log(sm-assas) //-10
console.log(sm-ds) //nan
console.log(ds-sd) //nan

console.log(sm*assas) //200
console.log(sm*ds) //nan
console.log(ds*sd) //nan

console.log(sm/assas) //0.5
console.log(sm/ds) //nan
console.log(ds/sd) //nan


console.log(sm%assas) //10
console.log(sm%ds) //nan
console.log(ds%sd) //anan

console.log(sm**assas) //100000000000000000000
console.log(sm**ds) //nan
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

console.log("Logical :")
console.log("&& ||  !");
//logical 
//&& ||  !

//&& ampersand 
console.log("&& ampersand");
const check = "5" > 4 && 14 > 5       //t & t = t
console.log(check)

const checkk =  "5" < "4" && 14 < "15"      //f & t = f
console.log(checkk)


const checskk =  "abc" < "ae" && 13 < "15"      //f & t = t
console.log(checskk)

const checkkk =  "5" < "4" && 14 < "12"     //f & f = f
console.log(checkkk)

console.log("|| pipe or operator");
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
console.log("! Negation");
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
console.log("Increment : ");
console.log("Pre - Increment :");
let count = 1
console.log("preincrement",++count)        // 2
console.log("preincrement",count)          //2

//Post-increment
console.log("Post-increment:");
let countt = 1
console.log("postincrement",countt++)        //1
console.log("postincrement",countt)          //2

//  Decrement
//Pre - Decrement
console.log("Decrement :")
console.log("Pre-Drecrement");
let coun = 0
console.log("Pre - Decrement",--coun)        // -1
console.log("Pre - Decrement",coun)          // -1

//Post - Decrement
console.log("Post-Drecrement");
let counn = 0
console.log("Post - Decrement",coun--)        // -1
console.log("Post - Decrement",coun)          // -2


//console.log(alert('ss'))
//console.log(prompt("s", "s"))
//console.log(prompt("s"))
//console.log(confirm("Are you sure you like his"))

//ternay opertors
console.log("ternay opertors");
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


    console.log("Date Methods");
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


console.log("IF anf else IF and If -Else Examples");
//if
if(2<3){
console.log("true")
}

let sad = true
if (sad){
console.log("false")
}


//if-else 

if(12<3)
{
console.log("true")
}
else{console.log("false")}

let sds = false
if (sds){
console.log("true")
}
else{console.log("false")}

//if-elseif-else
let am =10
if(am>=12){
console.log(am+">=false")
}
else if(a>=12){
console.log(am+">=false")
}
else if(a>=12){
console.log(am+"==true")
}
else if(a!=10){
console.log(am+"===true")
}
else{
console.log(am)
}


let sa = "Red"
if(sa==""){
console.log(sa+"==false")
}
else if(sa=="Green"){
console.log(sa+"==false")
}
else if(sa=="Blue"){
console.log(sa+"==false")
}
else if(sa=="White"){
console.log(sa+"==false")
}
else{
console.log("print pls sa value =",sa)
}

// let num1 = parseFloat(prompt("num1"))
// let num2 = parseFloat(prompt("num2"))
// let cals = prompt("+,/,-,*,**")
// let res
// if(cals == "+" )  {
//     res = num1 + num2
// }
// else if(cals == "-"){
//     res = num1 - num2
// }
// else if (cals == "*"){
//     res = num1 * num2
// }
// else if (cals == "/"){
//     res = num1 / num2
// }
// else{
//     res = num1 ** num2
// }
// console.log(`${num1} ${cals} ${num2} = ${res}`);

// console.log("Switch case");
// //switch
// const nu1 = parseFloat(prompt("Num").trim())
// const cal = prompt(`+,-,*,/,**`)
// const nu2 = parseFloat(prompt("Num").trim())
// let result 
// switch(cal){
//     case  "+" :
//        result = nu1 + nu2
//        console.log(`${nu1} + ${nu2} = ${result}` )
//        break

//     case  "-" :
//        result = nu1 - nu2
//        console.log(`${nu1} - ${nu2} = ${result}` )
//        break
//     case  "*" :
//        result = nu1 * nu2
//        console.log(`${nu1} * ${nu2} =  ${result}` )
//        break
//     case  "/" :
//        result = nu1 / nu2
//        console.log(`${nu1} / ${nu2} = ${result}` )
//        break
//     case  "**" :
//        result = nu1 ** nu2
//        console.log(`${nu1} ** ${nu2}  = ${result}` )
//        break
//     default:
//           console.log("Invalid any ")
//           break
// }

//cdds