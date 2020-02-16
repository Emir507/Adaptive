window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
let menu = document.getElementById("sidebar");
// menu.addEventListener("click", (e) => {
//   e.stopPropagation;
//   let target = e.target;
//   target.classList.remove("nav-link--active");
// });
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

  var height = $('.navbar').css('height');
  var replaced = Number(height.replace('px', ''));
  
  $("#sidebar").on("click", "a", function (event) {
    event.preventDefault();
    let target = event.target;
    for (let i = 0; i < $("#sidebar a").length; i++) {
      $("#sidebar a").removeClass("nav-link--active");
    }
    target.classList.remove("nav-link--active");
    target.classList.add("nav-link--active");
    $("#sidebar").removeClass("active");
    $(".overlay").removeClass("active");
    console.log(target.classList);
    var id = $(this).attr('href'),
      top = $(id).offset().top - replaced;
    $('body,html').animate({
        scrollTop: top
      }, 1000
    );
  });
});