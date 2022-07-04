
    let notificationer = document.querySelector(".notificationimgs");
    let notificationBoxer = document.querySelector("#notificate-box")
    
    notificationer.addEventListener("click",function(e){
        notificationBoxer.classList.toggle("notificate-hide")
    })
    