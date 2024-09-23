const swiper1 = new window.Swiper(".swiper-1", {
    direction: "vertical",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  export {swiper1};