// import functions and grab DOM elements
import { createCountString } from './utils.js';

const skylineDropdown = document.querySelector('#skyline-dropdown');
const skylineImage = document.querySelector('#skyline-image');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const waterfrontImage = document.querySelector('#waterfront-image');
const castleDropdown = document.querySelector('#castle-dropdown');
const castleImage = document.querySelector('#castle-image');
const sloganInput = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganList = document.querySelector('#slogan-list');
const countEl = document.querySelector('#count');

// let state

let sloganArr = [];

let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

skylineDropdown.addEventListener('change', () => {
    const id = skylineDropdown.value;
    skylineImage.src = `./assets/skyline-${id}.jpeg`;
    skylineCount++;
    displayStats();
});

waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;
    waterfrontImage.src = `./assets/waterfront-${id}.jpeg`;
    waterfrontCount++;
    displayStats();
});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;
    castleImage.src = `./assets/castle-${id}.jpeg`;
    castleCount++;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    displaySlogans();
});

function displayStats() {
    countEl.textContent = createCountString(skylineCount, waterfrontCount, castleCount);
}

function displaySlogans() {
    const newSlogan = sloganInput.value;
    sloganArr.push(newSlogan);
    sloganList.textContent = '';
    for (let slogan of sloganArr) {
        const p = document.createElement('p');
        p.classList.add('slogan');
        p.textContent = slogan;
        sloganList.append(p);
    }
    sloganInput.value = '';
}
