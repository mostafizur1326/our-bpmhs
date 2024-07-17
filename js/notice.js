// NOTICE_DETAILS_VALUE

function notice() {
  
  let hover_notice = document.querySelectorAll(".hover_notice");
  
  hover_notice.forEach((val) => {
    val.addEventListener("mouseenter",() =>{
      val.childNodes[2].style.opacity = 1;
    })
    
    val.addEventListener("mouseleave", () =>{
      val.childNodes[2].style.opacity = 0;
    })
    
    val.addEventListener("mousemove", (dets) =>{
      val.childNodes[2].style.left = dets.x + "px";
    })
  })
}
notice();
