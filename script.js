const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const date = new Date();
const miniCircle = document.getElementById("minicircle");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const elems = document.querySelectorAll("#page2 .elem");
const timeH2 = document.getElementById("time");
var tl = gsap.timeline({ paused: true });
const bodyEl = document.body;
bodyEl.addEventListener("mousemove", (e) => {
miniCircle.style.top =e.clientY + "px";
miniCircle.style.left =e.clientX + "px";
});
tl.to("nav .right .nav-elems", {
  opacity: 1,
  duration: 1,
  stagger: 0.3,
});
tl.eventCallback("onReverseComplete", () => {
  openBtn.style.display = "block"; // Show openBtn after reversing animations
});
openBtn.addEventListener("click", () => {
  tl.play();
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  tl.reverse();
});

var tl1 = gsap.timeline();
tl1.from("nav h3", {
  opacity: 0,
  duration: 0.5,
  y: -100,
});
tl1.from("#main #page1 .headings h1", {
  opacity: 0,
  duration: 0.5,
  y: 100,
  stagger: 0.3,
});
tl1.from("#main #page1 .headings h3", {
  opacity: 0,
  duration: 0.4,
  x: -100,
});
tl1.from("#main #page1 .footer-headings h3", {
  opacity: 0,
  duration: 0.5,
  y: -100,
});
elems.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 1,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 1,
      duration: 0.6,
    });
  });
  elem.addEventListener("mousemove", (e) => {
    var elemTop = e.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      duration: 1,
      top: elemTop,
      left: e.clientX,
      ease: Power3,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.6,
      duration: 0.6,
    });
  });
});
timeH2.innerText = `${date.getHours() % 12} : ${date.getMinutes()} ${
  date.getHours() % 12 > 12 ? "AM" : "PM"
}`;
