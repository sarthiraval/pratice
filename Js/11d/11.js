//Destructuring :-
//is a way to unpack arrays, and objects and assigning to a distinct variable.
//Destructuring means to break down a complex structure into simpler parts.

console.log("Destructing Arrays");
let  arraydDestru = [ 1,2,3,4,5]
let [n1,n2,n3,n4,n5] = arraydDestru
let [skip1,,skip3,skip4,skip5] = arraydDestru
let [,sk2,,,sk5] = arraydDestru
console.log("normal in out =",n1,n2,n3,n4,n5);
console.log("skip one value in out = ",skip1,skip3,skip4,skip5);
console.log("skip multiple value in out = ",sk2,sk5);


let objeDestru = "Sarthi"
let [o1,o2,o3,o4,o5,o6] = objeDestru
console.log("normal in out = ",o1,o2,o3,o4,o5,o6);
//in swap 
[o1,o2,o3,o4,o5,o6] = [o3,o2,"v",o2,"l","Sarthi"]
console.log("swap value =",o1,o2,o3,o4,o5,"",o6);


let namegf = ["janik","Sid","Harshit","Moin"]
let[ng1,ng2,ng3,ng4] = namegf
console.log("normal in out =  ",ng1,ng2,ng3,ng4);
//in swap
[ng1,ng2,ng3,ng4] = [ng4,ng3,ng2,ng1] 
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

// [done,notdone] =[notdone,done]
// console.log("Sway two arrayfull value",done,notdone);

[done[0],done[1],done[2],notdone[0],notdone[1],notdone[2]] =
[notdone[0],done[1],done[2],done[0],notdone[1],notdone[2]]
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
console.log("Swap value = ",ls,fs);

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
let [mm1,...rst] =mark
console.log(mm1,rst);
let[ss1,...rew] = subject

console.log(ss1,rew);
console.log(mm1,rst,ss1,rew);
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

let company = {
    ownername :"Sarthi Raval",
    companyname : "SSR",
    office : "Ahmedabad",
    country : "India",
    groupofIndustries :[
        "Texttiles","IT Industries","Network Growth","Ecommerce web-app",
        "Car - Bike","Oil Industries"
    ],
    branchs:["Kuchchh","Mumbai","Kolkata","Jamu"]
}
console.table(company);
console.log("Without Destructuring")
let compnayfutureplane = plan =>{
    let improvement = plan.groupofIndustries
    let formate = improvement.slice(0,6).join(" ,")
    let branch = plan.branchs
    let branchme = branch.slice(0,-1)
    comanyfp = `My name is a ${plan.ownername}.\nMy Compnay Name is ${plan.companyname}.\n${plan.companyname} main office in ${plan.office}.\nI am from ${plan.country}.\n${plan.companyname} has many frenchise like a,${formate}.\nI want to grow two frenchise which are ${plan.groupofIndustries[1]} & ${plan.groupofIndustries[4]}.\nMy Company Branchies are in ${branchme} & ${plan.branchs[3]} like these beautiful cities.\nMy company's future plan is to grow in ${plan.office} city.`
    return comanyfp
}
console.log(compnayfutureplane(company));


console.log("With Destructuring")
let compnayfutureinfo = ({
    ownername,companyname,office,country,groupofIndustries,branchs
}) => {
    let formate = groupofIndustries.slice(0,6).join(" ,")
    let branchme = branchs.slice(0,-1)
    comanyfp = `1.My name is a ${ownername}.\n2.My Compnay Name is ${companyname}.\n3.${companyname} main office in ${office}.\n4.I am from ${country}.\n5.${companyname} has many frenchise like a,${formate}.\n6.I want to grow two frenchise which are ${groupofIndustries[1]} & ${groupofIndustries[4]}.\n7.My Company Branchies are in ${branchme} & ${branchs[3]} like these beautiful cities.\n8.My company's future plan is to grow in ${office} city.`
    return comanyfp
}
console.log(compnayfutureinfo(company));

let circleradius = {
    radius :2,
    dimesonce : 4  
}
// Without destructuring
let clcircler = circle=>{
      let r =  2 / circle.dimesonce 
      return r
}

// With destructuring
let clcircled = ({radius}) =>{
    let d = 2 * radius
    return d
}
console.log(`radius = ${clcircler(circleradius)} , dimesonce = ${clcircled(circleradius)}`);


console.log("Destructuring object during iteration")
let ji =[
{
    fs : 'Sarthi',
    ls : 'Raval',
    subject :{
        math : 45,
        science :46,
        economice : 49
    }
},
{
    fs : 'Sid',
    ls : 'Soni',
    subject :{
        math : 14,
        science :11,
        economice : 10
    }
},
{
    fs : 'Janik',
    ls : 'Kanariya',
    subject :{
        math : 25,
        science :26,
        economice : 29
    }
}
]
console.table(ji);

ji.map(sd=> console.table(sd.fs,sd.subject.math + sd.subject.science+sd.subject.economice));

let totalmard = []
ji.forEach(student => {
    totalmard.push({
        fs : student.fs,
        marks : Object.values(student.subject).reduce((a,b) => a + b ),
        markas : Object.values(student.subject).reduce((x,y) => x + y),
    })
})
console.table(totalmard);
ji.map(sd=> console.log(sd.fs,sd.subject));

let totalmar = []
ji.forEach(student => {
    totalmar.push({
        fs : student.fs,
        toe : student.subject.math+ student.subject.economice + student.subject.science,
    })
})
console.table(totalmar);


for (var i=0;i<ji.length; i++){
     let toe = ji[i].subject.math+ ji[i].subject.economice + ji[i].subject.science
     let fds =ji[i].fs 
     let lds = ji[i].ls 
     let pder = toe * 100 /3 
    console.table(toe ,fds,lds,pder);
}

