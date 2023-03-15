
let currentPage = 1;
let scrolling = false;





const pages = ['.one', '.two', '.three', '.four','.five' ,'.six', '.seven', '.eight', '.nine', '.ten', '.eleven', '.twelve', '.thirteen', ".fourteen" , '.fifteen'];
const titles = ['.team-name1 h1', '.team-name2 h1', '.team-name3 h1', '.team-name4 h1', '.team-name5 h1', '.team-name6 h1' ,'.team-name7 h1', '.team-name8 h1', '.team-name9 h1', '.team-name10 h1', '.team-name11 h1', '.team-name12 h1','.team-name13 h1' , '.team-name14 h1', '.team-name15 h1' ];



const up = document.querySelector(".left-button")
const down = document.querySelector(".right-button")

up.addEventListener("click", () => {
    if (currentPage == 1 || scrolling == true) {
        return;
    }
    goUp();
})

down.addEventListener("click", () => {
    if (currentPage == 15 || scrolling == true) {
        return;
    }
    goDown();
})


let goUp = () => {
    scrolling = true;
    changePage(currentPage - 1, currentPage, "up");
    changePagination(currentPage - 1, currentPage, "up",);
    currentPage -= 1;

}

let goDown = () => {
    scrolling = true;
    changePage(currentPage + 1, currentPage, "down");
    changePagination(currentPage + 1, currentPage, "down")
    currentPage += 1;

}



const changePage = (cPage, prevPage, direction) => {


    const tl = gsap.timeline({})


    if (direction == 'up') {


            tl.fromTo(`${pages[prevPage-1]} .teams-container`, {translateY : "0%", opacity : 1}, {translateY : "-10%", opacity : 0.8, duration : 0.25}, "<")
            tl.fromTo(`${pages[prevPage-1]} .team-title`, {translateY : 0, opacity : 1}, {translateY : "-20%", opacity : 0, duration : 0.25}, "<")
            tl.fromTo(`${pages[prevPage-1]} .names p`, {translateY : "0", opacity : 1}, {translateY : '-100%', opacity : 0.8, duration : 0.25, stagger : 0.01}, "<")
            // tl.set(pages[prevPage - 1], { display: "none" })
            // tl.set(pages[cPage - 1], { display: "flex" })
        


            tl.fromTo(`${pages[prevPage - 1]} .first-name h1`, { translateY: 0 }, { stagger: 0.025, translateY: "100%", duration: 0.25 })
            tl.fromTo(`${pages[prevPage - 1]} .second-name h1`, { translateY: 0 }, { stagger: 0.025, translateY: "100%", duration: 0.25 }, "<")
            tl.fromTo(`${pages[prevPage - 1]} .designation`, { opacity: 1, translateY: 0 }, { opacity: 0, translateY: "20%", duration: 0.25 }, "<")
            tl.fromTo(`${pages[prevPage - 1]} .number`, { opacity: 1, translateY: 0 }, { opacity: 0, translateY: "20%", duration: 0.25 }, "<")

            tl.fromTo(`${pages[prevPage - 1]} .person-image`, { translateY: 0, opacity: 1, scale: 1 }, { translateY: '5%', opacity: 0, scale: 0.9, duration: 0.25, transformOrigin: "bottom" }, "<")
            tl.set(pages[prevPage - 1], { display: "none" })
            tl.set(pages[cPage - 1], { display: "flex" })


        


        tl.fromTo(`${pages[cPage - 1]} .first-name h1`, { translateY: "-100%" }, { stagger: 0.025, translateY: "0", duration: 0.25 }, "<")
        tl.fromTo(`${pages[cPage - 1]} .second-name h1`, { translateY: "-100%" }, { stagger: 0.025, translateY: "0%", duration: 0.25 }, "<")
        tl.fromTo(`${pages[cPage - 1]} .designation`, { opacity: 0, translateY: "-20%" }, { opacity: 1, translateY: "0", duration: 0.25 }, "<")
        tl.fromTo(`${pages[cPage - 1]} .number`, { opacity: 0, translateY: "-20%" }, { opacity: 1, translateY: "0", duration: 0.25 }, "<")

        tl.fromTo(`${pages[cPage - 1]} .person-image`, { opacity: 0, scale: 0.9, translateY: '-5%' }, { translateY: 0, opacity: 1, scale: 1, duration: 0.25, transformOrigin: "top" }, "<")
        tl.call(makeScrollingAvailable)

    }
    else {
        
            // if(cPage == 13 && prevPage == 12) {
                tl.fromTo(`${pages[cPage-1]} .teams-container`, {translateY : "0%", opacity : 1}, {translateY : "-100%", opacity : 0.8, duration : 0.25}, "<")
                tl.fromTo(`${pages[cPage-1]} .team-title`, {translateY : "0%", opacity : 1}, {translateY : "-100%", opacity : 0.8, duration : 0.25}, "<")
                tl.fromTo(`${pages[cPage-1]} .names p`, {translateY : "0%", opacity : 1}, {translateY : "-100%", opacity : 0.8, duration : 0.25, stagger : 0.01}, "<")
                // tl.set(pages[prevPage - 1], { display: "none" })
                // tl.set(pages[cPage - 1], { display: "flex" })
            // }
            // else {
                tl.fromTo(`${pages[prevPage - 1]} .first-name h1`, { translateY: 0 }, { stagger: 0.025, translateY: "-100%", duration: 0.25 })
                tl.fromTo(`${pages[prevPage - 1]} .second-name h1`, { translateY: 0 }, { stagger: 0.025, translateY: "-100%", duration: 0.25 }, "<")
                tl.fromTo(`${pages[prevPage - 1]} .designation`, { opacity: 1, translateY: 0 }, { opacity: 0, translateY: "-20%", duration: 0.25 }, "<")
                tl.fromTo(`${pages[prevPage - 1]} .number`, { opacity: 1, translateY: 0 }, { opacity: 0, translateY: "-20%", duration: 0.25 }, "<")
                tl.fromTo(`${pages[prevPage - 1]} .person-image`, { translateY: 0, opacity: 1, scale: 1 }, { translateY: '-5%', opacity: 0, scale: 0.9, duration: 0.25, transformOrigin: "top" }, "<")
                tl.set(pages[prevPage - 1], { display: "none" })
                tl.set(pages[cPage - 1], { display: "flex" })
            // }

            // if((cPage == 12 && prevPage == 11) || (cPage == 13 && prevPage == 12) ){
                tl.fromTo(`${pages[cPage-1]} .teams-container`, {translateY : "10%", opacity : 0.8}, {translateY : 0, opacity : 1, duration : 0.25}, "<")
                tl.fromTo(`${pages[cPage-1]} .team-title`, {translateY : "10%", opacity : 0.8}, {translateY : 0, opacity : 1, duration : 0.25}, "<")
                tl.fromTo(`${pages[cPage-1]} .names p`, {translateY : "100%", opacity : 0.8}, {translateY : 0, opacity : 1, duration : 0.25, stagger : 0.01}, "<")

            // }
            // else {
                tl.fromTo(`${pages[cPage - 1]} .first-name h1`, { translateY: "100%" }, { stagger: 0.025, translateY: "0", duration: 0.25 }, "<")
                tl.fromTo(`${pages[cPage - 1]} .second-name h1`, { translateY: "100%" }, { stagger: 0.025, translateY: "0%", duration: 0.25 }, "<")
                tl.fromTo(`${pages[cPage - 1]} .designation`, { opacity: 0, translateY: "20%" }, { opacity: 1, translateY: "0", duration: 0.25 }, "<")
                tl.fromTo(`${pages[cPage - 1]} .number`, { opacity: 0, translateY: "20%" }, { opacity: 1, translateY: "0", duration: 0.25 }, "<")

                tl.fromTo(`${pages[cPage - 1]} .person-image`, { opacity: 0, scale: 0.9, translateY: '5%' }, { translateY: 0, opacity: 1, scale: 1, duration: 0.25, transformOrigin: "bottom" }, "<")
            // }
        

        
        tl.call(makeScrollingAvailable)



    }
}


const changePagination = (cPage, prevPage, direction) => {



    const tl = gsap.timeline({})
    if (direction == "down") {

        
        tl.fromTo(titles[prevPage - 1], { translateY: 0 }, { translateY: "-100%", ease: "power4.out", stagger: 0.025, duration: 0.25 })
       
        tl.fromTo(titles[cPage - 1], { translateY: "100%" }, { translateY: "0%", ease: "power4.out", stagger: 0.025, duration: 0.25 }, "<")
    }
    else {
            tl.fromTo(titles[prevPage - 1], { translateY: 0 }, { translateY: "100%", ease: "power4.out", stagger: 0.025, duration: 0.25 })
    
        tl.fromTo(titles[cPage - 1], { translateY: "-100%" }, { translateY: "0%", ease: "power4.out", stagger: 0.025, duration: 0.25 }, "<")
    }
}



const makeScrollingAvailable = () => {
    scrolling = false;
}

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