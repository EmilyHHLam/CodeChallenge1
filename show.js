
var currentIndex = 0;
$(document).ready(function(){

$('button').on("click", function() {

current = currentIndex++;

$('.container').append("<div class='smallContainer'></div>");
var $el = $('.container').children().last();
$el.append("<p></p><p>" + current + "</p>");
$el.append("<button id= 'swap'>swap color</button>");
$el.append("<button id='delete'>delete</button>");
colorSwap();
deleteContainer();
});

function colorSwap() {
  $('.smallContainer').on("click", "#swap", function(){
    $(this).parent().addClass('switchColor');
  //console.log("swap");
  });
}

function deleteContainer() {
  $('.smallContainer').on("click", "#delete", function() {
    $(this).parent().remove();
    console.log('delete');
  });


}//end of deleteContainer

});//end of doc
