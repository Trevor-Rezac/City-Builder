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
const nameChangeBtn = document.querySelector('#name-change-btn');
const nameChangeInput = document.querySelector('#name-change-input');
const cityWelcome = document.querySelector('#city-welcome');

// let state

let sloganArr = [];

let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;
let cityName = '';

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

nameChangeBtn.addEventListener('click', () => {
    changeCityName();
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
        p.textContent = (cityName.value === '') ? slogan : `${cityName} - "${slogan}"`;
        sloganList.append(p);
    }
    sloganInput.value = '';
}

function changeCityName() {
    cityName = nameChangeInput.value;
    cityWelcome.textContent = `Welcome to ${cityName}!`;
    nameChangeInput.value = '';
}

// function disableBtn() {
//     if (sloganInput.value === '') {
//         sloganButton.disabled = true;
//     } else {
//         sloganButton.disabled = false;
//     }
// }

// function enableBtn() {
//     if (sloganInput.value.length > 0) {
//         sloganButton.disabled = false;
//     }
// }

// const skylineArr = [];
// const waterfrontArr = [];
// const castleArr = [];

// function getRandomItem(arr) {
//     return Math.floor(Math.random() * arr.length);
// }

