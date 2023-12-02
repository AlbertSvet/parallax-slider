new Swiper('.header__swiper',{
    navigation: {
        nextEl: '.header__rigth',
        prevEl: '.header__left',
    },
     parallax:true,
    //  loop:true,
     spaceBetween:0,
     speed:500,
     
    
     scrollbar: {
        el: '.swiper-scrollbar',
     },
   
    pagination: {
        el: '.header__count',
        type: 'fraction',
    }, 
   

    breakpoints: {
        320: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            
        },
        768: {
            slidesPerView:1,
        }
        

        
       

    },

});


// =============================================================================================================//
const triggerBtn = document.querySelectorAll('.menu__icon'),
      over = document.querySelector('.header__over'),
      overBody = document.querySelector('.header__overBody'),
      mobilbtn = document.querySelector('.mobil'),
      body = document.querySelector('body');

    triggerBtn.forEach(item =>{
        item.addEventListener('click', () =>{
            mobilbtn.classList.toggle('active');
            over.classList.toggle('active');
            overBody.classList.toggle('active');
            body.classList.toggle('active');
          })
    })

    over.addEventListener('click', (e) =>{
        if (e.target === over){
            mobilbtn.classList.remove('active');
            over.classList.remove('active');
            overBody.classList.remove('active');
            body.classList.remove('active');
        }
    })
      
            
        
        
      
      

// =============================================================================================================//



// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


