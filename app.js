// All forms at the footer validation
let form = document.getElementById("reservationForm");

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
//Menu Card Flip
let Card = document.querySelector(".menuCard");
let playing = false;

Card.addEventListener("click", flipped);
function flipped() {
  if (this.playing) return;
  playing = true;
  anime({
    targets: ".menuCard",
    scale: [{ value: 1 }, { value: 1.1 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
    easing: "easeInOutSine",
    duration: 400,
    complete: function(anim) {
      playing = false;
    }
  });
}

// About Page Mouse Over To show Chefs Mini Bio
let andrew = document.getElementById("drew");
let dave = document.getElementById("dave");
let carie = document.getElementById("carie");

if (andrew) {
  andrew.addEventListener("mouseover", shrtBio);
}
if (dave) {
  dave.addEventListener("mouseover", shrtBio);
}
if (carie) {
  carie.addEventListener("mouseover", shrtBio);
}
function shrtBio() {
  const picId = this.attributes["data-text"].value;
  const pic = document.getElementById(picId);
  pic.style.marginTop = "-190px";
}
// Mouse out To Hide Mini Bio
if (andrew) {
  andrew.addEventListener("mouseout", clseMini);
}
if (dave) {
  dave.addEventListener("mouseout", clseMini);
}
if (carie) {
  carie.addEventListener("mouseout", clseMini);
}

function clseMini() {
  const picId = this.attributes["data-text"].value;
  const pic = document.getElementById(picId);
  pic.style.marginTop = "";
}

// Click to open Chef Bio
let andrewOpen = document.getElementById("andrewDesc");
let daveOpen = document.getElementById("daveBio");
let carieOpen = document.getElementById("abtCarie");

if (andrewOpen) {
  andrewOpen.addEventListener("click", openModal);
}
if (daveOpen) {
  daveOpen.addEventListener("click", openModal);
}
if (carieOpen) {
  carieOpen.addEventListener("click", openModal);
}
function openModal() {
  const modalId = this.attributes["data-modal"].value;
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  anime({
    targets: ".GlobalBio",
    opacity: ["0", "1"],
    duration: 600,
    easing: "linear"
  });
}

//Close Modal Btn
let andrewClose = document.getElementById("exitAndrew");
let daveClose = document.getElementById("exitDave");
let carieClose = document.getElementById("exitCarie");

if (andrewClose) {
  andrewClose.addEventListener("click", closeModal);
}
if (daveClose) {
  daveClose.addEventListener("click", closeModal);
}
if (carieClose) {
  carieClose.addEventListener("click", closeModal);
}
function closeModal() {
  const modalClose = this.attributes["data-exit"].value;
  const modalExit = document.getElementById(modalClose);
  modalExit.style.display = "none";
}

//Google Maps api starts here

function initMap() {
  const options = {
    zoom: 8,
    center: { lat: 38.5935655, lng: -90.229932 }
  };

  const map = new google.maps.Map(document.getElementById("maps"), options);

  //Marker
  const marker = new google.maps.Marker({
    position: { lat: 38.5935655, lng: -90.22993 },
    map: map
  });
}
