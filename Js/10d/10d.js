//set =Set is a collection of elements. 
     //Set can only contains unique elements.
     //duplicate value remove
    // Let us see how to create a set in the section below.

    //empty map and set
    //Boolean,String,Number,Nan = error
    //null , undefind = size{0}
let emptyset = new Set()
console.log("EmptySet",emptyset);    

let languages = ["Sanskrit","English","Gujarti","Hindi","English","Hindi","Gujarti"]
let setoflanguages = new Set(languages)
console.log(setoflanguages);

let language =  ["Sanskrit","English","Gujarti","Hindi","English","Hindi","Gujarti"]
let setoflanguage = new Set(language)
console.log(setoflanguage);
for(let s of setoflanguage){
    console.log(s);
}


//addelement
let company = new Set()
console.log("Sizeof Set",company.size);

company.add("Uptake")
company.add("Google")
company.add("BizzaapDev")
company.add("VI")
company.add("MicroSoft")
company.add("Uptake")

console.log("add element",company);

setOfCompanies = new Set()
for (const comany of company) {
  setOfCompanies.add(comany)
  console.log(comany);
}

//delete
console.log(company.delete("VI"));
console.log(company.size);
console.log(company);

//check
console.log(company.has("VI"));
console.log(company.has("Uptake"));

//clear
company.clear()
console.log(company);

//set example
let languagebig =  ["Sanskrit","English","English","Gujarti","Hindi","English","Hindi","Gujarti"]
let fd = new Set(languagebig)
console.log(fd);
console.log(fd.size);

let count =[]
for(let l of fd){
    let filteruse = languagebig.filter(lng => lng === l)
    console.log(filteruse);
    count.push({lang:l,count:filteruse.length})
}
console.log(count);

let numberseting = [4,5,6,8,4,5,8,6,4,2,5,7,52,5,4]
let setofanswer = new Set(numberseting)
console.log(setofanswer);

console.log("union");
//union :-To find a union to two sets can be achieved using spread operator.
 // Lets find the union of set A and set B (A U B)
 let a = [1,2,3,4,2,1,58,9,4,4]
 let b =[78,3,4,5,6,1]
 let c =[...a,...b]
 console.log("All merge =",c); //[1, 2, 3, 4, 2, 1, 58, 9, 4, 4, 78, 3, 4, 5, 6, 1]

 let A = new Set(a)
 console.log("A =",A); //1, 2, 3, 4, 58,9
 let B = new Set(b)
 console.log("B =",B); //78,3,4,5,6,1
 let C = new Set(c)
console.log("C =",C); //1,2,3,4,58,9,78,5,6

console.log("Intersection of sets");
//Intersection of sets
//To find an intersection of two sets can be achieved using filter. 
//Lets find the intersection of set A and set B (A ∩ B)
let aa = [1,2,3,4,2,1,58,9,4,4,3]
let bb =[78,3,4,5,6,1,1]
let AA = new Set(aa)
// console.log("Intersection",AA);
let BB = new Set(bb)
// console.log("Intersection",BB);
let cc = aa.filter(no => BB.has(no))
// console.log("Intersection",cc);
let CC = new Set(cc)
console.log(CC);

//Difference of sets
// To find an the difference between two sets can be achieved using filter. 
//Lets find the different of set A and set B (A \ B)
let qa = [1, 2, 3, 4, 5]
let qb = [3, 4, 5, 6]
let qA = new Set(qa)
let qB = new Set(qb)
let qc = qa.filter(num => !qB.has.num)
let qC = new Set(qc)
console.log("Difference of sets",qC)

console.log("ForEach");
let foreachinset = [1,2,47,75,4,4,5,44,7,99]
let foreachinsetoutput = new Set(foreachinset)
let text = ""
foreachinsetoutput.forEach (function(value) {
  text += value + " ";
})
console.log("foreach Set = ",text) // 1 2 47 75 4 5 44 7 99


//value
let valueset = [1,2,47,75,4,4,5,44,7,99]
let valueanswer = new Set(valueset.values())
let mext =''
for(let iooi of valueanswer ){
    mext += iooi + " " //1 2 47 75 4 5 44 7 99
}
console.log("value Set = ",mext);

// A Set has no keys.
// keys() returns the same as values().
// This makes Sets compatible with Maps.
let set = [1,2,47,75,4,4,5,44,7,99]
let keysets = set.keys();
let rkext =""
for (let iio of keysets)
{
    rkext += iio +" "
}
console.log("Keys Set = ",rkext)

//Entries
//A Set has no keys.
//entries() returns [value,value] pairs instead of [key,value] pairs.
let Entryset = [1,2,47,75,4,4,5,44,7,99,12]
let setmate = new Set(Entryset)
let Entrysets = setmate.entries();
console.log(Entrysets);
let rext =""
for (let io of Entrysets)
{
    rext += io + "   "
}
console.log("entries Set = ",rext);

//typeof set
let typeofset = [1,2,47,75,4,4,5,44,7,99]
let typeofsets = new Set(typeofset)
console.log("type of set = ",typeof typeofsets)

//instanseof set
let instanseofs = [1,2,47,75,4,4,5,44,7,99]
let instanseofsets = new Set(instanseofs)
console.log("instanceof of set",instanseofsets instanceof Set)


console.log("Map");
let map = new Map()
console.log(map);

let Bhasha = [["1","English"],
["2","Hindi"],
["3","Gujrati"],
["4","Sanskrit"]]
let ds = new Map(Bhasha)
console.log(ds);
console.log(ds.size);

//add use in map
ds.set('5','French')
console.log(ds);
console.log(ds.size);
console.log(Bhasha);

//geting a value from map
console.log(ds.get('2'));


// checking key in map
console.log(ds.has('5'));

for (const sd of  ds){
    console.log(sd);
}

for (const [number, lang] of ds){
 console.log(number, lang)
}

//delete
ds.delete("2")
console.log(ds.size);
console.log(ds);

//clear
ds.clear()
console.log(ds);

//foreach
let foreachmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let foremap = new Map(foreachmap)
console.log(foremap);
let texts= ""
let sfore = foremap.forEach(function (value){
    texts = texts + value + " "
})
console.log("foreach Map = ",texts);

//value
let valueasmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let valuemap = new Map(valueasmap)
console.log(valuemap);
let tets= ""
for (let s of valuemap.values()){
    tets = tets + s + " "
}
console.log("Value Map = ",tets);

//entries
let entriesasmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let entriesmap = new Map(entriesasmap)
console.log(entriesmap);
let reaxt = ""
for(let sa of entriesmap.entries()){
    reaxt = reaxt + " " + sa + " "
}
console.log("Entry Map = ",reaxt);

//keys
let keyasmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let keyasmaps = new Map(keyasmap)
console.log();
let qxet = ""
for(let sad of keyasmaps.keys()){
    qxet = qxet + " " + sad + " "
}
console.log("Keys Set",qxet);

//Typeof
let typeasmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let typeofmaps = new Map(typeasmap)
console.log(typeofmaps);
console.log("typeof map =",typeof typeofmaps);

//Instanceof
let Instanceofmap =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let Instanceofmaps = new Map(Instanceofmap)
console.log(Instanceofmaps);
console.log("check the map use instanceof = ",Instanceofmaps instanceof Map);


console.log("Instance of check");
// let x = "Sarthi"  //false
let x = new String("Sarthi") // true
console.log("check the String = ",x instanceof String); // true

let z =[["1","Suzuki"],["2","Honda"],["3","Jagure"],["4","BMW"]]
let ad = new Map(z)
console.log("check the map = ",ad instanceof Map);
console.log("check the Array = ",z instanceof Array);

let setss = [1,2,47,75,4,4,5,44,7,99]
let asetss = new Set(setss)
console.log("check a set",asetss instanceof Set)
console.log("check the Array = ",setss instanceof Array);


// let xx =  12 //false
let xx = new Number(undefined)  //true
console.log("check a number = ", xx instanceof Number);

let ysy = new Boolean(true) // true
console.log("check of boolean = ", ysy instanceof Boolean);

let jk = new Object("")
console.log("check of Object = ", jk instanceof Object);


// let yy =  new undefined() // error
// console.log("chek of undefind = ", yy instanceof undefined);

// let xxax = new Nan()  //error
// console.log("check a number = ", xxax instanceof Nan);
