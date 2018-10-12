import 'bootstrap'
import '../scss/resume.scss';
var $ = require("jquery");

'use strict'; // Start of use strict

// Smooth scrolling using jQuery easing
// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: (target.offset().top)
//       }, 1000, 'easeInOutExpo');
//       return false;
//     }
//   }
// });

// Closes responsive menu when a scroll trigger link is clicked
// $('.js-scroll-trigger').click(function() {
//   $('.navbar-collapse').collapse('hide');
// });

// // Activate scrollspy to add active class to navbar items on scroll
// $('body').scrollspy({
//   target: '#sideNav'
// });
//

function makeHighlight(e, ptn){
  e.innerHTML = e.innerHTML.replace(ptn, '<span class="highlight-me">' + ptn + "</span>");
}

$(document).ready(function() {
  $('.BIBEntry .author').each(function(){makeHighlight(this, 'Jie Jiang')});
  $('.BIBTeX').hide();
  $('.BIBTeXtoggle').click( function () {
    $(this).parent().children('.BIBTeX').toggle(300);
    return false;
  });
  // $('.BIBYear').hide();
  // $('.BIBYear:first').show();
  $('.BIBYearheader').click( function () {
    $(this).parent().children('.BIBYear').toggle(300);
    return false;
  });
  $('.bibshowall').click( function () {
    $('.BIBYear').show();
  });
  $('.bibhideall').click( function () {
    $('.BIBYear').hide();
    $('.BIBYear:first').show();
  });

  $('img').click(function() {
    $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
    $('#enlargeImageModal').modal('show');
  });
});


