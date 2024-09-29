const cards = [
    {
        text: "Carta 1: Pikachu",
        image: "https://via.placeholder.com/150x100?text=Pikachu",
        options: [
            "Opção 1: Ataque Elétrico!",
            "Opção 2: Ataque Rápido!"
        ],
        messages: [
            "Pikachu usa Ataque Elétrico! É super eficaz!",
            "Pikachu usa Ataque Rápido! Um movimento veloz!"
        ]
    },
    {
        text: "Carta 2: Charmander",
        image: "https://via.placeholder.com/150x100?text=Charmander",
        options: [
            "Opção 1: Lança-Chamas!",
            "Opção 2: Golpe de Cauda!"
        ],
        messages: [
            "Charmander usa Lança-Chamas! Queimando tudo!",
            "Charmander usa Golpe de Cauda! Um golpe forte!"
        ]
    },
    {
        text: "Carta 3: Bulbasaur",
        image: "https://via.placeholder.com/150x100?text=Bulbasaur",
        options: [
            "Opção 1: Chicote de Vinha!",
            "Opção 2: Poeira Sonífera!"
        ],
        messages: [
            "Bulbasaur usa Chicote de Vinha! Cuidado!",
            "Bulbasaur usa Poeira Sonífera! É hora de dormir!"
        ]
    },
    {
        text: "Carta 4: Squirtle",
        image: "https://via.placeholder.com/150x100?text=Squirtle",
        options: [
            "Opção 1: Jato d'Água!",
            "Opção 2: Carapaça!"
        ],
        messages: [
            "Squirtle usa Jato d'Água! Água por toda parte!",
            "Squirtle usa Carapaça! Ele se protege!"
        ]
    },
    {
        text: "Carta 5: Jigglypuff",
        image: "https://via.placeholder.com/150x100?text=Jigglypuff",
        options: [
            "Opção 1: Cantar!",
            "Opção 2: Hipnose!"
        ],
        messages: [
            "Jigglypuff canta! Todos estão adormecendo!",
            "Jigglypuff usa Hipnose! É um truque!"
        ]
    }
];

let selectedCard;

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function initializeCard() {
    selectedCard = getRandomCard();
    document.getElementById("card-text").innerText = selectedCard.text;
    document.getElementById("card-image").src = selectedCard.image;
    document.getElementById("option1").innerText = selectedCard.options[0];
    document.getElementById("option2").innerText = selectedCard.options[1];
}

function flipCard() {
    const cardInner = document.getElementById("card-inner");
    const currentTransform = cardInner.style.transform;
    cardInner.style.transform = currentTransform === "rotateY(0deg)" ? "rotateY(180deg)" : "rotateY(0deg)";
}

function showMessage(option) {
    const message = selectedCard.messages[option - 1]; // Obtém a mensagem correspondente
    document.getElementById("message").innerText = message; // Exibe a mensagem correspondente
}

// Inicializa a carta ao carregar a página
initializeCard();
