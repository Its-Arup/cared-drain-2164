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
let cupon = document.querySelector("#cupon > input")
let cuponbtn = document.querySelector("#cupon >button");
let cart_price = document.querySelector(".cart-price");
let cart_total = document.querySelector(".cart-total");
let flag = true;
let pay = document.querySelector(".pay")

pay.addEventListener("click",()=>{
    window.location.assign("buy.html")
})

function display(api){
    cont.innerHTML = "";
    let sum = 0;
    let gstadd;
    let gst;
    
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
            // console.log(sum)
            cart_price.textContent = sum
            localStorage.setItem("cart",JSON.stringify(data))
            display(data)
        })

        pls.addEventListener("click",()=>{
            el.quatity++ 
            sum += el.quatity*el.price
            console.log(sum)
            cart_price.textContent = sum
            localStorage.setItem("cart",JSON.stringify(data))
            display(data)
        })
        sum += el.quatity*el.price
        cart_price.textContent = sum
        gstadd = (sum*5)/100
        gst = gstadd+sum
        cart_total.textContent = gst

        cuponbtn.addEventListener("click",()=>{
            // console.log(sum)
            if(flag){
                if(cupon.value === "NEWUSER50"){
                    let new_sum = Math.floor( (gst * 50) /100)
                    new_sum = gst - new_sum
                    cart_total.textContent = new_sum;
                    flag = false;
                 }
            }
           
          })

        left.append(img);
        right.append(name,type,des,person,price,quantity,min,pls,remove)
        card.append(left,right);
        cont.append(card)
    })
}

display(data)