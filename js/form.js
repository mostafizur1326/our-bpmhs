// ANIMATION_FORM

function animationForm() {
  let tl = gsap.timeline();

  tl.from(".L", {
    y: 10,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  })

  tl.from(".input", {
    y: 10,
    opacity: 0,
    duration: 0.1,
    stagger: 0.2,
  })
}
animationForm();

// NAVBAR

function nav() {
  let tl = gsap.timeline();

  tl.from(".logo1 h1 span", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.15,
  })

  tl.from(".header2 ul a, .singUpBtn", {
    y: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  })

  tl.from(".b_t", {
    y: -40,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.15,
  })
}
nav();

function navigation() {
  let menu_list = document.querySelector(".menu_list2") ;
  let menu_icon = document.querySelector(".menu_icon2") ;
  let cross_icon = document.querySelector(".cross_icon2");
  
  let home = document.querySelector(".home2");
  let about = document.querySelector(".about2");
  let notice = document.querySelector(".notice2");
  let exams = document.querySelector(".exams2");
  let contact = document.querySelector(".contact2");
  let form = document.querySelector(".form2");
  
  
  let timeline = gsap.timeline();
  timeline.from(".sm_logo2 h1 span", {
    y: 80,
    duration: 0.5,
    stagger: 0.1
  })
  timeline.from(".menu2", {
    y: 80,
    duration: 0.5,
  })
  
  let tl = gsap.timeline();
  tl.to(".menu_list2", {
    x: -425,
    duration: 0.5
  })
  tl.from(".menu_list2 ul li, .singUpBtn_sm2", {
    x: 425,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
  })
  tl.to(".menu_icon2", {
    x: 425,
    duration: 0.1
  })
  tl.to(".cross_icon2", {
    y: 425,
    duration: 0.1
  })
/*  tl.to(".hover2", {
    x: 100,
    duration: 0.5,
    stagger: 0.2
  })*/
  tl.pause();
    
  menu_icon.addEventListener("click", () => {
    tl.play();
  })
  
  cross_icon.addEventListener("click", () => {
    tl.reverse();
  })
  
  home.addEventListener("mouseover", () => {
    gsap.from(".link_home2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  home.addEventListener("mouseleave", () => {
    gsap.from(".link_home2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  about.addEventListener("mouseover", () => {
    gsap.from(".link_about2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  about.addEventListener("mouseleave", () => {
    gsap.from(".link_about2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  notice.addEventListener("mouseover", () => {
    gsap.from(".link_notice2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  notice.addEventListener("mouseleave", () => {
    gsap.from(".link_notice2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  exams.addEventListener("mouseover", () => {
    gsap.from(".link_exams2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  exams.addEventListener("mouseleave", () => {
    gsap.from(".link_exams2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  contact.addEventListener("mouseover", () => {
    gsap.from(".link_contact2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  contact.addEventListener("mouseleave", () => {
    gsap.from(".link_contact2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  form.addEventListener("mouseover", () => {
    gsap.from(".link_form2", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  form.addEventListener("mouseleave", () => {
    gsap.from(".link_form2", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
}
 navigation();
 
// SET_UP_FORM

function setUpForm() {
  let sign_in_form = document.querySelector(".sign_in_form");
  let sign_up_form = document.querySelector(".sign_up_form");
  let form_sign_up = document.querySelector(".form_sign_up"); 
  let form_sign_in = document.querySelector(".form_sign_in");
  let si = document.querySelector(".si");
  
  form_sign_up.addEventListener("click", ()=>{
    sign_up_form.style.display = "block";
    sign_in_form.style.display = "none";
    animationForm();
  })
  form_sign_in.addEventListener("click", () => {
    sign_up_form.style.display = "none";
    sign_in_form.style.display = "block";
    animationForm();
  })
  si.addEventListener("submit", () => {
    sign_up_form.style.display = "none";
    sign_in_form.style.display = "block";
    animationForm();
  })
}
setUpForm();

// PASSWORD_ICON

function passwordIcon() {
  let e = document.querySelector(".e");
  let ef = document.querySelector(".ef");
  let e1 = document.querySelector(".e1");
  let ef1 = document.querySelector(".ef1");
  let e2 = document.querySelector(".e2");
  let ef2 = document.querySelector(".ef2");
  
  let ip = document.querySelector(".ip");
  let pip = document.querySelector(".pip");
  let cip = document.querySelector(".cip");

  ef.addEventListener("click", () =>{
    e.style.display = "block";
    ef.style.display = "none";
    ip.setAttribute("type","text");
  })
  
  e.addEventListener("click", () => {
    ef.style.display = "block";
    e.style.display = "none";
    ip.setAttribute("type","password");
  })

  ef1.addEventListener("click", () =>{
    e1.style.display = "block";
    ef1.style.display = "none";
    pip.setAttribute("type","text");
  })
  
  e1.addEventListener("click", () => {
    ef1.style.display = "block";
    e1.style.display = "none";
    pip.setAttribute("type","password");
  })
  
  ef2.addEventListener("click", () => {
    e2.style.display = "block";
    ef2.style.display = "none";
    cip.setAttribute("type","text");
  })
  
  e2.addEventListener("click", () => {
    ef2.style.display = "block";
    e2.style.display = "none";
    cip.setAttribute("type","password");
  })
}
passwordIcon();

// FORM_FOOTER_ANIMATION

function formFooterAnimation() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      scroll: "body",
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
    }
  })

  tl4.from("footer", {
    x: "-100%",
    opacity: 0,
    duration: 2.5,
    stagger: 0.3
  })

  tl4.from(".left_ani", {
    y: 500,
    opacity: 0,
    duration: 5,
    stagger: 0.3
  }, "animat")
  tl4.from(".right_ani", {
    y: 500,
    opacity: 0,
    duration: 5,
    stagger: -0.3
  }, "animat")

  tl4.from(".middle_footer .circle", {
    y: 800,
    opacity: 0,
    duration: 3
  })

  tl4.from(".left ul", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  })

  tl4.from(".middle", {
    x: -50,
    opacity: 0,
    duration: 1
  })
  tl4.from(".middle h4", {
    x: 50,
    opacity: 0,
    duration: 1
  })
  tl4.from(".middle address, .footer_text", {
    x: -150,
    opacity: 0,
    duration: 1,
    stagger: 0.5
  })
  tl4.from(".inputContainer, .feedback_header, .b, .social_media", {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.8
  })
}
formFooterAnimation();
