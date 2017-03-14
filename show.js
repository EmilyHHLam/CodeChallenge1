
var currentIndex = 0;
$(document).ready(function(){

  $('button').on("click", function() {

    current = currentIndex++;

    $('.container').append("<div class='smallContainer'></div>");
    var $el = $('.container').children().last();
    $el.append("<p></p><p>" + current + "</p>");
    $el.append("<button class='swap'>swap color</button>&nbsp;&nbsp;");
    $el.append("<button class='delete'>delete</button>");

  });



  $('.container').on("click", ".swap", function(){

     $(this).parent().toggleClass('switchColor');
     console.log("swap");
  });

  $('.container').on("click", ".delete", function() {
    $(this).parent().remove();
    console.log('delete');
  });


});//end of deleteContainer
