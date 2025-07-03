import gsap from "gsap"



gsap.to(".card",
    {
   x:500,
   yoyo:true,
   y:-100,
   y:100,
   duration:3,
   repeat:-1,
   rotate:360
})
gsap.to(".card1",
    {
   x:-100,
   yoyo:true,
   y:100,
   duration:3,
   repeat:-1,
   rotate:360,
 

})
gsap.fromTo(".round",
    {
    x:100,
    
   duration:3,
   repeat:-1,  
   
},

{
y:300,
x:-300,
duration:3,
repeat:-1,
yoyo:true

})
