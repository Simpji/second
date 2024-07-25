var swiper = new Swiper(".mySwiper", {
      effect: "slide",
      grabCursor: true,
      slidesPerView: 2,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



//  let activeModal = (modalClick) => {
//         modal[modalClick].classList.add('active-Modal')
//       }

//       modalButton.forEach((modalButton, i) => {
//         modalButton.addEventListener('click', () => {
//           activeModal(i)
//         })
//       });

// const modal = document.querySelectorAll('.simple-modal'),
//        modelButton = document.querySelectorAll('.set-button'),
//        modalClose = document.querySelectorAll('.simple-modal-close')

//       let activeModal = (modalClick) => {
//         modal[modalClick].classList.add('active-Modal')
//       }

//       modalButton.forEach((modalButton, i) => {
//         modalButton.addEventListener('click', () => {
//           activeModal(i)
//         })
//       })