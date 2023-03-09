const newDeckBtn = document.getElementById("newDeck");
const newCard = document.getElementById("newCard");
let deckID;
const newDeckFunc = () => {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      deckID = data.deck_id;
      console.log(deckID);
    });
};

const newCardFunc = () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=6`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.cards[0].value);

      for (let i = 0; i <= 5; i++) {
        document.querySelector(
          `.card${[i]}`
        ).innerHTML = `<img src="${data.cards[i].image}"> </img> `;
        document.querySelector(`.value${i}`).textContent = data.cards[i].value;
      }
    });
};

newDeckBtn.addEventListener("click", newDeckFunc);
newCard.addEventListener("click", newCardFunc);
