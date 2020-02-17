let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
let slides = $('#portfolio .carousel-item');
console.log(slides);
for (let i = 0; i < slides.length; i++) {
  if (slides[0].classList.contains("active")) {
    console.log('активный класс у 1го элемента');
  }
}

$('#portfolio .carousel').carousel({
  wrap: false,
  interval: false
})

let navbarHeight = $('.navbar').css('height');
let portfolioHeight = $('#portfolio').css('height');
let firstPageHeight = Number(portfolioHeight.replace("px", "")) - Number(navbarHeight.replace('px', ''));
console.log(firstPageHeight);
$('#portfolio').css('height', firstPageHeight);


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

  var replaced = Number(navbarHeight.replace('px', ''));


  $("#sidebar").on("click", "a", function (event) {
    event.preventDefault();
    let target = event.target;
    // for (let i = 0; i < $("#sidebar a").length; i++) {
    //   $("#sidebar a").removeClass("nav-link--active");
    // }
    // target.classList.remove("nav-link--active");
    // target.classList.add("nav-link--active");
    $("#sidebar").removeClass("active");
    $(".overlay").removeClass("active");
    console.log(target.classList);
    var id = $(this).attr('href'),
      top = $(id).offset().top - replaced;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});