const icon = document.querySelector("i")
const text = document.querySelector("h2")
const body = document.querySelector("body")

icon.addEventListener("click",function(){
    this.classList.toggle("bi-moon-stars-fill")
    if(this.classList.toggle("bi-sun-fill")){
        text.innerText = "Light-Mode"
        body.style.backgroundColor = "white"
        body.style.color = "black"
        body.style.transition = "0.5s"
    }
    else{
        text.innerText = "Dark-Mode"
        body.style.backgroundColor = "black"
        body.style.color = "white"
        body.style.transition = "0.5s"
    }
})