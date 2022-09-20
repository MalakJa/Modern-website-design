const headline = document.querySelector(".content-text")
const navbar = document.querySelector(".navbar")
const slider = document.querySelector(".slider")

const tl = new  TimelineMax()

//start of timeline
tl.fromTo(headline, 1.2, {height: "0%"}, {height:"30%"})

//after 0.2s start next animation
tl.fromTo(headline, 1.2, {opacity:"0.4"},{opacity:"1"}, "-=1")

//after 0.4s start next animation
tl.fromTo(navbar, 1.2, {width:"60%"},{width:"80%", ease:Power2.easeInOut}, "-=1")

//after 0.6s start 
tl.fromTo(slider, 1.2, {opacity:"0.4"},{opacity:"1"}, "-=1")

//
tl.fromTo(slider, 1.2, {x:"-100%"},{x:"0%", ease:Power2.easeInOut}, "-=1.4")
