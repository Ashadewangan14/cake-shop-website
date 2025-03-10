
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}




var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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

  
    

// Select the form using its ID
const orderForm = document.querySelector('#orderForm');
const orderPopup = document.querySelector('#orderPopup');
const closeBtn = document.querySelector('.close-btn');

// Listen for form submission
orderForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  orderForm.reset(); // Reset the form fields
  showPopup(); // Show custom popup message
});

// Function to show popup
function showPopup() {
  orderPopup.style.display = 'flex';
}

// Close popup when close button is clicked
closeBtn.addEventListener('click', function () {
  orderPopup.style.display = 'none';
});

// Close popup when clicking outside the popup content
window.addEventListener('click', function (e) {
  if (e.target === orderPopup) {
    orderPopup.style.display = 'none';
  }
});


