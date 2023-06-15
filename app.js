let menu = document.querySelector(".menu")
let nav_menu = document.querySelector(".nav-menu")

menu.addEventListener("click",() =>{
    menu.classList.toggle("active")
    nav_menu.classList.toggle("active")
})

document.querySelectorAll(".nav-links").forEach((e)=>{
    e.addEventListener("click",()=>{
        menu.classList.toggle("active")
        nav_menu.classList.toggle("active")
    })
})

let caro = document.querySelector(".caro");
// let isdrag = false;

// let dragstart = ()=>{
//     isdrag = true
// }

let drag = (e) =>{
    // if(isdrag == false){
    //     return;
    // }
    e.preventDefault();
    caro.scrollLeft = e.pageX;
}

// caro.addEventListener("mousedown",dragstart);
caro.addEventListener("mousemove",drag);
