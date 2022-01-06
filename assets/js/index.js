$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $(".navList").slideToggle("slow")
      $(".navList").css({"display":"block","right":"20px","left":"260px"});
      $(".dropdown-menu").css({"left":"1%","top":"28px"})
    });


    
$(window).scroll(function () {
    let height=$(window).scrollTop()
    if (height>0) {
        $("#navbar").css({"background-color":"white","position":"fixed","top":"0"})
    }
    else
    {
        $("#navbar").css({"background-color":"orange"})
    }
})
  });