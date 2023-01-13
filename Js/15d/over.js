console.log("Overidding method");
class company{
    constructor (
    fs = "Harshit",
    ls = "Vataliya",
    age = 69,
    country = "India",
    city ="Ahmedabad",
    owner ="Rajkot"
    ){
    // console.log(this);
    this.fs = fs
    this.ls = ls
    this.age =  age
    this.country = country
    this.city = city
    this.rank = 0
    this.skills = []
    this.owner = owner
    }
    getfullname(){
        let fullname = this.fs + ' ' + this.ls
        return fullname
    }
    get getrank(){
        return this.rank
    }
    get getskills(){
        return this.skills
    }
    set setrank(rank){
        rank +=rank
        return rank
    }
    set setskill(skill){
        this.skills.push(skill)
    }
    
    getfullname(){
        let fullname = this.fs + ' ' + this.ls
        return fullname
    }
    
    saynewthing(){
        let i = "I am a child of the person class."
        return i
    }

}
class School extends company{
   
constructor(fs,ls,age,country,city,owner,gender){
super(fs,ls,age,country,city,owner)
    this.gender =  gender
}
getMyinfo(){
    let fullname = this.getfullname()
    let skills = this.skills.length > 0 && this.skills.slice(0,this.skills.length).join(', ')      
    let pronoun = this.gender == 'Male' ? 'He'  : 'She'      
    let formaatedskills =  skills 
                              ? `${pronoun} knows ${skills}` 
                              :  ''
    let info = `My name is ${fullname}. I am ${this.age} year old. ${pronoun} lives ${this.city}. ${formaatedskills}`
    return info
}    
}

let comp1 = new School("Sarthi","Raval","21","India","Ahmedabad","India","Male")
let comp2 = new School("Janika","Kaneriya","22","India","Ahmedabad","America","Female")

comp1.rank = 1
comp1.skills = ["Raceing","Poetry","Smoking","Learning new thing"]
console.log(comp1.skills);
console.log(comp1.rank);

comp2.rank = 2
comp2.skills = ["Smoking","Learning new thing","Good Developing"]
console.log(comp2.skills);
console.log(comp2.rank);

console.table(comp1);

console.log(comp1.getskills)

console.log(comp1.getMyinfo())
console.log(comp2.getMyinfo())

console.log(comp1.saynewthing())
console.log(comp2.saynewthing())

console.log(comp1.getfullname())
console.log(comp2.getfullname())