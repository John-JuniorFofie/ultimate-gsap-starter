import gsap from "gsap";



const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const seek = document.querySelector(".seek");
const progress = document.querySelector(".progress");
const timescale = document.querySelector(".timescale");
const halfRestart = document.querySelector(".half-restart");
const complete = document.querySelector(".complete");


const animation = gsap.to('.box', {
  opacity: 1,
  scale: 1.25,
  duration: 3,
  repeat: -1,
  yoyo: true,
  rotate: 360,
  borderRadius: '50%',
  // ease: "power2.in",
  // ease: "power2.out",
  // ease: "power2.inOut"
});
play.addEventListener("click", () =>{
    animation.play();
});

pause.addEventListener("click", () =>{
    animation.pause();
});

resume.addEventListener("click", () =>{
    animation.resume();
});

restart.addEventListener("click", () =>{
    animation.restart();
});

reverse.addEventListener("click", () =>{
    animation.reverse();
});

kill.addEventListener("click", () =>{
    animation.kill();
});

yoyo.addEventListener("click", () =>{
    animation.yoyo(true);
});

repeat.addEventListener("click", () =>{
    animation.repeat(2);
});

seek.addEventListener("click", () => {
  animation.seek(1); // Jump to 1 second
});

progress.addEventListener("click", () => {
  animation.progress(0.5); // 50%
});

timescale.addEventListener("click", () => {
  animation.timeScale(2); // Speed x2
});

halfRestart.addEventListener("click", () => {
  animation.pause(0.5); // Pause first
  animation.progress(0.5).restart(); // Start from 50%
});

complete.addEventListener("click", () => {
  animation.progress(1); // Instantly finish
});
