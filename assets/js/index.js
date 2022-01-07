$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $(".navList").slideToggle("slow")
      $(".navList").css({"display":"block","right":"20px","left":"260px"});
      $(".dropdown-menu").css({"left":"1%","top":"28px"})
    });


    
$(window).scroll(function () {
    let height=$(window).scrollTop()
    if( $("#navbar").hasClass("transparant")){
    if (height>0) {
        $("#navbar").css({"background-color":"white","position":"fixed","top":"0"})
    }
    else
    {
        $("#navbar").css({ "position": "absolute",
        "background-color": "transparent"})
    }
}})
$(window).scroll(function () {
    let height=$(window).scrollTop()
    if( $("#navbar").hasClass("none-background")){
    if (height>0) {
        $("#navbar").css({"background-color":"white","position":"fixed","top":"0"})
    }
}})





$(window).scroll(function () {
    let height=$(window).scrollTop()
    if (height>500) {
        $(".scroll-icon").addClass("scroll-active")
    }
    else{
        $(".scroll-icon").removeClass("scroll-active")
    }
})

$(".scroll-icon").click(function () {
    $(window).scrollTop(0)
})
  });