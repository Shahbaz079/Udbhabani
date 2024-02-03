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