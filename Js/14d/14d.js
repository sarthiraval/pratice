//   Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
 try{
    // code that  may throw an error
 }
catch(err){
    //code to be exexuted if sn error occurs
}
finally{
    //code to be executed regardless of an error yes or no
}

let throwwhy = () =>{
    let may
    let x = 10
    try{
        if (x == '') throw 'empty'
        if(isNaN(x)) throw ' not a numbe'
        x = Number(x)
        if (x <5)throw 'low'
        if (x>5) throw 'high'
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Why Why");
    }
}
throwwhy()