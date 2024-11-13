$(document).ready(function() {
    $('#dark-mode').click(function() {
      $('body').addClass('dark-mode');
      $('.navbar').removeClass('navbar-light-mode').addClass('navbar-dark-mode');
    });
    $('#light-mode').click(function() {
      $('body').removeClass('dark-mode');
 $('.navbar').removeClass('navbar-dark-mode').addClass('navbar-light-mode');
    });
  });
  