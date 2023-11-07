
           //toggling hambergur
const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");


          hamburger.addEventListener("click", () =>{
               hamburger.classList.toggle("active");
                   navMenu.classList.toggle("active");
          });



          const navLink = document.querySelectorAll(".nav-link");

             navLink.forEach(n => n.addEventListener("click", closeMenu));

            function closeMenu() {
                     hamburger.classList.remove("active");
                   navMenu.classList.remove("active");
                      }
                      
                       // team carousel 
    $(' .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        nav: true,
        mouseDrag:false,
        animationOut:'slideOutUp',
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
