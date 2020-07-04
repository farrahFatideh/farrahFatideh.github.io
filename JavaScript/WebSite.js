// Read more btn js
function myFunction() {
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display === 'inline') {
    btnText.innerHTML = 'More...&nbsp;<i class="fa fa-angle-double-right"></i>';
    moreText.style.display = 'none';
  } else {
    btnText.innerHTML = '<i class="fa fa-angle-double-left"></i>&nbsp;&nbsp;Less&nbsp;';
    moreText.style.display = 'inline';
  }
}

// Sidebar js
function toggleNav() {
  var sidebar = document.getElementById('mySidebar');
  var main = document.getElementById('main');
  var overlay = document.getElementById('overlay');

  if (window.getComputedStyle(sidebar).getPropertyValue('width') == '0px') {
    sidebar.style.width = '155px';
    main.style.marginLeft = '155px';
    overlay.style.display = 'block';
  } else {
    sidebar.style.width = '0%';
    main.style.marginLeft = '0%';
    overlay.style.display = 'none';
  }
}

// Time
function dateAndTime() {
  var today = new Date();
  document.getElementById('timer').innerHTML = today.toLocaleTimeString();
  document.getElementById('date').innerHTML = today.toLocaleDateString();
  setTimeout(dateAndTime, 1000);
}
dateAndTime();

// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


// Animate on scroll
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });