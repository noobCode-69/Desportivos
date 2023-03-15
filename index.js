
gsap.registerPlugin(ScrollTrigger)


gsap.fromTo(".animate-up", { y: "500%" }, { y: 0, ease: "power4.out", duration: 1.25 })
gsap.fromTo(".banner", { scale: 2 }, { scale: 1, ease: "power4.out", duration: 1.5 })

TweenMax.set("#basket", { opacity: 0 });
TweenMax.set(["#soccer1", "#soccer2"], { autoAlpha: 0, display: "none" });




const step2_bodyLines = anime({
  targets: ".soccer2_line path",
  strokeDashoffset: [anime.setDashoffset, 99200],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return 1000 + i * 20;
  },
  autoplay: false
});

const step2_bodyExtra = anime({
  targets: ".soccer2_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return 1000 + i * 20;
  },
  autoplay: false
});


function step2_bodyTL() {

  const timeline = new TimelineMax({
    onStart: function () {
      step2_bodyExtra.play();
      step2_bodyLines.play();
    }, onComplete: function () {

    }
  });

  timeline.staggerFromTo(".soccer2_fill > *", 0.2, { scale: 0, transformOrigin: "100% 100%" }, { scale: 1 }, 0.01)
    .to(".soccer2_fill", 1, {
      onStart: function () {

        step2_bodyExtra.play();
        step2_bodyLines.play();
      }
    })
  return timeline;

}



const step3_bodyLines = anime({
  targets: ".basket_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 20;
  },
  autoplay: false
});

const step3_extraLines = anime({
  targets: ".basket_line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3500,
  delay: function (el, i) {
    return i * 20;
  },
  autoplay: false
});


function step3_bodyTL() {
  const timeline = new TimelineMax({
    onStart: function () {
      step3_bodyLines.play()
      step3_extraLines.play()
    }
  });

  timeline.staggerFromTo(".basket_fill > *", 0.3, { scale: 0, y: 300, transformOrigin: "0% 0%" }, { scale: 1, y: 0 }, -0.008)
  return timeline;
}



function hide(elem) {
  const tl = new TimelineMax();
  tl.to(elem, 0.1, { autoAlpha: 0 })
    .to(elem, 0.1, { display: "none" })
  return tl;
}
function show(elem) {
  const tl = new TimelineMax();
  tl.to(elem, 0.1, { autoAlpha: 1 })
    .to(elem, 0.1, { display: "block" })
  return tl;
}


const mainTL = new TimelineMax({});

function init() {
  mainTL
    .add(show("#basket"), 'step6')
    .add(step3_bodyTL(), 'step7')

}



const mainTL2 = new TimelineMax({})


function init2() {
  mainTL2
    .add(show("#soccer2"), 'step3')
    .add(step2_bodyTL(), 'step4')
}


ScrollTrigger.create({
  trigger: '.about',
  start: "-95%",
  onEnter: () => {
    init2();
  },
  once: true,
});





// timer



let endDateElm = "3 February  2023 12:01 am"
let countDownItem = Array.from(document.querySelectorAll('.count_down'))

function countDown() {
  let endDate = new Date(endDateElm);
  let newDate = new Date();
  let dateDiff = (endDate - newDate) / 1000
  if (dateDiff > 0) {
    let day = Math.floor(dateDiff / 3600 / 24)
    let hour = Math.floor(dateDiff / 3600) % 24
    let min = Math.floor(dateDiff / 60) % 60
    let sec = Math.floor(dateDiff % 60)
    countDownItem[0].textContent = day
    countDownItem[1].textContent = hour
    countDownItem[2].textContent = min
    countDownItem[3].textContent = sec
  } else {
    clearInterval(stop)
  }
}
let stop = setInterval(() => {
  countDown();
}, 1000);


// loading

let shouldScroll = false;

const loading = document.querySelector(".loading")




setTimeout(() => {

  loading.remove();
  shouldScroll = true;
  setTimeout(() => {
      gsap.fromTo(".backdrop", { y: "0" }, { y: "110%", stagger: 0.1, ease: "power4.out", duration: 1.5 })
      init();
    }, 500)
  }, 4500);

setTimeout(() => {
  window.scrollTo(0,0);
}, 2000);


window.addEventListener("scroll", () => {
  if(shouldScroll == false){
    window.scrollTo(0,0);
    return;
  }
})




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



let  isInsideEvents = false;
const events = document.querySelector(".events")
const cursor = document.querySelector(".cursor")


const rect = events.getBoundingClientRect();

const startY = rect.top;
const endY = rect.bottom;

events.addEventListener("click", () => {
  window.location.href = './pages/Event.html';

})


events.addEventListener("mouseenter", (e) => {
  isInsideEvents = true;
})


events.addEventListener("mouseleave", () => {
  isInsideEvents = false;
})



window.addEventListener("mousemove", (e)=> {
  if(isInsideEvents == true){
    cursor.style.display = "flex";
    cursor.style.top = `${e.pageY-startY}px`;
    cursor.style.left = e.pageX + "px"
  }
  else {
    cursor.style.display = "none"
  }

})