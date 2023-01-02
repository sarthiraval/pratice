//Loops are used in JavaScript to perform repeated tasks based on a condition.
//Conditions typically return true or false . 
//A loop will continue running until the defined condition returns false .

//for - A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
// for (let i = 0; i < c.length - 1; i++) {
//     texst += c[i]
// }console.log(text)

//do while -  The do...while statement repeats until a specified condition evaluates to false.
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

//while -A while statement executes its statements as long as a specified condition evaluates to true. 
// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

// break statement
// Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

// continue statement
// The continue statement can be used to restart a while, do-while, for, or label statement.
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

//for in statement
//The for...in statement iterates a specified variable over all the enumerable properties of an object


// for...of statement
// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on),invoking a custom iteration hook with statements to be executed  for the value of each distinct property.
//let div = 0
// for(let y of fd){
//     sum -= y
// }
// console.log(div)

//different betwen forin and for of
// Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.
// The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.


//while =
    // while — loops through a block of code as long as the condition specified evaluates to true.
    // do…while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.
    // for — loops through a block of code until the counter reaches a specified number.
    // for…in — loops through the properties of an object.
    // for…of — loops over iterable objects such as arrays, strings, etc.

// let hf = prompt("Enter a number")
// for(let i =1 ; i <=hf;i++)
// {
//     console.log(`${i} * ${i} = ${i*i}`)
// }


// let number = parseInt(prompt('Enter an number: '));
// let number1 = parseInt(prompt('Enter a number: '));
// for(let i = 1; i <= number1; i++) {
//     let result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

for (let i = 1; i <= 3; i++) {
    console.log(i)
}
for (let k = 3; k >= 1; k--) {
    console.log(k)
}


var num = 0
for(var u=1; u < 10; u++){
     num = num + u;
}
console.log(num);

var num = 0
for(var u=1; u < 10; u++){
     num = num - u;
}
console.log(num);

var num = 1
for(var u=1; u <= 10; u++){
     num = num * u;
}
console.log(num);

var num = 1
for(var u=1; u <= 10; u++){
     num = num / u;
}
console.log(num);

var num = 2
for(var u=1; u <= 10; u++){
     num = num ** u;
}
console.log(num);

let c = ["BMW", "Honda", "Audi", "Ford", "Jagure", "Mercidies"]
let text = ""
for (let i = 0; i < c.length; i++) {
    text += c[i]
}
console.log(text)

let texst = ""
for (let i = 0; i < c.length - 1; i++) {
    texst += c[i]
}
console.log(texst)

let d = ["india", "Aus", "Pakisatan", "Dubai", "England"]
let up = []
for (let o = 0; o < d.length; o++) {
    up.push(d[o].toUpperCase())
}
console.log(up)


let lo = []
for (let o = 0; o < d.length; o++) {
    lo.push(d[o].toLowerCase())
}
console.log(lo)


let fd =  [12 ,14 ,17 ,19, 15 ,10 ,9]
let f = []
for (let j = 0; j < fd.length; j++) {
    f.push(fd[j] ** 2)
}
console.log(f)

let s = []
for (let j = 0; j < fd.length; j++) {
    s.push(fd[j] + 1)
}
console.log(s)


let m = []
for (let j = 0; j < fd.length; j++) {
    m.push(fd[j] - 1)
}
console.log(m)

let g = []
for (let j = 0; j < fd.length; j++) {
    g.push(fd[j] * 2)
}
console.log(g)

let di = []
for (let j = 0; j < fd.length; j++) {
    di.push(fd[j] / 2)
}
console.log(di)


var fd3 = ["12","14","17","19","15","10","9"];
var multi=1;
for (var i = 0; i < fd3.length; ++i) {
    multi *= fd3[i];
}
console.log(multi);

var fd4 = ["12","14","17","19","15","10","9"];
var multi=1;
for (var i = 0; i < fd4.length; ++i) {
    multi /= fd3[i];
}
console.log(multi);

var fd4 = ["12","14","17","19","15","10","9"];
var multi=0;
for (var i = 0; i < fd4.length; ++i) {
    multi -= fd4[i];
}
console.log(multi);

var fd4 = ["12","14","17","19","15","10","9"];
var multi=2;
for (var i = 0; i < fd4.length; ++i) {
    multi **= fd4[i];
}
console.log(multi);


//while
let w = 0
while(w<=5)
{
    console.log(w)
    w++
}
// 0 1 2 3 4 5

let arr = [1, 5, 4, 6, 7];
let sum = 0;
while (arr.length > 0) {
    sum += arr.pop();
}

console.log(sum);

let y = 0
do {
  console.log(y)
  y++
} while (y <= 5)

// 0 1 2 3 4 5

//  For odd even

for(let wq = 0; wq<=2; wq++){
    if(wq === 0){
        console.log(wq + " is even");
    }
    else if(wq % 2 === 0){
        console.log(wq + " is even");
    }
    else{
        console.log(wq + " is odd");
    }
}


for(let qa = 1; qa<=5; qa++){
    console.log("*".repeat(qa));        //  * ** *** *****
}

// random hexa number

const hexa = () => {
    let n = (Math.random() *  0xfffff  * 1000000).toString(16)
    return "#" + n.slice(0,6)
}
console.log(hexa())




const fruitt = ["Banana", "Kiwi", "Dragon Fruit", "Pineapple", "Berry", "Avocado"]

for(const fru of fruitt){
    console.log(fru.toUpperCase());     // BANANA, KIWI, DRAGON FRUIT, PINEAPPLE, BERRY, AVOCADO
}


for(const fru of fruitt){
    console.log(fru[0]);        // B K D P B A as first letter of word
}

for (let index = 0; index < fruitt[0].length; index++) {
    const element = fruitt[index];
    console.log(element);
    
}



const frt = ["Banana", "Kiwi", "dragon Fruit", "Pineapple", "Berry", "Avocado"]
const newf = []

for(const fr of frt){
    newf.push(fr.toUpperCase())
}
console.log(newf);      //  ['BANANA', 'KIWI', 'DRAGON FRUIT', 'PINEAPPLE', 'BERRY', 'AVOCADO']

let dseee =[1,2,3,4,5,6,74,89]
let sumq = 0
for (const nqum of dseee) {
  sumq = sumq + nqum  
	}
console.log(sumq) 

let mq = 0
for (const um of dseee) {
  mq = mq - um  
	}
console.log(mq) 

let dseeed =["1","2","3","4","5","6","74","89"]
let mwq = 1
for (const uwm of dseeed) {
  mwq = mwq * uwm  
	}
console.log(mwq) 


let seeed =["1","2","3","4","5","6","74","89"]
let wq = 1
for (const uwum of seeed) {
  wq = mwq / uwum  
	}
console.log(wq) 

//  Break

for(let iq =0; iq <= 10; iq++){
   // break 0to 5
    if( iq == 7){
        break
    }
    console.log(iq);    //  0 to 6
}

//  Continue

for(let id =0; id <= 10; id++){
    if( id == 2){
        continue
    }
    console.log(id)
    //  0 to 10  skips 2
}


let sums = 0;
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    sums += number;
    number = parseInt(prompt('Enter a number: '));
}

console.log(`The sum is ${sums}.`);

let suwm = 0;
let numberw = 0;

do {
    suwm += numberw;
    numberw = parseInt(prompt('Enter a number: '));
} while(numberw >= 0)
console.log(`The sum is ${suwm}.`);
