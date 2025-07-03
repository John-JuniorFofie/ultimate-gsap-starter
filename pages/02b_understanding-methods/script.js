import gsap from 'gsap';
const play = document.querySelector(".Play");
const pause = document.querySelector(".Pause");
const Resume = document.querySelector(".Resume");
const Restart = document.querySelector(".Restart");
const Kill = document.querySelector(".Kill");
const yoyo = document.querySelector(".yoyo");

const animation =gsap.to('.box',{
opacity:1,
scale:1.25,
duration:4,
repeat:-1,
yoyo:true,
rotate:360,
borderRadius:'50%',
// ease: "power2.in"      //starts slow, ends fast
// ease: "power2.out"     //starts fast, ends slow
// ease: "power2.inOut"   //slow-fast-slow

})

play.addEventListener("click", ()=>{
    animation.play();
});
pause.addEventListener("click", ()=>{
    animation.pause();
});
resume.addEventListener("click", ()=>{
    animation.resume();
});
restart.addEventListener("click", ()=>{
    animation.restart();
});
reverse.addEventListener("click", ()=>{
    animation.reverse();
});
Kill.addEventListener("click", ()=>{
    animation.Kill();
});
yoyo.addEventListener("click", ()=>{
    animation.yoyo(true);
});
repeat.addEventListener("click", ()=>{
    animation.yoyo(2);
});
