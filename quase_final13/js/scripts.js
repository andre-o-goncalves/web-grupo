$(document).ready(function(){

  //Hamburger
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".nav_items").toggleClass("open");
    });

  //Fim Hamburger

  // Acção de fazer o scrool top (Homepage)

  $('#top-home').click(function() {
      $('html, body').stop().animate({
         scrollTop: 0
      }, 500, function() {
         $('#top-home').stop().animate({
             top: '-100px'
         }, 500);
      });
  });

  // Botão para fazer o scrool top (Página dos eventos)

  $('#topo').hide();

  $(window).scroll (function() {

    if ($(document).scrollTop() > 500 ) {
      $('#topo').fadeIn();
    } else {
      $('#topo').fadeOut();
    }
  });

  $('#topo').click(function() {
      $('html, body').stop().animate({
         scrollTop: 0
      }, 500, function() {
         $('#topo').stop().animate({
             top: '-100px'
         }, 500);
      });
  });

});


// Slideshow (Página dos cursos)

var slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
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

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
