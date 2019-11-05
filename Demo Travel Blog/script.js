$(document).ready(function(){

  // Flash message function
  setTimeout(function(){
    $('#flashMessage').slideDown(1500).delay(4000).slideUp(1500);
  },3000)

  //--- Smooth Scrolling to link section ---
   var scrollLink = $('.nav-item'); // css class add to link tags
   scrollLink.click(function(e){
     e.preventDefault();
     $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1000)
    });
 });

// Add current date
var date = new Date();
document.querySelector('#date').textContent = date.toDateString();
