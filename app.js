const navbar = document.querySelector(".navbar-nav");
const hero = document.querySelector(".hero");
const jumbotron = document.querySelector(".heroText");
const headers = document.querySelector(".text-right");
const academy = document.querySelector(".academyImg");
const eviet = document.querySelector(".evietImg");
const lips = document.querySelector(".lipsImg");
const tech = document.querySelector(".techImg");
const icons = document.querySelector(".profileIcons");

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

// tl.fromTo(navbar, { opacity: 0}, { opacity: 1, duration: 2});
tl.to(navbar, {duration: 0.5, y: 50});