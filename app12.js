﻿
const titreSpans = document.querySelectorAll('.titresecondaire span');
const phrase = document.querySelectorAll('.souspagephrase');
const btn2 = document.querySelectorAll('.btnn');

const sort = document.querySelectorAll('.Titresortie');
window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.5)
        .staggerFrom(phrase, 1, {top: -200, opacity: 0, ease: "power2.out"}, 1)
        .staggerFrom(btn2, 1, {top: -200, opacity: 0, ease: "power2.out"}, 0.5)
        .staggerFrom(sort, 1, {top: -200, opacity: 0, ease: "power2.out"}, 2)

    TL.play();
})


const titresp = document.querySelector('.titresp');

new Typewriter(titresp,{
    delay: 50,
})
    .typeString("Avec une carte,")
    .pauseFor(500)
    .typeString(" c'est quand même bien plus simple !" )
    
    .start()
const ratio =.99
const ratio2 =.75
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: ratio2
}
const handleIntersect = function (entries,observer) {
    entries.forEach(function (entry){

        setTimeout(()=>{
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)

        }, 10000)
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }

    })
}
const handleIntersect2 = function (entries,observer) {
    entries.forEach(function (entry){

        setTimeout(()=>{
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)

        }, 10000)
        if(entry.intersectionRatio>ratio2){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }

    })
}
const observer = new IntersectionObserver(handleIntersect, options);
const observer2 = new IntersectionObserver(handleIntersect2, options2);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal2').forEach(function(r){
    observer2.observe(r)
})
document.querySelectorAll('.reveal3').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal4').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal3').forEach(function(r){
    observer.observe(r)
})
document.querySelectorAll('.reveal4').forEach(function(r){
    observer.observe(r)
})