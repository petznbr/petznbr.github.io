$(".menu").click(function(){$(".container").toggle();});

$(".tog1").click(function(){
    $('img',this).toggle();
    $('.job1').toggle();
  });

  $(".tog2").click(function(){
    $('img',this).toggle();
    $('.job2').toggle();
  });

  $(".tog3").click(function(){
    $('img',this).toggle();
    $('.job3').toggle();
  });

  $(".tog4").click(function(){
    $('img',this).toggle();
    $('.skills1').toggle();
  });

  $(".tog5").click(function(){
    $('img',this).toggle();
    $('.skills2').toggle();
  });

  
$(document).ready(function() {

  $('.gallery-item').hover(function() {
    $(this).find('.img-title').fadeIn(300);
  }, function() {
    $(this).find('.img-title').fadeOut(100);
  });

});