// hamburger menu

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

// destination

let caro = document.querySelector(".caro");
let isdrag = false,prevPageX,prevScrollLeft;

let dragstart = (e)=>{
    isdrag = true
    prevPageX = e.pageX;
    prevScrollLeft = caro.scrollLeft;
}

let drag = (e) =>{
    if(isdrag == false){
        return;
    }
    e.preventDefault();
    let posi = e.pageX - prevPageX;
    caro.scrollLeft = prevScrollLeft - posi;
}

let dragstop = ()=>{
    isdrag = false;
}

caro.addEventListener("mousedown",dragstart);
caro.addEventListener("mousemove",drag);
caro.addEventListener("mouseup",dragstop);


let book = document.querySelector(".book")

book.addEventListener("click",()=>{
    window.location.assign("booking.html")
})

let newbtn = document.querySelectorAll(".newbtn");

newbtn.forEach((e)=>{
    e.addEventListener("click",()=>{
        window.location.assign("desti.html")
    })
})

// 

var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
    arrows: "",
    
  } );
  
  splide.mount();