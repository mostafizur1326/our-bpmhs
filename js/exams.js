// SEARCH_INPUT

function searchInput() {
  let search_icon = document.querySelector(".search_icon");
  let search_input = document.querySelector(".search_input");
  let cl = 0;
  
  
  search_icon.addEventListener("click", () => {
    if (cl == 0) {
      gsap.to(".search_icon", {
        x: -5,
        duration: 1
      })
      gsap.to(".right_search_bar", {
        duration: 1,
        display: "flex"
      })
      gsap.to(".search_input", {
        x: -245,
        duration: 1
      })
      cl = 1;
    } else {
      gsap.to(".search_icon", {
       x: 5,
       duration: 1
      })
      gsap.to(".right_search_bar", {
        duration: 1,
        display: "none"
      })
      gsap.to(".search_input", {
        x: 245,
        duration: 1
      })
      cl = 0;
    }
 })
 
 search_input.addEventListener("blur", () => {
  gsap.to(".search_icon", {
    x: 5,
    duration: 1,
    delay: 0.5
  })
  gsap.to(".right_search_bar", {
    duration: 1,
    display: "none"
  })
  gsap.to(".search_input", {
    x: 245,
    duration: 1
  })
 })
}
searchInput();

// routine_show 

function routineShow() {
  let six_heading = document.querySelector(".six_heading");
  let six = document.querySelector(".six");
  let seven_heading = document.querySelector(".seven_heading");
  let seven = document.querySelector(".seven");
  let eight_heading = document.querySelector(".eight_heading");
  let eight = document.querySelector(".eight");
  let nine_heading = document.querySelector(".nine_heading");
  let nine = document.querySelector(".nine");
  let ten_heading = document.querySelector(".ten_heading");
  let ten = document.querySelector(".ten");
  let click = 0;


  six_heading.addEventListener("click", () => {
    if (click == 0) {
      gsap.to(".six", {
        y: 520,
        duration: 1
      })
      gsap.to(".arrow6", {
        rotate: 90,
        duration: 1
      })
      click = 1;
    } else {
      gsap.to(".six", {
        y: -520,
        duration: 1
      })
      gsap.to(".arrow6", {
        rotate: 0,
        duration: 1
      })
      click = 0;
    }
  })

  seven_heading.addEventListener("click", () => {
    if (click == 0) {
      gsap.to(".seven", {
        y: 520,
        duration: 1
      })
      gsap.to(".arrow7", {
        rotate: 90,
        duration: 1
      })
      click = 1;
    } else {
      gsap.to(".seven", {
        y: -520,
        duration: 1
      })
      gsap.to(".arrow7", {
        rotate: 0,
        duration: 1
      })
      click = 0;
    }
  })

  eight_heading.addEventListener("click", () => {
    if (click == 0) {
      gsap.to(".eight", {
        y: 520,
        duration: 1
      })
      gsap.to(".arrow8", {
        rotate: 90,
        duration: 1
      })
      click = 1;
    } else {
      gsap.to(".eight", {
        y: -520,
        duration: 1
      })
      gsap.to(".arrow8", {
        rotate: 0,
        duration: 1
      })
      click = 0;
    }
  })

  nine_heading.addEventListener("click", () => {
    if (click == 0) {
      gsap.to(".nine", {
        y: 520,
        duration: 1
      })
      gsap.to(".arrow9", {
        rotate: 90,
        duration: 1
      })
      click = 1;
    } else {
      gsap.to(".nine", {
        y: -520,
        duration: 1
      })
      gsap.to(".arrow9", {
        rotate: 0,
        duration: 1
      })
      click = 0;
    }
  })
      
  ten_heading.addEventListener("click", () => {
    if (click == 0) {
      gsap.to(".ten", {
        y: 520,
        duration: 1
      })
      gsap.to(".arrow10", {
        rotate: 90,
        duration: 1
      })
      click = 1;
    } else {
       gsap.to(".routine", {
        y: -520,
        duration: 1
       })
       gsap.to(".arrow10", {
        rotate: 0,
        duration: 1
      })
      click = 0;
    }
  })
}
 routineShow();
 