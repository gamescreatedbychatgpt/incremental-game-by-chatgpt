// Select elements
const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const upgradeClickButton = document.getElementById('upgradeClickButton');
const upgradeIncrementButton = document.getElementById('upgradeIncrementButton');

// Initialize variables
let number = 0;
let incrementAmount = 1;
let clickUpgradeCost = 10;
let incrementUpgradeCost = 20;
let clicksPerSecond = 0;

// Function to update the number
function incrementNumber() {
    number += incrementAmount;
    numberElement.textContent = number;
}

// Function to reset the number
function resetNumber() {
    number = 0;
    numberElement.textContent = number;
}

// Function to handle click upgrades
function upgradeClicks() {
    if (number >= clickUpgradeCost) {
        number -= clickUpgradeCost;
        clicksPerSecond += 1; // Increase clicks per second
        numberElement.textContent = number;
        clickUpgradeCost *= 2; // Double the cost for the next upgrade
        upgradeClickButton.textContent = `Upgrade Clicks (Cost: ${clickUpgradeCost})`;
    } else {
        alert('Not enough number to upgrade clicks per second.');
    }
}

// Function to handle increment upgrades
function upgradeIncrement() {
    if (number >= incrementUpgradeCost) {
        number -= incrementUpgradeCost;
        incrementAmount *= 2; // Double the increment amount
        numberElement.textContent = number;
        incrementUpgradeCost *= 2; // Double the cost for the next upgrade
        upgradeIncrementButton.textContent = `Upgrade Increment (Cost: ${incrementUpgradeCost})`;
    } else {
        alert('Not enough number to upgrade increment.');
    }
}

// Function to perform automated clicks
function performAutomatedClicks() {
    if (clicksPerSecond > 0) {
        setInterval(() => {
            incrementNumber();
        }, 1000 / clicksPerSecond);
    }
}

// Add event listeners
incrementButton.addEventListener('click', incrementNumber);
resetButton.addEventListener('click', resetNumber);
upgradeClickButton.addEventListener('click', upgradeClicks);
upgradeIncrementButton.addEventListener('click', upgradeIncrement);

// Start automated clicks if applicable
performAutomatedClicks();
