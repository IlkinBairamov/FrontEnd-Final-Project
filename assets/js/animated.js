document.addEventListener("scroll",function(){
    if(window.scrollY>110){
        let delay=2;
        document.querySelectorAll(".wow-future").forEach(item=>{
            item.classList.add("animate__fadeInUp",`animate__delay-${delay}`)
            delay+=1
        })
    }

    if (window.scrollY>700) {
        document.querySelector(".wow-right").classList.add("animate__fadeInRight")
    }
    if (window.scrollY>1350) {
        document.querySelector(".wow-left").classList.add("animate__fadeInLeft")
    }

    if(window.scrollY>3200){
        let delay=2;
        document.querySelectorAll(".wow-price").forEach(item=>{
            item.classList.add("animate__fadeInUp",`animate__delay-${delay}`)
            delay+=1
        })
    }
})

// animate__fadeInRight
// animate__fadeInLeft