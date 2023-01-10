// let countriesnameadd = ['Ahmedabad','Surat','Baroda','Navsari','Bhavnagar']

// for (let i = 0; i <countriesnameadd.length; i++) {
//     console.log(i+1 +' '+countriesnameadd[i]);
// }

// let countriesnam = countriesnameadd.map(names => names.toUpperCase())
// console.log(countriesnam);


let allarray = ["js","css","html","react","android","Firebase"]
let i
for(i=0 ;i<allarray.length;i++){
    if(i % 2){
        let done =i+1+" "+allarray[i]
        console.log("done = ",done) 
    }
    else{
        let notdone = i+1+" "+allarray[i]
        console.log("notdone = ",notdone) 
    }
}


    
