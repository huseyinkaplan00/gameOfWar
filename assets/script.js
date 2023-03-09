const newDeckBtn = document.getElementById("newDeck")
const newCard = document.getElementById("newCard")
let deckID
const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
     "10", "JACK", "QUEEN", "KING", "ACE"]
const newDeckFunc = () => {
     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", {
          method: "GET",
     })
          .then((res) => res.json())
          .then((data) => {
               deckID = data.deck_id
               console.log(deckID)
          })
}

const newCardFunc = () => {
     fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=6`, {
          method: "GET",
     })
          .then((res) => res.json())
          .then((data) => {
               let playerOnePoint
               for (let i = 0; i <= 5; i++) {
                    document.querySelector(`.card${[i]}`).innerHTML = `<img src="${data.cards[i].image}"> </img> `

                    
               }

               
                    values(data.cards[0].value, data.cards[1].value, data.cards[2].value,data.cards[3].value , data.cards[4].value, data.cards[5].value)
                  

               // const cameData = values(data.cards[0].value, data.cards[1].value, data.cards[2].value, data.cards[3].value, data.cards[4].value, data.cards[5].value  )


          })
}

newDeckBtn.addEventListener("click", newDeckFunc)
newCard.addEventListener("click", newCardFunc)

const values = (cards0, cards1, cards2, cards3, cards4 , cards5) => {
     
     const playerOneValue = valueOptions.indexOf(cards0)
     const playerTwoValue = valueOptions.indexOf(cards1)
     const playerThreeValue = valueOptions.indexOf(cards2)

     let playerOneScores = [playerOneValue, playerTwoValue, playerThreeValue]
     
  
     for( let i = 0; i<=2; i++){
          document.querySelector(`.value${i}`).textContent = playerOneScores[i]+2
         
     }

     let sum = (playerOneValue+2) + (playerTwoValue+2) + (playerThreeValue+2)
     document.querySelector(".score-sign").textContent = sum

     const playerFourValue = valueOptions.indexOf(cards3)
     const playerFiveValue = valueOptions.indexOf(cards4)
     const playerSixValue = valueOptions.indexOf(cards5)

     let scores = ["","","",playerFourValue , playerFiveValue , playerSixValue]
     for( let i = 3; i<=5; i++){
          document.querySelector(`.value${i}`).textContent = scores[i]+2
     }
     let sum2 = (playerFourValue+2) + (playerFiveValue+2) + (playerSixValue+2)
     document.querySelector(".score-sign2").textContent = sum2

     return sum2    
}


