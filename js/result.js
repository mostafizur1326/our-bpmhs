function resultForm() {
  let name_field = document.querySelector(".name_field");
  let c = document.querySelectorAll(".c");
  let r_btn = document.querySelector(".r_btn");
  let roll_field = document.querySelector(".roll_field");
  let students_result = document.querySelector(".students_result");

  let name = document.querySelector("#name");
  let c_l = document.querySelector("#class");
  let roll = document.querySelector("#roll");
  
  let marks = document.querySelector(".marks");

  let clicks = 0;

  r_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (clicks === 0) {
      gsap.from(".result_btn", {
        rotate: 40,
        duration: 1,
        yoyo: true,
        ease: "none"
      });
    }
  });

  function classMarking() {
    c.forEach((val) => {
      val.addEventListener("click", () => {
        c.forEach((btn) => {
          btn.style.background = "rgba(67, 172, 120, 0.1)";
          btn.style.boxShadow = "none";
        });
        val.style.background = "rgba(67, 172, 120, 0.3)";
        val.style.boxShadow = "0 4px 16px rgba(67, 172, 120, 0.4)";
        clicks = 1;
      });
    });
  }
  classMarking();

  function formValidation() {
    c.forEach((classButton, index) => {
      classButton.addEventListener("click", (check) => {
        
        let ck = check.isTrusted;
        
        r_btn.addEventListener("click", (e) => {
          e.preventDefault();

          const classData = [class6, class7, class8, class9, class10][index];
          

          classData.forEach((info) => {
            if (ck == false) {
          //    alert("⚠ Please Select Your Class !");
            } else if (name_field.value !== info.name) {
           //   alert("⚠ Name Is Not Valid, Please Enter Your Current Name !");
            } else if (roll_field.value !== info.roll) {
          //    alert("⚠ Roll Is Not Valid, Please Enter Your Current Roll !");
            } else {
              
              gsap.from(".indicator", {
                y: -30,
                display: "block",
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "none"
              })
                          
              name.innerHTML = `<h2 id="name"><i class="bi bi-person-fill-check"></i>Name: ${name_field.value}</h2>`;
              c_l.innerHTML = `<h2 id="class"><i class='bx bxs-book'></i>Class: ${classButton.textContent}</h2>`;
              roll.innerHTML = `<h2 id="roll"><i class="bi bi-123"></i>Roll: ${roll_field.value}</h2>`;
              marks.innerHTML = `<tr>
                                    <th>No</th>
                                    <th>Subjects</th>
                                    <th>Marks</th>
                                  </tr>
                                  <tr>
                                    <td>01</td>
                                    <td>${info.res_sub.sub1}</td>
                                    <td>${info.res_sub.Bangla}</td>
                                  </tr>
                                  <tr>
                                    <td>02</td>
                                    <td>${info.res_sub.sub2}</td>
                                    <td>${info.res_sub.English}</td>
                                  </tr>
                                  <tr>
                                    <td>03</td>
                                    <td>${info.res_sub.sub3}</td>
                                    <td>${info.res_sub.Math}</td>
                                  </tr>
                                  <tr>
                                    <td>04</td>
                                    <td>${info.res_sub.sub4}</td>
                                    <td>${info.res_sub.Science}</td>
                                  </tr>
                                  <tr>
                                    <td>05</td>
                                    <td>${info.res_sub.sub5}</td>
                                    <td>${info.res_sub.SocialScience}</td>
                                  </tr>
                                  <tr>
                                    <td>06</td>
                                    <td>${info.res_sub.sub6}</td>
                                    <td>${info.res_sub.Religion}</td>
                                  </tr>
                                  <tr>
                                    <td>07</td>
                                    <td>${info.res_sub.sub7}</td>
                                    <td>${info.res_sub.Computer}</td>
                                  </tr>
                                  <tr>
                                    <td>08</td>
                                    <td>${info.res_sub.sub8}</td>
                                    <td>${info.res_sub.Arts}</td>
                                  </tr>
                                  <tr>
                                    <td>09</td>
                                    <td>${info.res_sub.sub9}</td>
                                    <td>${info.res_sub.PhysicalEducation}</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>${info.res_sub.sub10}</td>
                                    <td>${info.res_sub.Music}</td>
                                  </tr>
                                  <tr class="total_bold">
                                    <td>11</td>
                                    <td>Total</td>
                                    <td>${info.res_sub.Bangla+info.res_sub.English+info.res_sub.Math+info.res_sub.Science+info.res_sub.SocialScience+info.res_sub.Religion+info.res_sub.Computer+info.res_sub.Arts+info.res_sub.PhysicalEducation+info.res_sub.Music}</td>
                                  </tr`;

              students_result.style.display = "block";
              
              ck = false;
              c.forEach((sn) => {
                sn.style.background = "rgba(67, 172, 120, 0.1)";
                sn.style.boxShadow = "none";
              });
              name_field.value = "";
              roll_field.value = "";
            }
          });
        });
      });
    });
  }
  formValidation();
}
resultForm();
