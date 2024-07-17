function allAnimation() {
  let tl = gsap.timeline();
  
  tl.from(".logo1 h1 span", {
    y: -10,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15,
  })

  tl.from(".header1 ul a, .singUpBtn", {
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

  tl.from(".heading1 h1", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  }, "-=4")
  
  tl.from(".school_summery p", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  }, "-=3.5")
  
  gsap.to(".bg_animation, .notice_card", {
    y: 50,
    duration: 1,
    delay: 1,
    repeat: -1, 
    yoyo: true,
  })
 }
 allAnimation();

 // ABOUT_ANIMATION
 
function aboutAnimation() {
  gsap.from(".all_place_images .image h5", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  })
   
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".school_places",
      scroller: "body",
      start: "top 30%",
      end: "top 0",
      scrub: 2,
    }
  })
  
  tl.from(".bg_place",{
    y: "-100vh",
    duration: 0.5,
    opacity: 0
  })
  
  tl.from(".place_image", {
    x: -200,
    opacity: 0,
    duration: 1,
  },"ani")
  tl.from(".place_details", {
    x: 200,
    opacity: 0,
    duration: 1,
  }, "ani")
  
  tl.from(".all_place_images", {
    y: 200,
    opacity: 0,
    duration: 0.5
  })
  
  gsap.to(".place_summery", {
    transform: "translateX(-997.5%)",
    scrollTrigger: {
      trigger: ".place_summery",
      scroller: "body",
      start: "top 5%",
      end: "top -100%",
      scrub: 2,
      pin: ".place_summery"
    }
  })
  
 let tl2 = gsap.timeline({
   scrollTrigger: {
      trigger: ".school_members",
      scroller: "body",
      start: "top 20%",
      end: "top 0",
      scrub: 2
    }
  })
  tl2.from(".member_heading h1", {
    x: -490,
    duration: 2,
    opacity: 0
  })
  gsap.to(".member_heading span", {
    x: -490,
    duration: 5,
    delay: 0.5,
    repeat: -1,
    yoyo: true
  })
  tl2.from(".all_members", {
    y: 300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2
  })
  
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".application",
      scroller: "body",
      start: "top 10%",
      end: "top 0",
      scrub: 2
    }
 })
 tl3.from(".application_heading h1", {
   y: 100,
   duration: 0.5,
 })
 tl3.from(".apli_txt", {
  x: 500,
  duration: 0.5,
  opacity: 0
 }, "sm")
  tl3.from(".apli_img", {
    x: -500,
    duration: 0.5,
    opacity: 0
  }, "sm")
  tl3.from(".appli1 h1", {
  x: -300,
  duration: 0.5,
  opacity: 0,
  stagger: 0.6
  }, "sm1")
  tl3.from(".appli1 p", {
    y: 300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.6
  }, "sm1")
}
 aboutAnimation();
 
 // NOTICE_ANIMATION
 
function noticeAnimation(){
 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".notice_details",
      scroll: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 3,
    }
  });

  tl.from(".hover_notice", {
    y: 10,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  
  
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".poster",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    }
  })
  
  // 1
  tl2.from(".ani_title1, .ani_p1", {
    x: -500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_border1", {
    x: -1500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_img1", {
    y: -450,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  // 2
  tl2.from(".ani_title2, .ani_p2", {
    x: 500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_border2", {
    x: 1500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_img2", {
    y: -450,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  // 3
  tl2.from(".ani_title3, .ani_p3", {
    x: -500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_border3", {
    x: -1500,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  tl2.from(".ani_img3", {
    y: -450,
    duration: 1,
    delay: 1,
    stagger: 1,
  })
  
  
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".events",
      scroller: "body",
      start: "top 30%",
      end: "top 0",
      scrub: 2,
    }
  })
  
  tl3.from(".event_heading", {
    y: 40,
    duration: 0.5,
    opacity: 0
  })
  
  gsap.from(".event_border", {
    y: -30,
    duration: 2,
    delay: 0.11,
    repeat: -1,
    yoyo: true
  })
  
  tl3.from(".all_event", {
    x: "-100%",
    duration: 0.5,
    rotate: -50
  })
  
  tl3.from(".event_img", {
    x: 282,
    duration: 0.5,
    rotate: -50,
    stagger: 0.2
  })
  
  tl3.from(".event_txt h3, .event_txt p, .event_txt h5", {
    y: 20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.15
  })
  
  let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    scroll: "body",
    start: "top 90%",
    end: "top 50%",
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
 noticeAnimation();

// CONTACT_ANIMATION

function contactAnimation() {
  
  gsap.from(".contact_heading, .button", {
    x: -500,
    duration: 1,
    opacity: 0,
    stagger: 1
  })
  
  gsap.to(".contact_heading_border", {
    x: 200,
    duration: 1,
    delay: 1.5,
    repeat: -1,
    yoyo: true
  })
  
  gsap.from(".contact_input", {
    x: "90%",
    duration: 1,
    opacity: 0,
    stagger: 0.1
  })
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".map",
      scroller: "body",
      start: "top 30%",
      end: "top 10%",
      scrub: 2
    }
  })
  gsap.from(".map_border", {
   y: -110,
    duration: 1,
    opacity: 0,
    repeat: -1,
    yoyo: true
  })
  tl.from(".map_heading", {
    x: 100, 
    duration: 0.5,
    opacity: 0
  })
  tl.from(".map_heading h1", {
    y: 100,
    duration: 0.5,
    opacity: 0
  })
  tl.from(".map_feild", {
    x: "-100%",
    duration: 0.5,
    opacity: 0
  })
  
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact_media",
      scroller: "body",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    }
  })
  tl1.from(".media_heading", {
    x: 100,
    duration: 0.5,
    opacity: 0
  })
  tl1.from(".media_heading h1", {
    y: 100,
    duration: 0.5,
    opacity: 0
  })
  tl1.from(".media i", {
    y: -200,
    duration: 0.2,
    opacity: 0,
    stagger: 0.2
  })
  
  tl1.from(".location", {
    y: 200,
    duration: 1,
    opacity: 0
  })
  
}
 contactAnimation();

// EXAMS_ANIMATION

function examsAnimation() {
  let tl = gsap.timeline();
  tl.from(".hero_bg1", {
    x: 800,
    duration: 2,
  }, "same")
  tl.from(".hero_bg2", {
    x: "-150vw",
    duration: 2,
  }, "same")
  tl.from(".exams_hero_heading h4", {
    x: -400,
    opacity: 0,
    duration: 2,
  })
  tl.from(".exams_hero_heading p", {
    x: -400,
    opacity: 0,
    duration: 0.5,
  })
  tl.from(".exams_hero_heading .h_btn", {
    x: -400,
    opacity: 0,
    duration: 0.5,
  })
  tl.from(".right_bar_middle", {
    x: 400,
    duration: 1,
  })
  tl.from(".right_bar_top", {
    y: 50,
    opacity: 0,
    duration: 2,
  }, "sm")
  tl.from(".right_bar_bottom", {
    y: -50,
    opacity: 0,
    duration: 2,
  }, "sm")
    
  gsap.from(".exams_hero_heading h1 .l_e", {
    y: 400,
    duration: 3,
    stagger: 0.3,
    rotateX: -360
  })
  gsap.from(".exams_hero_heading h1 .r_e", {
    y: 400,
    duration: 3,
    stagger: -0.3,
    rotateX: -360
  })
  gsap.from(".exams_hero_heading h1 .i_e", {
    y: 400,
    duration: 3,
    stagger: -0.3,
  })
  gsap.from(".exams_hero_heading h1 .i_e", {
    duration: 3,
    delay: 4,
    stagger: -0.3,
    rotateX: -360,
    repeat: -1,
    ease: "none"
  })
  gsap.from(".exams_hero_heading h1 .i_e", {
    duration: 5,
    delay: 4,
    stagger: -0.3,
    rotate: 360,
    repeat: -1,
    ease: "none"
  })
  
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".exams_details",
      scroller: "body",
      start: "top 20%",
      end: "top 0",
      scrub: 2
    }
  })
  tl2.from(".exams_details_heading h1", {
    x: -500,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice span", {
    y: 100,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h1", {
    x: 200,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h2", {
    y: 100,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h3", {
    x: 200,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h4", {
    y: 100,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h5", {
    x: 200,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice h6", {
    x: -200,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice address", {
    y: -200,
    duration: 1,
    opacity: 0
  })
  tl2.from(".exams_notice address p", {
    y: 200,
    duration: 1,
    opacity: 0,
    stagger: 0.3
  })
  
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".exams_routine",
      scroller: "body",
      start: "top 60%",
      end: "top 0",
      scrub: 5
    }
  })
  tl3.from(".exams_routine_heading h1", {
    x: 500,
    duration: 1,
    opacity: 0
  })
  tl3.from(".class", {
    x: -500,
    duration: 1,
    opacity: 0,
    stagger: 1
  })
  
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".result",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
      scrub: 2
    }
  })
  tl4.from(".o1", {
    x: -100,
    duration: 0.5,
    opacity: 0
  }, "sm")
  tl4.from(".o2", {
    x: 100,
    duration: 0.5,
    opacity: 0
  }, "sm")
}
 examsAnimation();

// RESULT_ANIMATION

function resultAnimation() {
  let tl = gsap.timeline();
  tl.from(".result_hero_heading h1", {
    x: -800,
    duration: 1,
  }, "sm")
  tl.from(".result_hero_heading h1 i", {
    rotate: 360,
    duration: 2,
    repeat: -1,
    ease: "none"
  })
  tl.from(".result_hero_heading p", {
    x: 800,
    duration: 1,
  }, "sm")
  tl.from(".result_hero_heading p i", {
    rotate: 360,
    duration: 2,
    repeat: -1,
    ease: "none"
  })
  tl.from(".rr", {
    x: 500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
  })
  tl.from(".rl", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
  })
  tl.from(".result_field_class", {
    x: -500,
    opacity: 0,
    duration: 0.5,
  }, "-=1")
  tl.from(".result_btn", {
    y: 400,
    duration: 1,
    opacity: 0
  })
  
  let tl2 = gsap.timeline(
    {
    scrollTrigger: {
      trigger: ".students_result",
      scroller: "body",
      start: "top 90%",
      end: "top 0",
      scrub: 2
    }
  }
  )
  tl2.from(".students_result_heading h1", {
    x: -800,
    duration: 1,
    opacity: 0
  })
  tl2.from(".info_heading h1", {
    x: 500,
    duration: 2,
    opacity: 0
  })
  tl2.from(".student_name, .student_class, .student_roll", {
    y: 800,
    duration: 1,
    opacity: 0,
    stagger: 0.3
  })
  tl2.from(".students_result_publish h1", {
    x: -500,
    duration: 1,
    opacity: 0
  })
  tl2.from(".students_result_publish table", {
    x: 500,
    opacity: 0,
    duration: 0.5
  })
  tl2.from(".students_result a button", {
    x: -500,
    opacity: 0,
    duration: 0.5
  })
}
 resultAnimation();
 
// DEVELOPMENT

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
 