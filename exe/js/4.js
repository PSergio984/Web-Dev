const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('.main-content');

addEventClick('.btnClearAll', clearAll);

function addEventClick(buttonSelector, func) {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.addEventListener('click', func);
  } else {
    console.error(`Button with selector ${buttonSelector} not found.`);
  }
}

function clearAll() {
  alert('nigga');
 // document.querySelectorAll('.grid-element').forEach(element => {
  //  element.style.backgroundColor = 'white'; // Reset color
 // });
}

// Function to set up the grid using Flexbox with correct sizing
function setupGrid(size) {
    // Clear any existing grid elements
    grid.innerHTML = '';

    // Calculate the size of each square based on the container's width and the grid size
    let squareSize = grid.clientWidth / size;

    // Create grid squares based on the size parameter
    for (let i = 1; i <= size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-element');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        grid.appendChild(square);

    }
}

  
  
  
window.onload = () => {
  setupGrid(DEFAULT_SIZE);
};

// Add button styles for active modes (if applicable)
function activateButton(mode) {
  console.log(`Active mode: ${mode}`); // Placeholder for mode switching
}
