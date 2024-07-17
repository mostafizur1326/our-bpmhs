// PLACES_IMAGE_VIEWER

function places(place) {
  let mainImage = document.querySelector(".main_img");
  let imageName = document.querySelector(".img_name");
  let imageDescription = document.querySelector(".image_description");

  mainImage.src = place.src;
  gsap.from(".main_img", {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: 0.1,
  });

  imageName.innerHTML = place.alt;
  gsap.from(".img_name", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.1,
  })
  let imgDescription = place.getAttribute("data-description");
  imageDescription.innerHTML = imgDescription;
  gsap.from(".image_description", {
    y: 50, 
    opacity: 0,
    duration: 1,
    delay:0.5
    
  })
}

// PLACE_DYNAMIC_INPUT

function placeInput() {
  let all_place_images = document.querySelector(".all_place_images");

  let output  = "";
  let allPlace = [
    {
      place: "./img/place0.jpg",
      name: "SCHOOL",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas temporibus repellendus vero id, repellat ex illum qui quos sed eligendi quidem facilis voluptatum, nam explicabo asperiores pariatur, cumque fugiat."
    },
    {
      place: "./img/place8.png",
      name: "CLASS ROOM",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint laboriosam, fugiat et, cumque magni porro facilis animi soluta consequuntur aperiam alias. Excepturi numquam esse corporis deleniti illo quo non necessitatibus!"
    },
    {
      place: "./img/place3.png",
      name: "SCHOOL FIELD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nesciunt placeat mollitia unde quasi ea soluta eos atque ad tenetur culpa, sit, dignissimos tempora maxime ipsum voluptatibus, debitis alias deleniti."
    },
    {
      place: "./img/place2.png",
      name: "SCHOOL OFFICE",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nesciunt placeat mollitia unde quasi ea soluta eos atque ad tenetur culpa, sit, dignissimos tempora maxime ipsum voluptatibus, debitis alias deleniti."
    },
  ]
  allPlace.forEach((val) =>{
    output += `<div class="image" onmouseover="about()"><img class="place_image_sub" src="${val.place}" alt="${val.name}" data-description="${val.description}" onclick="places(this)"></div>`;
  })
  all_place_images.innerHTML = output;
}
placeInput();

// MEMHER_IMAGE_DYNAMIC_INPUT

function memberInput(member) {
  let profile_img = document.querySelector(".profile_img");
  let sub_profile_img = document.querySelector(".sub_profile_img");
  
  // Member Details Declared
  let name = document.querySelector(".name");
  let profession = document.querySelector(".profession");
  let number = document.querySelector(".number");
  let email = document.querySelector(".email");
  let dfb = document.querySelector(".dfb");
  let address = document.querySelector(".address");
  
  // Member Details Attribute Call
  let sub_profile_img_details1 = member.getAttribute("data1");
  let sub_profile_img_details2 = member.getAttribute("data2");
  let sub_profile_img_details3 = member.getAttribute("data3");
  let sub_profile_img_details4 = member.getAttribute("data4");
  let sub_profile_img_details5 = member.getAttribute("data5");
  let sub_profile_img_details6 = member.getAttribute("data6");
  
  
  // Member Details 
  name.innerHTML = sub_profile_img_details1;
  profession.innerHTML = sub_profile_img_details2;
  number.innerHTML = sub_profile_img_details3;
  email.innerHTML = sub_profile_img_details4;
  dfb.innerHTML = sub_profile_img_details5;
  address.innerHTML = sub_profile_img_details6;
  
  // Show Output
  profile_img.src = member.src;
}

// MEMBERS_DYNAMIC_INPUT

function members(member) {
  let all_members = document.querySelector(".all_members");
  
  let output  = "";
  let allMember = [
    {
      member: "./img/member1.webp",
      name: "D.T.M.Mahbub Rahman",
      profession: "Head Master",
      number: "+8801*********",
      email: "dtmmahbubrahman11@gmail.com",
      dfb: "DD/MM/YYYY",
      address: "Home,Upazila,District"
    },
    {
      member: "./img/member2.webp",
      name: "name2"
    },
    {
      member: "./img/member3.webp",
      name: "name3"
    },
    {
      member: "./img/member4.webp",
      name: "name4"
    },
    {
      member: "./img/member5.webp",
      name: "name5"
    },
  ]
  allMember.forEach((val) =>{
    output += `<div class="member"><img src="${val.member}" alt="" data1="${val.name}" data2="${val.profession}" data3="${val.number}" data4="${val.email}" data5="${val.dfb}" data6="${val.address}" onclick="memberInput(this)"><span>${val.name}</span></div>`;
  })
  all_members.innerHTML = output;
  
}
members();

// MEMBERS_CARD_SHOW 

function membersCardShow() {
  let allMembers = document.querySelector(".all_members");
  let member = document.querySelectorAll(".member");
  let cross = document.querySelector(".cross");
  let member_details = document.querySelector(".member_details");
  
  
  member.forEach((delt) => {
    delt.addEventListener("click", (e) => {
      e.preventDefault();
       member_details.style.display = "flex";
       allMembers.style.filter = "blur(10px)";
      
      
            let tl2 = gsap.timeline(); //ANIMATION
      tl2.from(".member_details", {
        x: "100%",
        duration: 0.3,
        opacity: 0
      })
      tl2.from(".member_profile", {
        x: -190,
        duration: 1,
        opacity: 0
      })
      tl2.from(".name_profetion h2", {
        x: 100,
        duration: 1,
        opacity: 0
      }, "same")
      tl2.from(".name_profetion h4", {
        x: -100,
        duration: 1,
        opacity: 0
      }, "same")
      tl2.from(".info", {
        y: 90,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
      })
    })
  })
    
  cross.addEventListener("click", (e) => {
    e.preventDefault();
    member_details.style.display = "none";
    allMembers.style.filter = "blur(0px)";
  })
}
membersCardShow();
