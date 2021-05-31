function updateClock() {
  const clock  = document.querySelector('.clock');
  clock.innerText = new Date().toLocaleTimeString();
  clock.style.color = 'black';
  }
  setInterval(updateClock, 1000);
  
  const menuParagraph = document.querySelector('.menu-paragraph');
  menuParagraph.style.alignItems = 'center';
(function() {
  const categories = [
    `<img src="img/tamborki-2-min.webp" class="d-block w-100" alt="Hoops">
    <h3>Hoops</h3>
    <p class="notes">Embroidered wall decorations.</p>
    <a href="#shop-section" class="button">Shop</a>`,

    `<img src="img/wzory-min.webp" class="d-block w-100" alt="Patterns">
    <h3>Patterns</h3>
    <p class="notes">Patterns designed by me and instructions.</p>
    <a href="#shop-section" class="button" >Shop</a>`,

    `<img src="img/zestawy-min.webp" class="d-block w-100" alt="Kits">
    <h3>Kits</h3>
    <p class="notes">Sets of materials needed for embroidery.</p>
    <a href="#shop-section" class="button" >Shop</a>`
  ];

  let currentIdx = 0;

  function showCurrentSlide() {
      const slide1Container = document.querySelector('.categories-carousel .product-one');
      slide1Container.innerHTML = categories[currentIdx];

      const slide2Container = document.querySelector('.categories-carousel .product-two');
      const product2Idx = currentIdx + 1 >= categories.length ? 0 : currentIdx + 1;
      slide2Container.innerHTML = categories[product2Idx];

      const slide3Container = document.querySelector('.categories-carousel .product-three');
      const product3Idx = product2Idx + 1 >= categories.length ? 0 : product2Idx + 1;
      slide3Container.innerHTML = categories[product3Idx];
      
  }

  function prevSlide() {
      currentIdx--;
      if (currentIdx <= 0) currentIdx = categories.length - 1;
      showCurrentSlide();
  }
 function nextSlide() {
      currentIdx++;
      if (currentIdx >= categories.length) currentIdx = 0;
      showCurrentSlide();
  }
  document.querySelector('.categories-carousel .slide-prev').addEventListener('click', prevSlide);
  document.querySelector('.categories-carousel .slide-next').addEventListener('click', nextSlide);

  showCurrentSlide();
})();


