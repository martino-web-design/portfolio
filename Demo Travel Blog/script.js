 $(document).ready(function(){
  $('#flashMessage').hide().delay(2000).slideDown(2000).delay(5000).slideUp(1500);
  $('#previewButton').hide().delay(2000).fadeIn(4000);


  //--- Smooth Scrolling to link section ---
   var scrollLink = $('.nav-item'); // css class add to link tags
   scrollLink.click(function(e){
     e.preventDefault();
     $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1000)
    });
    /*
  $('.nav-item').click(function(){
    var active = $('.active');
    $(active.hash).offset().top-150;
  });
*/



 });

// Add current date
var date = new Date();
document.querySelector('#date').textContent = date.toDateString();
