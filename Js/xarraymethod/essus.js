let countriesnameadd = ['Ahmedabad','Surat','Baroda','Navsari']

for (let i = 0; i <countriesnameadd.length; i++) {
    console.log(i+1 +''+countriesnameadd[i]);
}

let countriesnam = countriesnameadd.map(names => names.toUpperCase())
console.log(countriesnam);

