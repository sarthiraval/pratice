let jsone = `{

    "Sarthi" : {
        "surename" : "raval",
        "email" : "ssr205@gmail.com",
        "age" : "21",
        "skills" : ["Raceing","Poetry","Smoking","Learning new thing"],
        "phonenumber" :{
            "Blackbarry" : "India",
            "Nokia" : "Finland",
            "Samsung" : "South Korean"
        }
    }
    ,
    "Janik" : {
        "surename" : "kanariya",
        "email" : "jk@gmail.com",
        "age" : "22",
        "skills" : ["Listing","Poetry","Smoking","Learning new thing"],
        "phonenumber" :{
            "Lenovo" : "Hong Kong"
        }
    }
    ,
    "Sid" : {
        "surename" : "soni",
        "email" : "sidu@gmail.com",
        "age" : "25",
        "skills" : ["Raceing","Poetry","Smoking","Communication"],
        "phonenumber" :{
            " Germany" : "Tiptel"
        }
    },
    "moin" : {
        "surename" : "rangrez",
        "email" : "moin@gmail.com",
        "age" : "52",
        "skills" : ["Cricket","Poetry","Smoking","Communication"],
        "phonenumber" :{
            "France" : "Wikro"
        }
    }
    ,
    "harshit" : {
        "surename" : "vataliya",
        "email" : "harshit@gmail.com",
        "age" : "5",
        "skills" : ["Ios","Poetry","Smoking","Communication"],
        "phonenumber" :{
            "Japan" : "Sony"
        }
    }
    ,
    "aaryan" : {
        "surename" : "soni",
        "email" : "aaryan@gmail.com",
        "age" : "1",
        "skills" : ["no skills"],
        "phonenumber" :{
            "Latvia" : "Just5"
        }
    }
    ,
    "Ganesh" : {
        "surename" : "Loti",
        "email" : "ganeh@gmail.com",
        "age" : "22",
        "skills" : ["no skills"],
        "phonenumber" :{
            "Pakistan" : "QMobile"
        }
    }
    ,
    "Keval" : {
        "surename" : "Moti",
        "email" : "keval@gmail.com",
        "age" : "25",
        "skills" : ["noskil"],
        "phonenumber" :{
            " Malaysia" : "M Dot"
        }
    },
    "Kevin" : {
        "surename" : "christian",
        "email" : "Kevin@gmail.com",
        "age" : "52",
        "skills" : ["Node js","Poetry","Smoking","Communication"],
        "phonenumber" :{
            "South Africa" : "Cell C"
        }
    }
    ,
    "Kartik" : {
        "surename" : "Raval",
        "email" : "kartik@gmail.com",
        "age" : "12",
        "skills" : ["Android","Poetry","Smoking","Communication"],
        "phonenumber" :{
            "Russia" : "MTS"
        }
    }
}`

let userobjr = JSON.parse(jsone)
console.log(userobjr);

let objectuse = JSON.parse(jsone,(key,value) =>{
    let neval = typeof value == 'string' && key != "email" ? value.toUpperCase() : value
    return neval
    })
console.log(objectuse);

let du3 = JSON.parse(JSON.stringify(jsone))  
console.log(du3);

let filterue = JSON.parse(JSON.stringify(jsone,["fs","surename","age"]))
console.log(filterue);

let jsonone = {
    "fs" : "Krishna",
    "surename" : "Bhatt",
    "email" : "krishna@gmail.com",
    "age" : "18",
    "skills" : ["Android","Poetry","Smoking","Communication"],
    "phonenumber" :{
        "Russia" : "MTS"
    }
}

let filteruse = JSON.stringify(jsonone,["fs","surename","age"])
console.log(filteruse);

console.log(typeof filteruse); // String
console.log(typeof userobjr); // object