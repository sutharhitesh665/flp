gsap.from('.header', { duration: 1, y: '-100%', ease: "power2.out" });
gsap.from('.particles', { duration: 2, scale: '0', ease: "power2.out" });




/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



// Hamburger Menu Toggle
let btn = document.getElementById("hamburger");
let svg = document.getElementById("svg");
let btn2 = document.getElementById("hamburger2");
let svg2 = document.getElementById("svg2");
let element = document.getElementById("mobile-menu");

let home = document.getElementById("hm");
let aboutUs = document.getElementById("au");
let features = document.getElementById("fs");
let blogs = document.getElementById("bs");
let ProductGuide = document.getElementById("pg");

function toggleMenu() {

  if (element.classList.contains("translate-x-full")) {
    element.classList.remove("translate-x-full");
    element.classList.add("translate-x-0");
  }
  else {
    element.classList.remove("translate-x-0");
    element.classList.add("translate-x-full");

  }
  svg.classList.toggle("active");
  svg2.classList.toggle("active");

}

btn.addEventListener("click", toggleMenu);
btn2.addEventListener("click", toggleMenu);
home.addEventListener("click", toggleMenu);
aboutUs.addEventListener("click", toggleMenu);
features.addEventListener("click", toggleMenu);
blogs.addEventListener("click", toggleMenu);
ProductGuide.addEventListener("click", toggleMenu);




