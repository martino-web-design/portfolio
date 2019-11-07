$(document).ready(function(){

  // --- Flash message function ---
  setTimeout(function(){
    $('#flashMessage').slideDown(1500).delay(4000).slideUp(1500);
  },3000)

  // --- Smooth Scrolling to link section ---
   var scrollLink = $('.nav-item'); // css class add to link tags
   scrollLink.click(function(e){
     e.preventDefault();
     $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1000)
    });

  // --- Toggle menu ---
  const navB = document.querySelector('#navbarNavAltMarkup .navbar-nav');
  const navDrop = document.querySelector('#navbarNavAltMarkup');
  navB.addEventListener('click', function(){
    if(window.innerWidth < 576){
      navDrop.classList.toggle('show');
    }
  });

  // --- Add current date ---
  var date = new Date();
  document.querySelector('#date').textContent = date.toDateString();

}); // end doc ready
