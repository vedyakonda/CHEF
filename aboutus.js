var home = document.getElementById('home');
home.addEventListener("click", function(){
  
})

var wm = document.getElementById('gametime');
wm.addEventListener("click", function(){

})

var pg = document.getElementById('other');
pg.addEventListener("click", function(){
  
})

var au = document.getElementById('aboutUs');
au.addEventListener("click", function(){
 
})

var au = document.getElementById('mentorship');
au.addEventListener("click", function(){
 
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}