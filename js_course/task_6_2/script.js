const images = document.querySelectorAll('.container img');
const input = document.querySelector('.container input');

function eventHandler(e) {
    input.value = e.type === 'mouseout' ? '' : e.target.alt;
}

for (let img of images) {
    img.addEventListener('mouseover', eventHandler);
    img.addEventListener('mouseout', eventHandler);
}