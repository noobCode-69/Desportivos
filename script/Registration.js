
const scriptURL = "https://script.google.com/macros/s/AKfycbwsdSSl37kvomgUQR5iNuaM17Dfzq1ybqL-UTkqnq1uVnLUrNpMVvv6M0eIOJUXazc/exec"
const form = document.forms['registration_form']

const backdrop = document.querySelector(".backdrop");

form.addEventListener('submit', e => {
    e.preventDefault();

    

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const name = document.querySelector('input[name="NAME"');
    const email = document.querySelector('input[name="EMAIL"');
    const phone = document.querySelector("input[name='PHONE']");
    const college = document.querySelector("input[name='COLLEGE']");

    let SPORTS = "";
    let NAME = name.value;
    let EMAIL = email.value;
    let PHONE = phone.value; 
    let COLLEGE = college.value;


    checkboxes.forEach((checkbox) => {
        if (checkbox.checked == true) {
            SPORTS += checkbox.value + " ,";
        }
    })


    if(SPORTS == "" || name == "" || EMAIL == "" || PHONE == "" || COLLEGE == ""){
        alert("Please Select Atleast One Sport To Participate")
        return;
    }

    
    backdrop.style.display = "flex";


    SPORTS = SPORTS.slice(0, -1);
    const fd = new FormData();


    fd.append("NAME", NAME)
    fd.append("EMAIL", EMAIL)
    fd.append("PHONE", PHONE)
    fd.append("COLLEGE", COLLEGE)
    fd.append("SPORTS", SPORTS)


    console.log("DATA" , NAME);


    fetch(scriptURL, { method: 'POST', body: fd })
        .then(response => alert("Thank you! your Registration has been done."))
        .catch((error) => {
            alert("An error occured, please try after some time!!")
            console.log(error);
        })
        .finally(() => {
            form.reset();
            backdrop.style.display = "none";
        })
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