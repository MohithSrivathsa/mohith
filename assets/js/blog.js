// JavaScript

// Responsive Grid Layout
const images = document.querySelectorAll('.image-grid img');
const grid = document.querySelector('.image-grid');
let imgWidth = images[0].clientWidth;

function resizeGrid() {
    imgWidth = images[0].clientWidth;
    let imgCount = 0;
    images.forEach(image => {
        if (imgCount % 2 === 0) {
            image.style.gridRow = 'span 2';
        }
        imgCount++;
    });
    grid.style.gridTemplateColumns = `repeat(auto-fill, minmax(${imgWidth}px, 1fr))`;
}

window.addEventListener('resize', resizeGrid);
resizeGrid();

// Nice looking buttons
const buttons = document.querySelectorAll('.image-grid button');

buttons.forEach(button => {
    button.style.backgroundColor = 'rebeccapurple';
    button.style.color = 'white';
    button.style.padding = '10px 200px';
    button.style.borderRadius = '5px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
});

// Nice background
grid.style.backgroundColor = '#f2f2f2';


const toggleBtn = document.getElementById('toggle-mode-btn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

