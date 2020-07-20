

 $(document).ready(function(){
   //--- Smooth Scrolling to link section ---
   var scrollLink = $('.smooth'); // css class add to link tags

   scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: $(this.hash).offset().top-75}, 1200)
   });

  $(window).scroll(function(){
    //--- Nav menu add box shadow on scroll ---
    if ($(window).scrollTop() >= 30) {
      $('header nav').css({'box-shadow': '0px 0px 10px #555'});
    }
    else {
      $('header nav').css('box-shadow', '0 0 0 #fff');
    }
    //--- Scrolling Add Active Nav Class ---
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset= $(this.hash).offset().top -150;
      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      };
    }); // end scrollLink func.
  }); //end window scroll

  // --- Menu collapse after target selected ---
  const navUl = document.querySelector('#navbarNav ul');
  const navB = document.querySelector('#navbarNav');

  navUl.addEventListener('click',function(){
    navB.classList.toggle('show');
  });

  // --- Home button onclick remove active nav class ---
  $('#home').click(function(){
   $('.nav-item').removeClass('active');
  });

  // --- Add Jumbo Parallax Effect
  document.addEventListener('scroll', addScrollListener);
  function addScrollListener(){
    hero_logo.style.top = -(window.pageYOffset / 2) + 'px';
  }

});//end of JQuery doc ready
