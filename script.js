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

rulebtn.addEventListener("click", function(){
    sect3.style.display = "block"
    hero2.style.display = "none"
    hero.classList.add("hero-121")
    sect2.style.display = "block"
})

closebtn.addEventListener("click", function(){
    sect3.style.display = "none"
    sect2.style.display = "block"
    hero.classList.remove("hero-121")
    sect2.classList.remove("section-221")
})

playbtn.addEventListener("click", function(){
    sect2.style.display = "block"
    hero2.style.display = "none"
})



const img1 = document.querySelector(".img-1")
const img2 = document.querySelector(".img-2")
const rev = [
    {
        id: 1,
        name: "paper",
        name2: "papery",
        img:"images/icon-paper.svg",
    },
    {
        id: 2,
        name: "scissor",
        name2: "scs",
        img:"images/icon-scissors.svg",
    },
    {
        id: 3,
        name: "rock",
        name2: "rockkkkk",
        img:"images/icon-rock.svg",
    },
]

const currentitem = 0;

window.addEventListener("DOMContentLoaded", function(){
    show(currentitem)
});

function show(planets){
    const item = rev[planets];
    img1.src = item.img;

}

const txt = document.querySelector(".text")

const value = document.querySelector(".value")

let count = 0;

const lftbtn = document.querySelector(".left-btn")