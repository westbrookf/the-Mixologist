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
// Mouse Over To show Chefs Mini Bio
let andrew = document.getElementById('andrew');
let dave = document.getElementById('dave');

andrew.addEventListener("mouseover", showMini);
dave.addEventListener("mouseover", showMini);

function showMini(){
  const miniBio =  document.querySelectorAll('.minBio');
  miniBio.style.marginTop = "-420px";
}

// Mouse out To Hide Mini Bio


/*function hideminiBio(){
  const bioImage = document.getElementById('andrew');
  bioImage.style.zoom = "";
  
  const miniBio = document.getElementById('miniBio');
  miniBio.style.marginTop = "";

  const backLayer = document.querySelector('.backLayer');
  backLayer.style.marginTop = "-373px";
}*/

// Click to open Chef Bio

function openBio(){
  //Opens Modal Container
  const modalContain = document.getElementsByClassName('modalContain')[0];
  modalContain.style.display = "block";
//Opens Specific Chefs Bio
  const andrewBio = document.getElementById('andrewBio');
  andrewBio.style.display = "block";
}


let closeModal = document.getElementById('exitModal');

closeModal.addEventListener("click", exitModal);

function exitModal(){
  const modalHide = document.getElementsByClassName('modalContain')[0];
  modalHide.style.display = "none";
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