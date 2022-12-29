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

//Switch case
//common code

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
    

//     let day =0
//     switch (new Date().getDay()) {
//       case 0:
//         day  = "Sunday"
//         break;
//       case  1:
//         day="Monday"  
//         break
//       case 2:
//         day = "Tuesday"  
//         break
//       case 3:
//         day = "Wensday"
//         break
//       case 4:
//         day  = "Thursday"
//         break;
//       case  5:
//         day="Friday"  
//         break
//       case 6:
//         day = "Tuesday"  
//         break
       
//         default:
//         console.log("Unvalid")
//     }
//     console.log(day)


//   let numo =  prompt("Enter a number")
//   switch (numo % 2) {
//     case 0 : 
//        console.log("even = "+numo)  
//    case 1 :
//       console.log("odd = "+numo);
//   }


//   let text = 5
//   switch (text) {
//     case 0 : 
//       text = "off"  
//       case 1:
//         text = "on"
//  default :
//       text = "non value"
//  }
//  console.log(text)

// function ssd() {
//     let s = prompt("Enter a String");
//     if(s != ""){
    // const o = 'AEIOUaeiou'
    // let c =   ss => Array.from(ss).filter(letter => o.includes(letter));
    // let cs =   ss => Array.from(ss).filter(letter => o.includes(letter)).length;
    // console.log(c(s)); 
    // console.log(cs(s)); 

//     let dict1 ={}
//     let dic1 = 0

//         let cha = s.toUpperCase().split("").toString();
//         console.log(cha) 
//         for(let i = 0; i <= cha.length - 1; i++) {
//         let ch = cha[i];
//         let n = cha[i + 1]   
//         console.log(ch,i)   
//         if(nss(ch)){
//           if(dict1[ch] != 1)
//         {
//             dict1[ch] = 1
//         }
//         else{
//             dict1[ch] = dict1[ch] + 1
//         }
//           dic1 =  dic1 + 1
//           console.log("VOVEL")
        
//         }
//         else{
//           console.log("NONVEl")
//         }
        
//          console.log(ch,i,n)   
//         if(nss(ch) || nss(n)){
//           console.log("VOVEL")
//         }
//         else{
//           console.log("NONVEl")
//          }

//           console.log(ch,i,n)   
//         if(nss(ch) && nss(n)){
//           console.log("VOVEL")
//         }
//         else{
//           console.log("NONVEl")
//         }
//          }   
        
//   console.log("why",dict1)
//      console.log("count",dic1)
//       }
    
//   else{
//     console.log("Please enter a string")
//   }
// }

  
//   function nss(w) {
//     switch (w) {
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         //bane mathi 1volves and 1 volves nto etle bane print thatu tu
//        // console.log("vowel is here")
//         return true 
       
//       default:
//       //  console.log("vowel is not here")
//         return false
//     }
//   }
  
// ssd();


// and all condition must be true
// condition 1
// condition 2

// 1 = true && 2 = true
// 1 = false && 2 = no chek


// or atleast one condition must be true
// condition 1
// condition 2

// 1 = false && 2 = true
// 1 = true && 2 = no check

//not !

// !(true) = false
// !(false) = true


// and bane condition sachi hovi joiye
//and peli khoi biji chek nahi kare
//and peli sachi to biji khoti no output

// or peli kholi biji chek karse j
// or ma game te 1 sachi hovi joiye
// or ma pehli sachi biji condition chek nhi kar
