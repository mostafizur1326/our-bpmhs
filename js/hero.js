function heroAnimation() {
  let tl = gsap.timeline();
  tl.from(".logo h1 span", {
    y: 20,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
  })
  
  tl.from(".header ul li", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  }, "-=1")

  tl.from(".header ul a", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  })
  
  
  let tl2 = gsap.timeline();
  tl2.from(".t1, .t2 , .s_name h1 span, .summery p span, .hero_btn", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  })
 }
 heroAnimation();

function navigation() {
  let menu_list = document.querySelector(".menu_list") ;
  let menu_icon = document.querySelector(".menu_icon") ;
  let cross_icon = document.querySelector(".cross_icon");
  
  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let notice = document.querySelector(".notice");
  let exams = document.querySelector(".exams");
  let contact = document.querySelector(".contact");
  let form = document.querySelector(".form");
  
  
  let timeline = gsap.timeline();
  timeline.from(".sm_logo h1 span", {
    y: 80,
    duration: 0.5,
    stagger: 0.1
  })
  timeline.from(".menu", {
    y: 80,
    duration: 0.5,
  })
  
  let tl = gsap.timeline();
  tl.to(".menu_list", {
    x: -425,
    duration: 0.5
  })
  tl.from(".menu_list ul li, .singUpBtn_sm", {
    x: 425,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
  })
  tl.to(".menu_icon", {
    x: 425,
    duration: 0.1
  })
  tl.to(".cross_icon", {
    y: 425,
    duration: 0.1
  })
  tl.to(".hover", {
    x: 100,
    duration: 0.5,
    stagger: 0.2
  })
  tl.pause();
    
  menu_icon.addEventListener("click", () => {
    tl.play();
  })
  
  cross_icon.addEventListener("click", () => {
    tl.reverse();
  })
  
  home.addEventListener("mouseover", () => {
    gsap.from(".link_home", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  home.addEventListener("mouseleave", () => {
    gsap.from(".link_home", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  about.addEventListener("mouseover", () => {
    gsap.from(".link_about", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  about.addEventListener("mouseleave", () => {
    gsap.from(".link_about", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  notice.addEventListener("mouseover", () => {
    gsap.from(".link_notice", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  notice.addEventListener("mouseleave", () => {
    gsap.from(".link_notice", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  exams.addEventListener("mouseover", () => {
    gsap.from(".link_exams", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  exams.addEventListener("mouseleave", () => {
    gsap.from(".link_exams", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  contact.addEventListener("mouseover", () => {
    gsap.from(".link_contact", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  contact.addEventListener("mouseleave", () => {
    gsap.from(".link_contact", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
  
  form.addEventListener("mouseover", () => {
    gsap.from(".link_form", {
      rotateY: 720,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })
  })
  
  form.addEventListener("mouseleave", () => {
    gsap.from(".link_form", {
      rotateY: -720,
      duration: 0.2,
      opacity: 0,
      stagger: -0.1
    })
  })
}
 navigation();
 