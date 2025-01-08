const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#050b0e"; // Define DEFAULT_COLOR
const DEFAULT_MODE = "color"; // Define DEFAULT_MODE

var currentColor = DEFAULT_COLOR;
var currentMode = DEFAULT_MODE;
var currentSize = DEFAULT_SIZE;

//querying the buttons
const grid = document.querySelector('.main-content');
const slider = document.querySelector('.range');
const sliderTxt = document.querySelector('.sizeTxt');
const fillAll = document.querySelector('.btnFillAll');
const eraserBtn = document.querySelector('.btnEraser');
const colorBtn = document.querySelector('.btnColor');
const rainbowBtn = document.querySelector('.btnRainbow');

// event listeners for mode buttons
eraserBtn.addEventListener('click', () => changeMode('erase'));
colorBtn.addEventListener('click', () => changeMode('color'));
rainbowBtn.addEventListener('click', () => changeMode('rainbow'));

// Centralize mode change handling
function changeMode(newMode) {
  currentMode = newMode;

  //changing the color of the button based on the active mode
  if(currentMode == 'rainbow'){
    rainbowBtn.style.backgroundColor = '#107296';
    colorBtn.style.backgroundColor = '#0cbcfc';
    eraserBtn.style.backgroundColor = '#0cbcfc';
  }
  else if(currentMode == 'color') {
    rainbowBtn.style.backgroundColor = '#0cbcfc';
    colorBtn.style.backgroundColor = '#107296';
    eraserBtn.style.backgroundColor = '#0cbcfc';
  }
  else{
    rainbowBtn.style.backgroundColor = '#0cbcfc';
    colorBtn.style.backgroundColor = '#0cbcfc';
    eraserBtn.style.backgroundColor = '#107296';
  }
}

//fill all the grid element based on the current color
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

// Reset color
function clearAll() {
 document.querySelectorAll('.grid-element').forEach(element => {
   element.style.backgroundColor = '#edf3f5'; 
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
function gridAddEventHover() {
  let isDrawing = false; // Tracks whether the mouse is held down

  // Add event listeners to all grid elements
  document.querySelectorAll('.grid-element').forEach(element => {
    // When the mouse is pressed down, start drawing
    element.addEventListener('mousedown', (e) => {
      isDrawing = true;
      colorGrid(e); 
    });

    // Apply color as the mouse moves while pressed down
    element.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        colorGrid(e);
      }
    });

    // Stop drawing when the mouse button is released
    element.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    // Handle when the mouse leaves the grid 
    element.addEventListener('mouseleave', (e) => {
      if (isDrawing) {
        colorGrid(e);
      }
    });
  });

  // Ensure mouse state resets if released outside grid
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
}

//colors the grid based on the current mode
function colorGrid(e) {
  if (currentMode === 'rainbow') {
     randomR = Math.floor(Math.random() * 256);
     randomG = Math.floor(Math.random() * 256);
     randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
   
  } else if(currentMode === 'color'){
    e.target.style.backgroundColor = currentColor;
  }
    else if (currentMode === 'erase'){
      e.target.style.backgroundColor ='#edf3f5';
    }
  
}


window.onload = () => {
  setupGrid(DEFAULT_SIZE); //sets the grid and its pixels
  gridAddEventHover(); //adds the events on the grid
};
