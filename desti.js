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
let book = document.querySelector(".book")

book.addEventListener("click",()=>{
    window.location.assign("booking.html")
})

let api = [
    {
        name:"Taj Mahal",
        Img:"https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
        price:5520,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:1,
        type:"Full-Day Tour"
    },
    {
        name:"Red Fort",
        Img:"https://t4.ftcdn.net/jpg/01/15/24/53/360_F_115245346_vN7bdFfwD3LR4pnG4fa4EtNTArafpodb.jpg",
        price:3290,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:2,
        type:"Half-Day Tour"
    },
    {
        name:"Goa",
        Img:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2018/01/28/1086116-254823591.jpg?itok=TXfulHs5",
        price:4250,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:3,
        type:"Full-Day Tour"
    },
    {
        name:"Golden Temple",
        Img:"https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/4:3/w_4076,h_3057,c_limit/D8R9MT.jpg",
        price:3550,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:4,
        type:"Half-Day Tour"
    },
    {
        name:"Manali",
        Img:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Manali-In-Summer_20th-jan.jpg",
        price:6890,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:5,
        type:"Full-Day Tour"
    },
    {
        name:"Leh Ladakh",
        Img:"https://devilonwheels.com/wp-content/uploads/2018/05/6-Leh-Ladakh-pictures.jpeg",
        price:7890,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:6,
        type:"Full-Day Tour"
    },
    {
        name:"Andaman",
        Img:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/02/09094313/Andaman.jpg",
        price:5750,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:7,
        type:"Full-Day Tour"
    },
    {
        name:"Munnar",
        Img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/1200px-Munnar_hillstation_kerala.jpg",
        price:5959,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:8,
        type:"Full-Day Tour"
    },
    {
        name:"Darjeeling",
        Img:"https://www.iilsindia.com/blogs/wp-content/uploads/2019/05/Tourism.png",
        price:5500,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:9,
        type:"Full-Day Tour"
    },
    {
        name:"Ooty",
        Img:"https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
        price:4550,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:10,
        type:"Half-Day Tour"
    },
    {
        name:"Jodhpur",
        Img:"https://media.istockphoto.com/id/921518960/photo/the-blue-city-and-mehrangarh-fort-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=e3hxO5PI1TGVQGSnGR2jStAkrvAIwCu97eGA1_kdNJo=",
        price:5500,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:11,
        type:"Half-Day Tour"
    },
    {
        name:"Hampi",
        Img:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg",
        price:3550,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:12,
        type:"Half-Day Tour"
    },
    {
        name:"Mussoorie",
        Img:"https://clubmahindra.gumlet.io/blog//media/section_images/shuttersto-65eea6c9f8abbd6.jpg?w=376&dpr=2.6",
        price:6300,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:13,
        type:"Full-Day Tour"
    },
    {
        name:"Nainital",
        Img:"https://indiathrills.com/wp-content/uploads/2022/07/Nainital-Landscape-900x490.jpg",
        price:5800,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:14,
        type:"Full-Day Tour"
    },
    {
        name:"Victoria Memorial",
        Img:"https://www.holidify.com/images/cmsuploads/compressed/attr_1884_20190329150438.jpg",
        price:5800,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:15,
        type:"Half-Day Tour"
    },
    {
        name:"Indian Museum Kolkata",
        Img:"https://kolkatatourism.travel/images/places-to-visit/headers/indian-museum-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
        price:3850,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:16,
        type:"Half-Day Tour"
    },
    {
        name:"Gangtok",
        Img:"https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg",
        price:6550,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta ut saepe perferendis quia repellat.",
        id:17,
        type:"Full-Day Tour"
    },
]

console.log(api)

let lsdata = JSON.parse(localStorage.getItem("cart")) || [];
let cont = document.querySelector(".container");
let filter = document.querySelector("#filter")
let search = document.querySelector("#search")

// search function done

search.addEventListener("input",()=>{
    let sear = api.filter((e)=>{
        if(e.name.toUpperCase().includes(search.value.toUpperCase())){
            return e
        }
    })
   display(sear)
})



// filter done
filter.addEventListener("change",()=>{
    if(filter.value == ""){
        display(api)
    }else{
       if(filter.value =="high"){
        let filterdata = api.sort((a,b)=>{
            return b.price - a.price
        })
        display(filterdata)
       }else if(filter.value =="low"){
        let filterdata = api.sort((a,b)=>{
            return a.price - b.price
        })
        display(filterdata)
       }else if(filter.value == "full"){
        let filterdata = api.filter((e)=>{
            if(e.type =="Full-Day Tour"){
                return e
            }
        })
        display(filterdata)
       }else if(filter.value == "half"){
        let filterdata = api.filter((e)=>{
            if(e.type =="Half-Day Tour"){
                return e
            }
        })
        display(filterdata)
       }
    }
})
// ---

function display(data){
    cont.innerHTML =null;

    data.forEach((el,index) => {
        let card = document.createElement("div")
        if(index%2==0){
            card.setAttribute("data-aos","fade-left")
        }else{
            card.setAttribute("data-aos","fade-right")
        }
        let left = document.createElement("div");
        let right = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",el.Img)
        let name = document.createElement("h2")
        let type = document.createElement("p")
        let des = document.createElement("p")
        let person = document.createElement("h5")
        let price = document.createElement("h4")
        let cartbtn = document.createElement("button")

        name.textContent = el.name;
        type.textContent = el.type;
        des.textContent = el.description;
        person.textContent = "Price per person"
        price.textContent = el.price;
        cartbtn.textContent = "Book Now"
        el.quatity = 1;
        cartbtn.addEventListener("click",()=>{
            for(let i=0;i<lsdata.length;i++){
                if(lsdata[i].id == el.id){
                    return alert("This Tour is allready added")
                }
            }
            alert("Tour is addd to Basket")
            lsdata.push(el)
            localStorage.setItem("cart",JSON.stringify(lsdata))
        })
        left.append(img);
        right.append(name,type,des,person,price,cartbtn)
        card.append(left,right);
        cont.append(card)
    });
}

display(api)
