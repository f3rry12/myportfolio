$(document).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 60) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbg");
        $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
      $(".navbar").addClass("navbg");
    }
});
  
$('#ilusWebVr').hover(
  function(){$(this).attr("src","https://cdn.glitch.com/0f211e7c-212a-4d51-a2bd-e9caa1d12445%2Fvrborobudur.png?v=1617765327839")},
  function(){$(this).attr("src","https://cdn.glitch.com/0f211e7c-212a-4d51-a2bd-e9caa1d12445%2Fwebborobudur.png?v=1617765330985")}
);
// document ready  
});


