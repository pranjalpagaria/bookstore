searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick= ()=> 
{
  loginForm.classList.toggle('active');   
}

// This line of JavaScript code is selecting an HTML element with a class of "login-form-container" using the document.querySelector() method, and assigning it to a variable named loginForm
  
document.querySelector('#close-login-btn').onclick= ()=> 
{
  loginForm.classList.remove('active');   
}
  



window.onscroll=()=>{
    searchForm.classList.remove('active');
    
    if(window.scrollY >80)
    {
        document.querySelector('.header .header-2').classList.add('active')
    }

    else
    {
        document.querySelector('.header .header-2').classList.remove('active') 
    }

}  
 

window.onload=()=>{

    if(window.scrollY >80)
    {
        document.querySelector('.header .header-2').classList.add('active')
    }
     else
    {
        document.querySelector('.header .header-2').classList.remove('active') 
    }

    fadeout()

}  

function loader()
{
  document.querySelector('.loader-container').classList.add('active');

}

function fadeout()
{
  setTimeout(loader,4000);
}

var swiper = new Swiper(".books-slider", {

   loop:true,
   centeredSlides:true,
   autoplay:{
    delay:9500,
    disableOnInteraction:false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spacebetween :10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },
    navigation:{
      nextE1: ".swiper-button-next",
      prevE1: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView:3,
       },
      
       1024: {
         slidesPerView: 4,
       },
     },
   });



   var swiper = new Swiper(".arrivals-slider", {
    spacebetween :10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },
    
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       
       768: {
         slidesPerView:2,
       },
      
       1024: {
         slidesPerView: 3,
       },
     },
   });

   var swiper = new Swiper(".reviews-slider", {
    spacebetween :10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },
    
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       
       768: {
         slidesPerView:2,
       },
      
       1024: {
         slidesPerView: 3,
       },
     },
   });

   
   var swiper = new Swiper(".blogs-slider", {
    spacebetween :10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },
    
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       
       768: {
         slidesPerView:2,
       },
      
       1024: {
         slidesPerView: 3,
       },
     },
   });