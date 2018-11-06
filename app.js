// All forms at the footer validation
let form = document.getElementById('reservationForm');

form.addEventListener("submit", validateForm);

function validateForm() {
  const name = document.forms["newForm"]["firstLast"].value;
  if (name == "") {
    alert("name is required");
    return false;
  }
  const date = document.forms["newForm"]["dateTime"].value;
  if (date == "") {
    alert("date is required");
    return false;
  }
 return true; 
}
//Home Page
let openNav = document.getElementById("openNav");
let closeNav = document.getElementById("hideIcon");
let menu = document.querySelector(".homeMenu");

openNav.addEventListener("click", viewNav);
closeNav.addEventListener("click", exitNav);

function viewNav(){
  menu.style.display = "block";
  menu.style.opacity = "1";
  openNav.style.display = "none";
}

function exitNav(){
  menu.style.display = "none";
  openNav.style.display = "block";
}
//About Us page 
// Mouse Over To show Chefs Mini Bio
let andrew = document.getElementById("andrew");
let dave = document.getElementById("dave");
let carie = document.getElementById("carie");

andrew.addEventListener("mouseover", shrtBio);
dave.addEventListener("mouseover", shrtBio);
carie.addEventListener("mouseover", shrtBio);


function shrtBio(){
  const picId = this.attributes["data-text"].value;
  const pic = document.getElementById(picId);
  pic.style.marginTop = "-190px";  
}
// Mouse out To Hide Mini Bio
andrew.addEventListener("mouseout", clseMini);
dave.addEventListener("mouseout", clseMini);
carie.addEventListener("mouseout", clseMini);


function clseMini(){
  const picId = this.attributes["data-text"].value;
  const pic = document.getElementById(picId);
  pic.style.marginTop = "";
}

// Click to open Chef Bio
let andrewClose = document.getElementById("exitAndrew");
let daveClose = document.getElementById("exitDave");
let carieClose = document.getElementById("exitCarie");

andrewClose.addEventListener("click", closeModal);
daveClose.addEventListener("click", closeModal);
carieClose.addEventListener("click", closeModal);

function closeModal(){
  const modalClose = this.attributes["data-exit"].value;
  const modalExit = document.getElementById(modalClose);
  modalExit.style.display = "none";
}


//Close Modal Btn 
let andrewOpen = document.getElementById("andrewDesc");
let daveOpen = document.getElementById("daveBio");
let carieOpen = document.getElementById("abtCarie")

andrewOpen.addEventListener("click", openModal);
daveOpen.addEventListener("click", openModal);
carieOpen.addEventListener("click", openModal);

function openModal(){
  const modalId = this.attributes["data-modal"].value;
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}



//Google Maps api starts here

function initMap(){
  const options = {
    zoom: 8,
    center: {lat:38.5935655,lng:-90.229932}
  }

  const map = new google.maps.Map(document.getElementById('maps'), options);

  //Marker
  const marker = new google.maps.Marker({
    position:{lat:38.5935655,lng:-90.22993},
    map:map
  });
}