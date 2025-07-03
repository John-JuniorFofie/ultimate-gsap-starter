import gsap from 'gsap';
gsap.to('.box',{
    y:-100,
    opacity:1,
    rotation:360,
    background:'ff6f61',
    borderRadius:'50%',
    scale:1.25,
    duration:2,
    delay:0.5,
    ease:'bounce',
    repeat:-1,
    yoyo:true,
    paused:true,
    stagger:1,

})
