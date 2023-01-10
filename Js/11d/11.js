//Destructuring :-
//is a way to unpack arrays, and objects and assigning to a distinct variable.
//Destructuring means to break down a complex structure into simpler parts.

console.log("Destructing Arrays");
let  arraydDestru = [ 1,2,3,4,5]
let [n1,n2,n3,n4,n5] = arraydDestru
let [skip1,,skip3,skip4,skip5] = arraydDestru
let [,sk2,sk3,,sk5] = arraydDestru
console.log("normal in out =",n1,n2,n3,n4,n5);
console.log("skip value in out = ",skip1,skip3,skip4,skip5);
console.log("skip value in out = ",sk2,sk3,sk5);


let objeDestru = "Sarthi"
let [o1,o2,o3,o4,o5,o6] = objeDestru
console.log("normal in out = ",o1,o2,o3,o4,o5,o6);

let namegf = ["janik","Sid","Harshit","Moin"]
let[ng1,ng2,ng3,ng4] = namegf
console.log("normal in out =  ",ng1,ng2,ng3,ng4);
//in swap
[ng1,ng2,ng3,ng4] = [ng2,ng3,ng4,ng1] 
console.log("Swap value = ",ng1,ng2,ng3,ng4);

let floatvalut = [1.0,1.2,25.1,45.6]
let [f1,f2,f3,f4] = floatvalut
console.log("Normal value =",f1,f2,f3,f4);
//in swap
[f1,f2,f3,f4] = [f2,f4,f1,f3] 
console.log("Swap value = ",f1,f2,f3,f4);

let allarray = [["js","css","html"],["react","android","Firebase"]]
let [done ,notdone] = allarray
console.log(done ,notdone);
[done[0],done[1],done[2]] [notdone[0],notdone[1],notdone[3]]
console.log(done,notdone);

[done,notdone] =[notdone,done]
console.log("Sway two arrayfull value",done,notdone);

[done[0],done[1],done[2],notdone[0],notdone[1],notdone[3]] <=
[notdone[0],done[1],done[2],done[0],notdone[1],notdone[3]]
console.log("Sway two  array one value value",done,notdone);

const nswq = [undefined,"ios","mac",undefined,"ubantu"]
let[
    fs2  ="window",
    fs3,
    fs4,
    fs5 = "Karli",
    fs6
] = nswq
console.log(fs2,fs3,fs4,fs5,fs6);



// Destructuring during iteration
let desy = [["js","css","html"],["react","android","Firebase"],["nodejs","ios",'bootstamp']]
for(let [dones,notdones,verydones] of desy){
console.log("AllAnswer = ",dones,notdones,verydones);
}

//destruting use swap
let swaping = ["1000","20000"]
let [s1,s2] = swaping
console.log("normal value = ",s1,s2);
[s1,s2] =[s2,s1]
console.log("Swap value = ",s1,s2); 

//Mutating means changing the value of an element.
//mutate array with destruting swap
let mutetate = ["Sarthi","Raval"]
console.log("normal value = ",mutetate);
// let [m1,m2] = mutetate
// console.log(m1,m2);
// [m1,m2]= [m2,m1]
[mutetate[0],mutetate[1]] = [mutetate[1],mutetate[0]]
// console.log(m1,m2);
console.log("Swap value = ",mutetate);

//destring object
//Objects (key,value) and swap value
let objectdestru = {fs :"Sarthi",ls:"Raval"}
let {fs,ls} = objectdestru
console.log("normal value = ",fs,ls);
[fs,ls]  = [ls,fs]
console.log("Swap value = ",fs,ls);

//renamed object value
console.log("renamed object value");
let objerename = {fss:"sarthi",lss:"Raval"}
let {fss:s,lss:ss,sms:ssr} = objerename
console.log("renamed object value =",s,ss,ssr); //sarthi Raval undefined


let objerenames = {fsss:"sarthi",lsss:"raval"}
let {fsss,lsss,sms = "shaileshkumar"} = objerenames
console.log("renamed object value =",fsss,sms,lsss); 


let objerenamesall = {fsssall:"sarthi",lsssall:"raval",smsall : "21"}
let {fsssall,lsssall,smsall = "shaileshkumar"} = objerenamesall
console.log("renamed object value =",fsssall,lsssall,smsall); 

console.log("Spread operator to get the rest of array elements");
//We can not assign variable to all the elements in the array.
//We can destructure few of the first and we can get the remaining as array using spread operator(...).
let spnum = [1,2,3,4,5,6,7,8,9,10,11]
let [spn1,spn2,spn3,... rest] = spnum
console.log(spn1,spn2,spn3,rest);


console.log("Spread operator to copy array");
let subject = ["English","Maths","Gujrati","Account"]
let mark =[90,95,97,96]
let subjects = [...subject]
let marks =[...mark]
let allnumbering = [...subject,...mark]
console.log(allnumbering); 
console.log(marks);
console.log(subjects);


console.log("Spread operator to copy object");
let user = {fm :"sarthi",mm:"Raval",country:"India"}
let usercopy = {...user}
console.log("Spread operator to copy object = ",usercopy)

console.log("Spread operator with arrow function");
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. 
//If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
let seeve = (...args) =>{
    console.log(args);
}
seeve(11,12,13,14,15)

let total = (...sum) =>{
   let sums = 0
   for(let k of sum){
    sums += k
   }
   return sums
}
console.log("Total value",total(10,20,30,40,50,60));

console.log("Object parameter without destructuring");
// Without destructuring
let react = {
    w : 20,h :30
}
let cal  = reactangle =>{
    return 2 + reactangle.w + reactangle.h
}
// With destructuring
console.log(cal(react));

 