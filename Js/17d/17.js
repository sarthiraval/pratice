let  callback =  callback=>{
    setTimeout(() =>{
        let car = ["Honda","Jagure","Audi"]
        callback("I love this ",car)
        callback(false,car)
    },4000)
}
let call = (err,result) => {
    if(err){
        return console.log(err);
    }
    return console.log(result);

}
callback(call)


let promise = new Promise((resolve,reject)=>{
    resolve("success")
    reject("fail")
})
console.log(promise);

//resolve
let dany = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let car = ["Honda","Jagure","Audi"]
        if(car.length > 0){
            resolve(car)
        }
        else{
            reject("It is bad")
        }
    },4000)
})

dany.then(result =>{console.log(result)}).catch(e => console.log(e))


//reject
let danys = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let car = ["Honda","Jagure","Audi"]
        if(car.includes("Mercidies")){
            resolve(car)
        }
        else{
            reject("It is bad")
        }
    },4000)
})

danys.then(result =>{console.log(result)}).catch(e => console.log(e))


// let url = "https://api.covid19api.com/summary"
let url = "17.json"
fetch(url)
.then(response => response.json()) // accessing the API data as JSON
.then(data => console.log(data))
.catch(error => console.log(error))


const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()