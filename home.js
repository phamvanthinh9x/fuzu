$(document).on('ready', function() {
       $('.slider-for').slick({
         autoplay: true,
       });



       //if (true) {
      // $(".fomat_fas").click(function(){
       //$(".bg_top_2").hide();
       //});
      // }
});
function show_hide()
{

	var x=$(".bg_top_2").css("display");
	if (x="block") {
    $(".bg_top_2").css("display","none");
    x=$(".bg_top_2").css("display");
    console.log(x);
    }
    else(x="none") {
    $(".bg_top_2").css("display","block");
    x=$(".bg_top_2").css("display");
    }

}