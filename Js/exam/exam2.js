let car = [
    {
        "Firstname" : "Sarthi",
        "Middlename":"Shaileshkumar",
        "Lastname" : "Raval",
        "age" : "14",
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : {
            "phonenumber" :{
                 "VI":"60701",
                 "Airtal": "51141350",
                 "JIO" : "13072322"
            }
        },
        "Address": {
         
                    "City_name": "Rajkot",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
                     
            
    
        }
    }
    , {
        "Firstname" : "Siddhaarth",
        "Middlename":"Harshadbhai",
        "Lastname" : "Soni",
        "age" : "14",
        "register" : new Date(),
        "hoobies" : "Racer",
        "phone" : {
            "phonenumber" :{
                 "VI":"9726760",
                 "Airtal": "635350",
                 "JIO" : "972322"
            }
        },
        "Address": {
         
                    "City_name": "Rajkot",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
                     
            
    
        }
    }
 ,  {
        "Firstname" : "Janik",
        "Middlename":"Nileshbhai",
        "Lastname" : "Kanariya",
        "age" : "22",
        "register" : new Date(),
        "hoobies" : "PhotoGraphey",
         "phone" : {
            "phonenumber" :{
                 "VI":"701",
                 "Airtal": "107",
                 "JIO" : "801"
            }
        },
         "Address": {
         
                    "City_name": "ahmedabad",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
                     
            
    
        }
    }
,
    {
        "Firstname" : "yash",
        "Middlename":"Dineshbhai",
        "Lastname" : "Rabari",
        "age" : "22",
        "register" : new Date(),
        "hoobies" : "Developing",
        "phone" : {
            "phonenumber" :{
                 "VI":"9726760701",
                 "Airtal": "6351141350",
                 "JIO" : "9913072322"
            }
        },
        "Address": {
         
                    "City_name": "Ahmedabad",
                    "Area_name": "Naranpura",
                    "Pincode" : "380012",
                    "Socity_name":"Surya house",
                    "Block_Number" : "164/1958"
                     
            
    
        }
    }
]

console.log(car);
console.table(car);
console.dir(car)

//car.map(sd=> console.log(sd.Address.City_name));

//car.map(sd=> console.log(sd.Address.City_name == "Ahmedabad"));



// let cars =prompt();
// let a = car.filter(car => car.Address.City_name === cars)
// a.map(ab => console.log(ab))


let c = car.filter(car => car.Address.City_name === "ahmedabad" || car.Address.City_name === "Ahmedabad");
c.map(ab => console.log(ab.Address))


//map return kar 6
//foreach return nthi kartu te ema  undefined

//map new array ganrate karine output ape 6
//foreach ena aej array ma thi vastu find kari ne output ape 6
//c.forEach(ab => return (ab.Address.City_name))

//filter = koi pan  array element ni under jai ne vastu ne find
//filter = The filter() method takes each element in an array and it applies a conditional statement against it
//map=The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array
//map =koi pan arry element par opertion perform karva mate

// let cars =prompt();
// let a = car.filter(car => car.Firstname === cars)
// a.map(ab => console.log(ab.Address))


// let cars =prompt();
// let a = car.filter(car => car.phone.phonenumber.VI === cars)
// a.map(ab => console.log(ab))