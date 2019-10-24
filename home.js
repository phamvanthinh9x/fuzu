$(document).on('ready', function() {
       $('.slider-for').slick({
         autoplay: true,
       });
});
function menu(){
  var x=$('#menu').css("display");
  if (x=="block") {
      $('#menu').hide();
  }
  else {
    $('#menu').show();
  }
}