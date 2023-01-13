class company{
    constructor (
    fs = "Harshit",
    ls = "Vataliya",
    age = 69,
    country = "India",
    city ="Ahmedabad",
    owner ="Rajkot"
    ){
    console.log(this);
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
    getMyinfo(){
        let fullname = this.getfullname()
        let skills = this.skills.length > 0 && this.skills.slice(0,this.skills.length).join(', ')      
        let formaatedskills =  skills 
                                  ? `He knows ${skills}` 
                                  :  ''
        let info = `My name is ${fullname}. I am ${this.age} year old. He lives ${this.city}. ${formaatedskills}`
        return info

    }

    static allfavoriteSkill(){
        let skills = ["Raceing","Poetry","Smoking","Learning new thing"]
        let ind = Math.ceil(Math.random() * skills.length)
        return skills[ind]
    }
    static datesee(){
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() +1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if(hours < 10){
            hours = '0' + hours
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }
        let datemonthyear = `${date}.${month}.${year}`
        let time = `${hours}:${minutes}`
        let fullshow = `${datemonthyear} ${time}`
        return fullshow
    }
}
console.log(company.allfavoriteSkill());
console.log(company.datesee());

new company("Moin","Rangarez","90","India","Ahmedabad","No any one")
new company("Sid","Soni","21","India","Ahmedabad","No any one")
new company()

let comp1 = new company("Sarthi","Raval","21","India","Ahmedabad","India")
let comp2 = new company("Janik","Kaneriya","22","India","Ahmedabad","America")


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

// console.log(comp1.allfavoriteSkill);
// console.log(comp2.allfavoriteSkill);

// console.log(comp1.datesee);
// console.log(comp2.datesee);


class MyOffice extends company{
    saynewthing(){
        let i = "I am a child of the person class."
        return i
    }
}

let s1 = new MyOffice("Krishana","Bhatt","19","India","Ahmedabad","India")
console.log(s1);
console.log(s1.saynewthing());
console.log(s1.getfullname());
console.log(s1.getMyinfo());
