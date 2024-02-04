//const socce=document.querySelector(".socce");
const tl=gsap.timeline({repeat:0,ease:"elastic",})

tl.fromTo(".socce",{
scale:0,
opacity:0
},{
  scale:1,
  duration:1,
  opacity:1

}
).fromTo(".title",{
  y:-300,
  opacity:0,
},{
  y:0,
  opacity:1,
})

//const tl1=gsap.timeline({repeat:-1,repeatDelay:4})

gsap.fromTo(".one",{
  x:0,
  opacity:0
  
},{
  x:0,
  opacity:1,
  rotation:360,
  duration:1,
  yoyo:true,
  repeat:-1,
  repeatDelay:3

}
)
gsap.fromTo(".two",{
  x:-200,
  opacity:0
  
},{
  x:0,
  opacity:1,
  rotation:360,
  duration:1,
  yoyo:true,
  repeat:-1,
  repeatDelay:3


}
)
gsap.fromTo(".three",{
  x:-300,
  opacity:0
  
},{
  x:0,
  opacity:1,
  rotation:360,
  duration:1,
  yoyo:true,
  repeat:-1,
  repeatDelay:3

}
)
gsap.fromTo(".four",{
  x:-400,
  opacity:0
  
},{
  x:0,
  opacity:1,
  rotation:360,
  duration:1,
  yoyo:true,
  repeat:-1,
  repeatDelay:3
}
)

let ecard1=document.querySelector(".a");
let ecard2=document.querySelector(".b");
let ecard3=document.querySelector(".c");
let ecard4=document.querySelector(".d");
let ecard5=document.querySelector(".e");
let ecard6=document.querySelector(".f");

let eventPage=document.querySelector(".event-discrip");
window.addEventListener("scroll",(e)=>{
  let value=window.scrollY;
  ecard1.style.top=0-value*0.02+'vh';

  ecard2.style.top=100-value*0.08+'vh';

  ecard3.style.top=200-value*(0.14) + 'vh';
  ecard4.style.top=300-value*0.2+'vh';
  ecard5.style.top=400-value*0.25+'vh';
  ecard6.style.top=500-value*0.3+'vh';


 // ecard1.style.top=(ecard1.style.top-value) + 'px';
    
  
})
