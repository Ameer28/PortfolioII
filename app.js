const navbar = document.querySelector(".navbar-nav");
const hero = document.querySelector(".jumboImg");
const jumbotron = document.querySelector(".heroText");
const headers = document.querySelector(".text-right");
const academy = document.querySelector(".academyImg");
const eviet = document.querySelector(".evietImg");
const lips = document.querySelector(".lipsImg");
const tech = document.querySelector(".techImg");
const icons = document.querySelector(".profileIcons");

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.fromTo(navbar, { opacity: 0}, { opacity: 1, duration: 1});
tl.to(navbar, {y: "0%", duration: 1, stagger: 0.25});

tl.fromTo(hero, { opacity: 0}, { opacity: 1, duration: 1});
tl.to(hero, {y: "0%", duration: 0.25, stagger: 1});

tl.fromTo(jumbotron, { opacity: 0}, { opacity: 1, duration: 1}); 
tl.to(jumbotron, {y: "0%", duration: 1, stagger: 0.25});

tl.fromTo(headers, { opacity: 0}, { opacity: 1, duration: 1}); 
tl.to(headers, {y: "0%", duration: 1, stagger: 0.25});