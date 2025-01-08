const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('.main-content');
const slider = document.querySelector('.range');
const sliderTxt = document.querySelector('.sizeTxt');
const fillAll = document.querySelector('.btnFillAll');

fillAll.addEventListener('click',()=>{
  document.querySelectorAll('.grid-element').forEach(grid =>{
    grid.style.backgroundColor = currentColor;
  })
})

//sets the slidertxt based onthe value of the slider

slider.oninput = (e) => {
  sliderTxt.textContent = `${e.target.value} X ${e.target.value}`;
  currentSize = e.target.value;
  setupGrid(currentSize);
}


addEventClick('.btnClearAll', clearAll);


const btnColor = document.querySelector('.btnColor');
btnColor.addEventListener('click',activateButton);

// Use change event for color picker
const colorPicker = document.querySelector('#colorPicker');
if (colorPicker) {
  colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value; // Update currentColor with the selected color
  });
}



function addEventClick(buttonSelector, func) {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.addEventListener('click', func); 
  } 
}

function activateButton(e) {
  e.target.style.backgroundColor ='#107296';
}


function clearAll() {
 document.querySelectorAll('.grid-element').forEach(element => {
   element.style.backgroundColor = '#edf3f5'; // Reset color
  });
}

// Function to set up the grid using Flexbox with correct sizing
function setupGrid(size,currentMode) {
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
    gridAddEventHover(currentMode);
}
function gridAddEventHover(currentMode) {
  let isDrawing = false; // Tracks whether the mouse is held down

  // Add event listeners to all grid elements
  document.querySelectorAll('.grid-element').forEach(element => {
    // When the mouse is pressed down, start drawing
    element.addEventListener('mousedown', (e) => {
      isDrawing = true;
      colorGrid(currentMode, e); 
    });

    // Apply color as the mouse moves while pressed down
    element.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        colorGrid(currentMode, e);
      }
    });

    // Stop drawing when the mouse button is released
    element.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    // Handle when the mouse leaves the grid 
    element.addEventListener('mouseleave', (e) => {
      if (isDrawing) {
        colorGrid(currentMode, e);
      }
    });
  });

  // Ensure mouse state resets if released outside grid
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
}

function colorGrid(currentMode, e) {
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else {
    e.target.style.backgroundColor = currentColor;
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
  gridAddEventHover();
};
