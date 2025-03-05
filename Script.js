
//===============nav start==============================
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navber .nev_and_btns ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class from all
            this.classList.add("active"); // Add active class to clicked link
        });
    });
});


//===========================manu responsive====================
const nev_and_btns_come= document.getElementById("nev_and_btns_come")

const menu_icon= document.getElementById("menu_icon")

function menu_cng(){
    if(menu_icon.classList.contains("ri-menu-line")){
        menu_icon.classList.remove("ri-menu-line")
        menu_icon.classList.add("ri-close-large-line")
    }else{
        menu_icon.classList.remove("ri-close-large-line")
        menu_icon.classList.add("ri-menu-line")
    }
    nev_and_btns_come.classList.toggle("nev_and_btns_come")
}


//========================theme change===================
const theme_icon= document.getElementById("theme_icon")
function theme_change(){
    document.body.classList.toggle("dark_theme")
    if(theme_icon.classList.contains("ri-moon-fill")){
        theme_icon.classList.remove("ri-moon-fill")
        theme_icon.classList.add("ri-sun-fill")
    }else{
        theme_icon.classList.remove("ri-sun-fill")
        theme_icon.classList.add("ri-moon-fill")
    }
}

//===========================gallery======================================
const full_img_box= document.getElementById("full_img_box")
function open_img(img){
    

    const full_img= document.getElementById("full_img")

    full_img_box.style.display="flex"
    full_img.src=img
}
function full_img_box_close(){
    full_img_box.style.display="none"
}
//==========================gallery btn================
const gallery_btn= document.querySelectorAll(".galery_btn .btn")
const gallery_botoom_img= document.querySelectorAll(".gallery_botoom img")
gallery_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target)
        const gallery_filter= e.target.dataset.filter
        console.log(gallery_filter)

        gallery_btn.forEach((button) => {
            button.classList.remove("active"); // Remove active class from all buttons
        });
        e.target.classList.add("active");

        gallery_botoom_img.forEach((img)=>{
            if(gallery_filter==="all"){
                img.style.display="flex";
            }else{
                if(img.classList.contains(gallery_filter)){
                    img.style.display="flex"
                }else{
                    img.style.display="none"
                }
            }
        })
    })
})

//================================tabing====================================


var tab_btn= document.querySelectorAll(".tab_btn h3")
var tab_content= document.querySelectorAll(".tab_content div")

tab_btn.forEach((tab,index)=>{
    tab.addEventListener("click",() =>{
        tab_btn.forEach((tab)=>{
            tab.classList.remove("active")
        })
        tab_content.forEach((content)=>{
            content.classList.remove("active")
        })

        tab_btn[index].classList.add("active")
        tab_content[index].classList.add("active")
    })
})
//============================skills=================================

const rotet_1= document.getElementById("rotet_1")
const rotet_2= document.getElementById("rotet_2")
const rotet_3= document.getElementById("rotet_3")
const rotet_4= document.getElementById("rotet_4")

const rotet_text_1= document.getElementById("rotet_text_1")
const rotet_text_2= document.getElementById("rotet_text_2")
const rotet_text_3= document.getElementById("rotet_text_3")
const rotet_text_4= document.getElementById("rotet_text_4")
const rotet_speed=30
let rotet_1_start=0
let rotet_2_start=0
let rotet_3_start=0
let rotet_4_start=0
const rotet_1_end=50
const rotet_2_end=70
const rotet_3_end=80
const rotet_4_end=75

const rotet1= setInterval(()=>{
    rotet_1_start++
    rotet_text_1.textContent=`${rotet_1_start}%`
    if(rotet_1_start==rotet_1_end){
        clearInterval(rotet1)
    }

    rotet_1.style.background= `conic-gradient(var(--dark-color) ${rotet_1_start *3.6}deg, var(--light-color) ${rotet_1_start *3.6}deg)`

}, rotet_speed)

const rotet2= setInterval(()=>{
    rotet_2_start++
    rotet_text_2.textContent=`${rotet_2_start}%`
    if(rotet_2_start==rotet_2_end){
        clearInterval(rotet2)
    }
    rotet_2.style.background= `conic-gradient(var(--dark-color) ${rotet_2_start *3.6}deg, var(--light-color) ${rotet_2_start *3.6}deg)`
}, rotet_speed)

const rotet3= setInterval(()=>{
    rotet_3_start++
    rotet_text_3.textContent=`${rotet_3_start}%`
    if(rotet_3_start==rotet_3_end){
        clearInterval(rotet3)
    }
    rotet_3.style.background= `conic-gradient(var(--dark-color) ${rotet_3_start *3.6}deg, var(--light-color) ${rotet_3_start *3.6}deg)`
}, rotet_speed)
const rotet4= setInterval(()=>{
    rotet_4_start++
    rotet_text_4.textContent=`${rotet_4_start}%`
    if(rotet_4_start==rotet_4_end){
        clearInterval(rotet4)
    }
    rotet_4.style.background= `conic-gradient(var(--dark-color) ${rotet_4_start *3.6}deg, var(--light-color) ${rotet_4_start *3.6}deg)`
}, rotet_speed)


const prog_bar_1= document.getElementById("prog_bar_1")
let prog_bar_1_start=0
let prog_bar_1_end=70
let progress_p1= setInterval(()=>{
    prog_bar_1_start++
    prog_bar_1.textContent=`${prog_bar_1_start}%`
    if(prog_bar_1_start==prog_bar_1_end){
        clearInterval(progress_p1)
    }
    prog_bar_1.style.width=`${prog_bar_1_start}%`
}, rotet_speed)

const prog_bar_2= document.getElementById("prog_bar_2")
let prog_bar_2_start=0
let prog_bar_2_end=40
const progress_p2= setInterval(()=>{
    prog_bar_2_start++
    prog_bar_2.textContent=`${prog_bar_2_start}%`
    if(prog_bar_2_start==prog_bar_2_end){
        clearInterval(progress_p2)
    }
    prog_bar_2.style.width=`${prog_bar_2_start}%`
}, rotet_speed)

const prog_bar_3= document.getElementById("prog_bar_3")
let prog_bar_3_start=0
let prog_bar_3_end=50
const progress_p3= setInterval(()=>{
    prog_bar_3_start++
    prog_bar_3.textContent=`${prog_bar_3_start}%`
    if(prog_bar_3_start==prog_bar_3_end){
        clearInterval(progress_p3)
    }
    prog_bar_3.style.width=`${prog_bar_3_start}%`
}, rotet_speed)
const prog_bar_4= document.getElementById("prog_bar_4")
let prog_bar_4_start=0
let prog_bar_4_end=90
const progress_p4= setInterval(()=>{
    prog_bar_4_start++
    prog_bar_4.textContent=`${prog_bar_4_start}%`
    if(prog_bar_4_start==prog_bar_4_end){
        clearInterval(progress_p4)
    }
    prog_bar_4.style.width=`${prog_bar_4_start}%`
}, rotet_speed)
const prog_bar_5= document.getElementById("prog_bar_5")
let prog_bar_5_start=0
let prog_bar_5_end=48
const progress_p5= setInterval(()=>{
    prog_bar_5_start++
    prog_bar_5.textContent=`${prog_bar_5_start}%`
    if(prog_bar_5_start==prog_bar_5_end){
        clearInterval(progress_p5)
    }
    prog_bar_5.style.width=`${prog_bar_5_start}%`
}, rotet_speed)
const prog_bar_6= document.getElementById("prog_bar_6")
let prog_bar_6_start=0
let prog_bar_6_end=80
const progress_p6= setInterval(()=>{
    prog_bar_6_start++
    prog_bar_6.textContent=`${prog_bar_6_start}%`
    if(prog_bar_6_start==prog_bar_6_end){
        clearInterval(progress_p6)
    }
    prog_bar_6.style.width=`${prog_bar_6_start}%`
}, rotet_speed)
const prog_bar_7= document.getElementById("prog_bar_7")
let prog_bar_7_start=0
let prog_bar_7_end=46
const progress_p7= setInterval(()=>{
    prog_bar_7_start++
    prog_bar_7.textContent=`${prog_bar_7_start}%`
    if(prog_bar_7_start==prog_bar_7_end){
        clearInterval(progress_p7)
    }
    prog_bar_7.style.width=`${prog_bar_7_start}%`
}, rotet_speed)

const prog_bar_8= document.getElementById("prog_bar_8")
let prog_bar_8_start=0
let prog_bar_8_end=60
const progress_p8= setInterval(()=>{
    prog_bar_8_start++
    prog_bar_8.textContent=`${prog_bar_8_start}%`
    if(prog_bar_8_start==prog_bar_8_end){
        clearInterval(progress_p8)
    }
    prog_bar_8.style.width=`${prog_bar_8_start}%`
}, rotet_speed)


//=====================swiper-==================

const swiper = new Swiper('.card-warp', {
    spaceBetween: 20,
    slidesPerView: 2,
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

     
  });

//==================swiper===================
  const swiper2 = new Swiper('.addition_wrap', {
    
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    speed:1000,

    
     
  });

//========================project btn==================
  const project_btn= document.querySelectorAll(".project .buttom .left span")
  const project_box= document.querySelectorAll(".project .buttom .right .project_box")
  project_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target)
        const project_filter= e.target.dataset.filter
        console.log(project_filter)

        project_btn.forEach((button) => {
            button.classList.remove("active"); // Remove active class from all buttons
        });
        e.target.classList.add("active");

        project_box.forEach((project)=>{
            if(project_filter==="All"){
                project.style.display="flex"
            }else{
                if(project.classList.contains(project_filter)){
                    project.style.display="flex"
                }else{
                    project.style.display="none"
                }
            }
        })
    })
  })
//===================================project search=============
function search_project(){
    let project_src_value= document.getElementById("project_search").value.toLocaleLowerCase()
    console.log(project_src_value)
    let project_box_title= document.querySelectorAll(".project .right .project_box")

    project_box_title.forEach((box)=>{
        let project_title= box.querySelector(".text h3").innerHTML.toLocaleLowerCase()
        if(project_title.includes(project_src_value)){
            box.style.display="flex"

        }else{
            box.style.display="none"
        }

    })
}
//===============scroll top btn==================
window.onscroll = function () {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
