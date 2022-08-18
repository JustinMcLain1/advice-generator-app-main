const dice = document.querySelector(".card__dice");
const cardId = document.querySelector(".card__number");
const advice = document.querySelector(".card__quote");

function NewQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      cardId.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

dice.addEventListener("click", NewQuote);