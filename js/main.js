window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('.nav-link').on('click', function () {
    $('.nav-link').addClass('.nav-link--active');
  });

  // var height = $('.navbar').css('height');
  // var replaced = Number(height.replace('px', ''));
  // console.log(replaced);
  
  $("#sidebar").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
      console.log(top);
    $('body,html').animate({
        scrollTop: top
      }, 1500,
      function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
      }
    );
  });
});