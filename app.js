const navbar = document.querySelector(".navbar-nav");
const hero = document.querySelector(".jumboImg");
const jumbotron = document.querySelector(".heroText");
const headers = document.querySelector(".text-right");
const academy = document.querySelector(".academyImg");
const eviet = document.querySelector(".evietImgObj");
const lips = document.querySelector(".lipsImg");
const tech = document.querySelector(".techImg");
const icons = document.querySelector(".profileIcons");

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

gsap.from(hero, { duration: 1, x: 50 });
gsap.to(hero, { opacity: 5, duration: 2 });

tl.fromTo(jumbotron, { opacity: 0}, { opacity: 1, duration: 0.75, x: 25}); 
tl.to(jumbotron, {y: "0%", duration: 0.5});

gsap.from(headers, { opacity: 0, delay: 2});
gsap.to(headers, { opacity: 1});

gsap.timeline({
    scrollTrigger: {
        trigger: headers,
    }
});

tl.from(academy, { x: 200, opacity: 0, duration: 1.5});
gsap.from(eviet, {y: 200, opacity: 0, duration: 1.5, delay: 1.5})
gsap.from(lips, {y: -200, opacity: 0, duration: 1.5, delay: 1.2})
gsap.from(tech, {x: -200, opacity: 0, duration: 1.5, delay: 1})