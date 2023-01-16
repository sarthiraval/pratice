let para = document.getElementById("demo1");
para.addEventListener('mouseover',()=>{
    console.log("this is mouseover event.");
})

let paa = document.getElementById("demo2");
paa.addEventListener('mouseenter',()=>{
    console.log("this is mouseenter event");
}) 

let pa = document.getElementById("demo3");
pa.addEventListener('mouseout',()=>{
    console.log("this is mouseout event");
})

let aq = document.getElementById('demo6')
aq.addEventListener('mousemove',()=>{
    console.log("this is mousemove event");
})

const myDiv = document.getElementById("myDIV");
myDiv.addEventListener("mousemove", myFunction);

function removeHandler() {
  myDiv.removeEventListener("mousemove", myFunction);
}

function myFunction() {
  document.getElementById("demoaa").innerHTML = Math.random();
}
let ara =document.getElementById("demo4") 
ara.addEventListener('click',e =>{
    console.log(("this is click event",e));
    console.log(("this is click event",e.target));
    console.log("this is click event");
    console.log(
        'textContent gives content of selected element: ',
        e.target.textContent
      )})

let aras =document.getElementById("demo5") 
aras.addEventListener('dblclick',e=>{
    console.log(("this is double click event",e));
    console.log(("this is double click event",e.target));
    console.log("this is double click event");
    console.log(
        'textContent gives content of selected element: ',
        e.target.textContent
      )
})


let button = document.querySelector('button')
button.addEventListener("click",()=>{
    if((para.style.display  && pa.style.display && paa.style.display &&
        aq.style.display  && aras.style.display && ara.style.display 
        && myDiv.style.display ) != 'none' ){
        para.style.display = 'none'
        pa.style.display = 'none'
        paa.style.display = 'none'
        aq.style.display  ='none'
        aras.style.display  ='none'
        ara.style.display  ='none'
       myDiv.style.display  ='none'
    }

    else{
        para.style.display = 'block'
        pa.style.display = 'block'
        paa.style.display = 'block'
        aq.style.display  ='block'
        aras.style.display  ='block'
        ara.style.display  ='block'
       myDiv.style.display  ='block'
    }
   })
