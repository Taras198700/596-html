function updateClock() {
const clock  = document.querySelector('.clock');
clock.innerText = new Date().toLocaleTimeString();
clock.style.color = 'black';
}
setInterval(updateClock, 1000);

const headerParagraph = document.querySelector('header-paragraph');
headerParagraph.style.alignItems = 'center';