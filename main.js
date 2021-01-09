// Selectors
const firstInput = document.querySelector(`.first-input`);
const secondInput = document.querySelector(`.second-input`);
const btn = document.querySelector(`button`);

// Function
const numberRandom = () => {
  const min = parseInt(firstInput.value);
  const max = parseInt(secondInput.value);

  if (!(isNaN(min) && isNaN(max))) {
    const theNumber = Math.floor(Math.random() * (max - min + 1) + min);

    const h1 = document.createElement(`h1`);
    h1.textContent += theNumber;
    document.body.appendChild(h1);
  }
};

// Listener
btn.addEventListener(`click`, numberRandom);
