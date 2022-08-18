const dice = document.querySelector(".card__dice");
const id = document.querySelector(".card__number");
const advice = document.querySelector(".card__quote");

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      id.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

dice.addEventListener("click", loadQuote);