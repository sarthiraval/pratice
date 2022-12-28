//i++
//i+2 even number 
// for (let i = 0;i<=10;i+2){
//     console.log(i)
// }
//2,4,6,8

// let i = 0
// for (;; i++){
//     if(i < 10){
//         console.log(i)
//         continue
//     }
//         break
// }

//i+1 odd number 
// for (let i = 0;i<=10;i+1){
//     console.log(i)
// }
//1,3,5,7

// for (let i = 0;i<=10;i++){
//     console.log(i)
// }


// const fruitt = ["Banana", "Kiwi", "Dragon Fruit", "Pineapple", "Berry", "Avocado"]

// for (let index = 0; index < fruitt[0].length; index++) {
//     const element = fruitt[0];
//     console.log(element);
    
// }

// let c = prompt("Enter a values");
// let cs =c.toUpperCase()

//     if (cs == 'a' || cs == 'e' || cs == 'i' || cs == 'o' || cs == 'u' ||cs == 'A' || cs == 'E' || cs == 'I' || cs == 'O' || cs == 'U') {
//         console.log("Is a Vowel");
//     }
//     else {
//     console.log ("Is a consonant");
//     }


    // let ch;
    // ch = prompt("Enter charcter")
    // switch(ch)
    // {
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //     case 'A':
    //     case 'E':
    //     case 'I':
    //     case 'O':
    //     case 'U':
    //         console.log("yes Volwes")    
    //     break;
    // default:
    //     console.log("no volves") 
    //     break;
    // }




function ssd() {
    let s = prompt("Enter a String");

    if(s != ""){
    const o = 'AEIOUaeiou'
    let c =   ss => Array.from(ss).filter(letter => o.includes(letter));
    let cs =   ss => Array.from(ss).filter(letter => o.includes(letter)).length;
    console.log(c(s)); 
    console.log(cs(s)); 


        let cha = s.toUpperCase().split("");
        console.log(cha) 
        for(let i = 0; i <= cha.length - 1; i++) {
        let e = cha[i];
        let n = cha[i + 1]      
        if(nss(e) && nss(n)){}
        } 
  }
  else{
    console.log("Please enter a string")
  }
}

  
  function nss(w) {
    switch (w) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        console.log("Volwe value is here");
        break
      default:
        console.log("Volwe value is not here");
    }
  }
  
ssd();
