const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const elems = document.querySelectorAll("#page2 .elem");
elems.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: 1,
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
  });
});
