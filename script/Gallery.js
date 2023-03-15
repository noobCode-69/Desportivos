
let open = false;
const navButton = document.querySelector(".mobile-appear")


navButton.addEventListener("click", () => {

    const tl = gsap.timeline({})

    if(open == false){
        tl.set('.navbar-mobile', {display : "flex"})
        tl.fromTo(".navbar-mobile", {translateY: "100%", opacity : 0}, {opacity : 1, ease : "power4.out", translateY: "0" , duration: 0.25})
        open=true;
    }
    else {
        tl.fromTo(".navbar-mobile", {translateY: "0", opacity : 1}, {ease : "power4.out", translateY: "100%", opacity : 0 , duration: 0.5})
        tl.set('.navbar-mobile', {display : "none"})
        open=false;
    }

})



const tl = gsap.timeline({})

tl.fromTo(".title h1", {translateY : "100%"}, {translateY : 0, stagger: 0.025, duration : 0.25, ease : "power4.out"})