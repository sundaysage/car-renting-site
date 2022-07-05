let overview = document.querySelector(".overView ") 
let overview2 = document.querySelector(".overView2 ") 
let overview3 = document.querySelector(".overView3 ") 
let overview4 = document.querySelector(".overView4 ") 
let button = document.querySelector("#button-show")
let button2 = document.querySelector("#button-show2")
let button3 = document.querySelector("#button-show3")
let button4 = document.querySelector("#button-show4")


button.addEventListener("click",function(e){
    overview.classList.toggle("overView")
})


button2.addEventListener("click",function(e){
    overview2.classList.toggle("overView2")
})

button3.addEventListener("click",function(e){
    overview3.classList.toggle("overView3")
})

button4.addEventListener("click",function(e){
    overview4.classList.toggle("overView4")
})




let notification = document.querySelector(".notificationimg");
let notificationBox = document.querySelector("#notification-box")

notification.addEventListener("click",function(e){
    notificationBox.classList.toggle("notification-hide")
})
