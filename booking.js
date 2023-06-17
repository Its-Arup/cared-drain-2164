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
let book = document.querySelector(".book")

book.addEventListener("click",()=>{
    window.location.assign("booking.html")
})

// ----

let cont = document.querySelector(".container");
let data = JSON.parse(localStorage.getItem("cart")) || [];
let cuponbtn = document.querySelector("#cupon");



function display(api){
    cont.innerHTML = "";
    let sum = 0;
    api.forEach((el)=>{
        let card = document.createElement("div")
        let left = document.createElement("div");
        let right = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",el.Img)
        let name = document.createElement("h2")
        let type = document.createElement("p")
        let des = document.createElement("p")
        let person = document.createElement("h5")
        let price = document.createElement("h4")
        let min = document.createElement("button")
        let quantity = document.createElement("p")
        let pls = document.createElement("button")
        let remove = document.createElement("button")
        min.setAttribute("class","btn");
        pls.setAttribute("class","btn")
        quantity.setAttribute("class","quan")
        name.textContent = el.name;
        type.textContent = el.type;
        des.textContent = el.description;
        person.textContent = "Price per person"
        // price.textContent = el.price*el.quatity;
        price.textContent = el.price;
        quantity.textContent = el.quatity
        min.textContent = "Remove person";
        pls.textContent = "Add person";
        remove.textContent = "Remove Tour";
        

        remove.addEventListener("click",()=>{
            data = data.filter((e)=>{
              if(el.id!=e.id){
                return e
              }
            })
            localStorage.setItem("cart",JSON.stringify(data));
            display(data);
          })
        
        min.addEventListener("click",()=>{
            el.quatity--
            if(el.quatity < 1){
                el.quatity = 1;
            }
            sum += el.quatity*el.price
            console.log(sum)
            localStorage.setItem("cart",JSON.stringify(data))
            display(data)
        })

        pls.addEventListener("click",()=>{
            el.quatity++ 
            sum += el.quatity*el.price
            console.log(sum)
            localStorage.setItem("cart",JSON.stringify(data))
            display(data)
        })
        
        left.append(img);
        right.append(name,type,des,person,price,quantity,min,pls,remove)
        card.append(left,right);
        cont.append(card)
    })
}

display(data)