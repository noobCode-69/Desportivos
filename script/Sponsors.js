
let open = false;
const navButton = document.querySelector(".mobile-appear")
// const navMobile = document.querySelector(".navbar-mobile")


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