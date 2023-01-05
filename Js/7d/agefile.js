var ne = parseFloat(prompt("Enter a year")) 
var e = parseFloat(prompt("Enter a month")) // month(0-30)
var nne = parseFloat(prompt("Enter a day"))//day (0-11) 

if(e == "" && ne == "" && nne == ""){
    console.error("Any field is empy");
}



function ewew (){
    let current = new Date().getFullYear()
    console.log(current);
    current = current -1
    console.log(current);
    let age = current - ne
     console.log(age);    
     return age
    }
   
function ewewewew() {
    if(e < 13){
    let sda = new Date()
    console.log(sda);
    let cm =  sda.getMonth()
    console.log(cm);
    if(e > cm){
     cm = cm + 12
    }
    console.log(cm);
    let cumomth = cm - e
    console.log(cumomth);
    return cumomth
}
    else{
        console.log("Input IS Wrong");
    }

}
function ewewew() {
    if(e < 32){
    let cd = new Date().getDay()
    console.log(cd);
    if(nne > cd){
        cd = cd + 31
        console.log(cd);
       }
    let cudate = cd - nne
       console.log(cudate);   
       return cudate       
    } 
    else{
        console.log("Input IS Wrong");
    }
}
console.log('Age : ',`Year=${ewew()} Month=${ewewewew()} Date=${ewewew(nne)}`) 

