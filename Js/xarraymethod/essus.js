r = Number + 2
rq = Number - 2



//console.log(r);

console.log(rq);

let obj1 = {
    name : "sid",
    age : 23,
    social : {
        "insta" : "Sid@123",
        "face" : "sidhu"
    }
    ,
    Address: {

                    "City_name": "Ahmedabad",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
                     
            
    
        }
}

//Object.getOwnPropertyDescriptor = a data descriptor is a property that has a value, which may or may not be writable.
let du = {...obj1} // 1 level deep 
let du2 = Object.assign({},obj1) // 1 level deep 
console.log(du.name = "Janik");
console.log(du2.name = "Janik");
console.log(obj1.name);


let duq = {...obj1} // 1 level deep 
let duqq = Object.assign({},obj1) // 1 level deep 

console.log(du.Address.City_name   = "Naranpura");
console.log(obj1.Address.City_name);
console.log(duqq.Address.City_name = "Naranpura");
console.log(obj1.Address.City_name);


let writabledata = { 
    ss  :"21" ,
    hello : function(){
      console.log("Why");
    },
    sss :'45',
    lklj :"saw"
  }
  const descriptor1 = Object.getOwnPropertyDescriptor(writabledata, 'ss');  
  console.log(descriptor1.enumerable);
  console.log(descriptor1.configurable);

Object.defineProperty(writabledata,'sss',{enumerable:false})
console.log(Object.keys(writabledata)); 
Object.defineProperty(writabledata,'ss',{enumerable:true})
console.log(Object.keys(writabledata)); 
Object.defineProperty(writabledata,'ss',{enumerable:false})
console.log(Object.keys(writabledata)); 
Object.defineProperty(writabledata,'ss',{enumerable:true})
console.log(Object.keys(writabledata)); 

Object.defineProperty(writabledata,'ss',{writable: true})
writabledata['ss'] = "Sarthi";
console.log("defineProperty true =",writabledata.ss);
Object.defineProperty(writabledata,'ss',{writable:false})
writabledata['ss'] = "Harshit"
console.log("defineProperty false = ",writabledata.ss);

let aqaq = {  
  ss :"f",
  ssq  :"21" ,
  helloq : function(){
    console.log("dwew");
  },
  sssq :'45',
}
// console.log(aqaq);

let  opof=Object.defineProperty(aqaq,'ssq',{configurable:false})
console.log(opof);
console.log(Object.defineProperty(aqaq,'ssq',{configurable:false}))
console.log( Object.defineProperty(aqaq,'ssq',{enumerable:true}))
console.log(Object.keys(aqaq)); 



let animal = {
    eats :true,
    eat :false
  }
  const object1 = Object.create(animal);  
  
  console.log((Object.getPrototypeOf(object1) === animal));
  console.log((Object.getPrototypeOf(object1.eats) === animal.eats));


  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);