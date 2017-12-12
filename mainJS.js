$('.hamburger, .mobile-link').on('click', function() {
  $('.mobile-nav').toggleClass('open');
});

$('.mobile-link, .nav-link, .link').on('click', function() {
  if (this.hash !== "") {
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 300, function() {
      window.location.hash = hash;
    });
  }
});
$(window).scroll(function() {
  if ($(window).width() >= 810) {
    if ($(document).scrollTop() > 350) {
      $('nav').css("height", "5rem");
    } else {
      $('nav').css("height", "112px");
    }
  } else {
    if ($(document).scrollTop() > 150) {
      $('nav').css("height", "3rem");
    } else {
      $('nav').css("height", "70px");
    }
  }
})


$(document).ready(function() {
  setTimeout(function() {
    $('.pop-up').addClass('active');
  }, 8000);
  $('.pop-up__close-btn').on('click', function() {
    $('.pop-up').fadeOut(500);
  })
  setTimeout(function() {
    $('.preloader').fadeOut(500);
  }, 2000);
});
