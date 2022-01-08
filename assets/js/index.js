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


  let addBtn=document.querySelector(".add-buttom");
  let inputName=document.querySelector(".input-name");
  let inputTxt=document.querySelector(".input-txt");
  let error=document.querySelector(".error");
  let listComments=document.querySelector(".list-comments")
 

  addBtn.addEventListener("click",function(e){
      e.preventDefault();
      let username=inputName.value;
      let usercomment=inputTxt.value;

      let date= new Date();


      if(username=="" && usercomment==""){
           error.classList.remove("d-none")
      }
      else{
        error.classList.add("d-none")
      }

      if(localStorage.getItem("comments")==null){
        localStorage.setItem("comments",JSON.stringify([]));
      }
     
      let comments=JSON.parse(localStorage.getItem("comments"));

      let comment={
          userName:username,
          userComment:usercomment,
          date:date.toLocaleTimeString()
      }
      comments.push(comment);
      getcommentBody(comment);
      
      localStorage.setItem("comments",JSON.stringify(comments));
      inputName.value=" ";
      inputTxt.value=" ";
      commentCount();

  })

  getComment();

  function getComment(){
    let comments=JSON.parse(localStorage.getItem("comments"));
    comments.forEach(comment => {
        getcommentBody(comment)
    });
    
  }

  function getcommentBody(comment){
    listComments.innerHTML+=`
    <li>
    <div class="avatar">
        <img src="./assets/img/comment-avatar.png" alt="">
    </div>
    <div class="comment-content">
        <div class="comment">
            <strong>${comment.userName}</strong>
            <span>${comment.date}</span>
            <a href="#">
                <i class="fa fa-reply">
                    Reply
                </i>
            </a>
        </div>
        <p>${comment.userComment}</p>
    </div>
</li>`
  }
   

  commentCount();

  function commentCount(){
    let count=document.querySelector(".count")
    let comments=JSON.parse(localStorage.getItem("comments"));
    count.innerHTML=comments.length
  }