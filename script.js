const paperbtn = document.querySelector(".paper-btn")
const scissorbtn = document.querySelector(".scissor-btn")
const rockbtn = document.querySelector(".rock-btn")
const rulebtn = document.querySelector(".rule-btn")

const hero = document.querySelector(".hero")
const hero2 = document.querySelector(".hero-2")
const sect2 = document.querySelector(".section-2")
const sect22 = document.querySelector(".section-222")
const sect3 = document.querySelector(".section-3")
const closebtn = document.querySelector(".close-btn")
const playbtn = document.querySelector(".play-btn")
const btnn = document.querySelectorAll(".btnnn")

paperbtn.addEventListener("click", function(){
    sect2.style.display = "none"
    hero2.style.display = "block"
})
scissorbtn.addEventListener("click", function(){
    sect2.style.display = "none"
    hero2.style.display = "block"
})
rockbtn.addEventListener("click", function(){
    sect2.style.display = "none"
    hero2.style.display = "block"
})