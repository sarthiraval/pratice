class company{
    constructor (
    fs = "Harshit",
    ls = "Vataliya",
    age = 69,
    country = "India",
    city ="Ahmedabad"
    ){
    console.log(this);
    this.fs = fs
    this.ls = ls
    this.age =  age
    this.country = country
    this.city = city
    }
    getfullname(){
        let fullname = this.fs + ' ' + this.ls
        return fullname
    }
}


let comp1 = new company("Sarthi","Raval","21","India","Ahmedabad")
let comp2 = new company("Sid","Soni","21","India","Ahmedabad")
let comp3 = new company("Janik","Kaneriya","21","India","Ahmedabad")
let comp4 = new company()
console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);


