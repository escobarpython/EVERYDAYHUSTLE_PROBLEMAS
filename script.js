const cardTexts = [
    "Carta 1: Pikachu",
    "Carta 2: Charmander",
    "Carta 3: Bulbasaur",
    "Carta 4: Squirtle",
    "Carta 5: Jigglypuff"
];

function getRandomCardText() {
    const randomIndex = Math.floor(Math.random() * cardTexts.length);
    return cardTexts[randomIndex];
}

document.getElementById("card-text").innerText = getRandomCardText();

function flipCard() {
    const cardInner = document.getElementById("card-inner");
    cardInner.style.transform = cardInner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}
