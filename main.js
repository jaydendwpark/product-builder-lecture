
const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.querySelector('.numbers-container');
const bonusContainer = document.querySelector('.bonus-container');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    bonusContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 7) { // Generate 7 unique numbers
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const numberArray = Array.from(numbers);
    const bonusNumber = numberArray.pop(); // Take the last one as the bonus

    for (const number of numberArray) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }

    const bonusNumberEl = document.createElement('div');
    bonusNumberEl.classList.add('bonus-number');
    bonusNumberEl.textContent = bonusNumber;
    bonusContainer.appendChild(bonusNumberEl);
});
