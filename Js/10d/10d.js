//set =Set is a collection of elements. 
     //Set can only contains unique elements.
     //duplicate value remove
    // Let us see how to create a set in the section below.

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
 let b =[78,3,4,5,6,1,1]
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
console.log("Intersection",AA);
let BB = new Set(bb)
console.log("Intersection",BB);
let cc = aa.filter(no => BB.has(no))
console.log("Intersection",cc);
let CC = new Set(cc)
console.log(CC);

//Difference of sets
// To find an the difference between two sets can be achieved using filter. 
//Lets find the different of set A and set B (A \ B)
let qa = [1, 2, 3, 4, 5]
let qb = [3, 4, 5, 6]

let qA = new Set(qa)
let qB = new Set(qb)

let qc = qa.filter((num) => !qB.has(num))
let qC = new Set(qc)

console.log(qC)
