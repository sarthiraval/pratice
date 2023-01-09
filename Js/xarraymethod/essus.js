let countriesnameadd = ['Ahmedabad','Surat','Baroda','Navsari']

for (let i = 1; i <= countriesnameadd.length; i++) {
    console.log(i);
}

let countriesnam = countriesnameadd.map(names => names.toUpperCase())
console.log(countriesnam);