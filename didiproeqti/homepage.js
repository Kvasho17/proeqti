$(document).ready(function(){
  $('.dropdown').hover(function(){
    $(this).find('.dropdown-content').stop(true, true).slideDown(300);
  }, function(){
    $(this).find('.dropdown-content').stop(true, true).slideUp(300);
  });
});
