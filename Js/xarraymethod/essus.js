// let countriesnameadd = ['Ahmedabad','Surat','Baroda','Navsari','Bhavnagar']

// for (let i = 0; i <countriesnameadd.length; i++) {
//     console.log(i+1 +' '+countriesnameadd[i]);
// }

// let countriesnam = countriesnameadd.map(names => names.toUpperCase())
// console.log(countriesnam);


// let allarray = ["js","css","html","react","android","Firebase"]
// let i
// for(i=0 ;i<allarray.length;i++){
//     if(i % 2){
//         let done =i+1+" "+allarray[i]
//         console.log("done = ",done) 
//     }
//     else{
//         let notdone = i+1+" "+allarray[i]
//         console.log("notdone = ",notdone) 
//     }
// }


// let allarray = [["js","css","html"],["react","android","Firebase"]]
// let [done ,notdone] = allarray
// console.log(done ,notdone);
// [done[0],done[1],done[2],notdone[0],notdone[1],notdone[3]] =
// [notdone[0],done[1],done[2],done[0],notdone[1],notdone[3]]
// console.log("Sway two  array one value value",done,notdone);

var Students = [
    {
      name: "Bob",
      marks: [78,80,89,90,68]
    },
    {
      name: "Alin",
      marks: [87,60,59,70,68]
    },
    {
      name: "bikash",
      marks: [82,60,79,60,80]
    }
  ];
  
  // Student avarage
  var averages = []
  for (let i = 0; i < Students.length; i++){
    var avg = average(Students[i].marks);
    console.log(Students[i].name + ": " + avg)
    averages.push(avg)
  }
  
  function average(array) {
    return array.reduce((total, mark) => total + mark, 0) / array.length;
  }
  