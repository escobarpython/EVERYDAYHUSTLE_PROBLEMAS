const cards = [
    {
        text: "Você encontra uma pessoa sofrendo bullying em uma quadra de basquete.",
        image: "",
        options: [
            { text: "Ignorar e sair rapidamente.", result: "Você finge que não vê. Permaneça na sua casa." },
            { text: "Dizer ao agressor para parar.", result: "O Agressor não te escuta. Mas valeu a tentativa. Avance uma casa." },

        ]
    },
    {
        text: "Você descobre que um amigo está usando drogas.",
        image: "https://via.placeholder.com/150x100?text=Drogas",
        options: [
            { text: "Confrontá-lo agressivamente.", result: "Ele não te escuta. Volte 1 casa." },
            { text: "Perguntar se ele precisa de ajuda.", result: "Você tenta ajudar ele, mas dificilmente mudará sua mente. Permaneça em sua casa." },

        ]
    },
    {
        text: "Você encontra um cachorro perdido na rua. Tudo indica que ele possa ter uma doença.",
        image: "https://via.placeholder.com/150x100?text=Cachorro",
        options: [
            { text: "Ignorar o cachorro e seguir em frente.", result: "No proximo dia, você não vê mais o cachorro. Volte 1 casa." },
            { text: "Levar o cachorro ao veterinário.", result: "O cachorro estava com uma doença. Você inicia um tratamento e leva ele para sua casa. Avance 3 casas." },

        ]
    },
    {
        text: "Você assiste a um amigo se machucar jogando bola.",
        image: "https://via.placeholder.com/150x100?text=Amigo",
        options: [
            { text: "Ficar paralisado sem fazer nada.", result: "Seu amigo permanece machucado e fica chateado com você. Volte 1 casa." },
            { text: "Ajudar seu amigo a se levantar.", result: "Ele agradece. Avance 1 casa" },

        ]
    },
    {
        text: "Você encontra uma bolsa esquecida na escola.",
        image: "https://via.placeholder.com/150x100?text=Bolsa",
        options: [
            { text: "Abrir a bolsa para ver o que tem dentro.", result: "Você encontra uma carteira, mas decide não levar. Avance 1 casa." },
            { text: "Levar a bolsa à coordenação da escola.", result: "No outro dia, o dono a encontra. Avance 2 casas." },

        ]
    },
    {
        text: "Você vê uma pessoa idosa tentando atravessar a rua.",
        image: "https://via.placeholder.com/150x100?text=Idoso",
        options: [
            { text: "Ignorar e seguir seu caminho.", result: "Você não sabe se ela chegou em segurança. Volte 2 casas." },
            { text: "Ajudá-la a atravessar.", result: "Ela agradeçe. Avance 3 casas." },

        ]
    },
    {
        text: "Você vê um cartaz de um animal perdido.",
        image: "https://via.placeholder.com/150x100?text=Animal+Perdido",
        options: [
            { text: "Ignorar o cartaz.", result: "Provavelmente, como você, quase ninguém dará importância ao cartaz. Volte 2 casas." },
            { text: "Perguntar aos vizinhos se eles viram o animal.", result: "Ninguém o viu, mas valeu a tentativa. Permaneça em sua casa." },

        ]
    },
    {
        text: "Você se depara com um amigo seu sendo alvo de piadas.",
        image: "https://via.placeholder.com/150x100?text=Piadas",
        options: [
            { text: "Rir junto com os outros.", result: "Sua ação fez a vítima se sentir decepcionada. Volte 3 casas." },
            { text: "Defender a pessoa e pedir que parem.", result: "A vítima agradeceu a você. Avance 1 casa." },

        ]
    },
    {
        text: "Você encontra um novo aluno na escola.",
        image: "https://via.placeholder.com/150x100?text=Novo+Aluno",
        options: [
            { text: "Ignorar e continuar seu dia.", result: "Você permanece indiferente. Permaneça em sua casa." },
            { text: "Apresentar-se e oferecer ajuda.", result: "Ele agradece e vira seu amigo. Avance 1 casa." },

        ]
    },
    {
        text: "Você se sente excluído em um grupo de amigos.",
        image: "https://via.placeholder.com/150x100?text=Exclusão",
        options: [
            { text: "Ignorar e não dizer nada.", result: "Em um momento, você se vê triste. Volte 2 casas." },
            { text: "Falar com seus amigos sobre como se sente.", result: "Eles escutam e entendem seu ponto. Avance 1 casa." },

        ]
    },
    {
        text: "Você descobre que um amigo está triste.",
        image: "https://via.placeholder.com/150x100?text=Amigo+Triste",
        options: [
            { text: "Ignorar o sentimento dele.", result: "Seu amigo fica cada vez mais distante de você. Volte 2 casas." },
            { text: "Perguntar se ele quer conversar.", result: "Ele desabafa com você e você entende ele. Avance 2 casas." },

        ]
    },
    {
        text: "Você vê um amigo sendo criticado.",
        image: "https://via.placeholder.com/150x100?text=Crítica",
        options: [
            { text: "Concordar com a crítica.", result: "Você concorda com os outros por aprovação. Mas perde um amigo. Volte 2 casas." },
            { text: "Defender seu amigo.", result: "Seu amigo agradece muito. Avance 2 casas." },

        ]
    },
    {
        text: "Você recebe uma mensagem negativa sobre você.",
        image: "https://via.placeholder.com/150x100?text=Mensagem+Negativa",
        options: [
            { text: "Ficar triste e não responder.", result: "Você não reclama, e permanece triste. Volte 2 casas." },
            { text: "Responder com positividade.", result: "Você responde de outra forma. Avance 1 casa." },

        ]
    },
    {
        text: "Você escuta rumores sobre alguém na escola.",
        image: "https://via.placeholder.com/150x100?text=Rumores",
        options: [
            { text: "Espalhar os rumores.", result: "Volte 1 casa." },
            { text: "Perguntar a pessoa se é verdade.", result: "Avance 2 casas." },

        ]
    },
    {
        text: "Você vê uma pessoa sendo assediada.",
        image: "https://via.placeholder.com/150x100?text=Assédio",
        options: [
            { text: "Ignorar e sair rapidamente.", result: "Volte 1 casa." },
            { text: "Intervir e pedir para parar.", result: "Avance 3 casas." },

        ]
    },
    {
        text: "Você está se sentindo sozinho.",
        image: "https://via.placeholder.com/150x100?text=Solidão",
        options: [
            { text: "Ficar em casa sem fazer nada.", result: "Volte 1 casa." },
            { text: "Convidar alguém para sair.", result: "Avance 2 casas." },

        ]
    },
    {
        text: "Você é escolhido para ser o líder de um projeto.",
        image: "https://via.placeholder.com/150x100?text=Líder",
        options: [
            { text: "Não ouvir as opiniões dos outros.", result: "Volte 2 casas." },
            { text: "Ouvir todos os membros do grupo.", result: "Avance 3 casas." },

        ]
    },
    {
        text: "Você testemunha uma discussão entre amigos.",
        image: "https://via.placeholder.com/150x100?text=Discussão",
        options: [
            { text: "Ignorar e não se envolver.", result: "Volte 1 casa." },
            { text: "Tentar mediar a discussão.", result: "Avance 2 casas." },

        ]
    },
    {
        text: "Você descobre que alguém está se sentindo inseguro.",
        image: "https://via.placeholder.com/150x100?text=Insegurança",
        options: [
            { text: "Ignorar a situação.", result: "Permaneça em sua casa." },
            { text: "Oferecer apoio e ouvir a pessoa.", result: "A pessoa agradece. Avance 2 casas." },

        ]
    },
    {
        text: "Você vê alguém passando por um momento difícil.",
        image: "https://via.placeholder.com/150x100?text=Momento+Dificil",
        options: [
            { text: "Ignorar e não se envolver.", result: "Você perde uma possível amizade. Volte 1 casa." },
            { text: "Oferecer sua ajuda.", result: "A pessoa agradece. Avance 1 casa." },
        ]
    },
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

    // Exibir as duas primeiras opções
    const selectedOptions = selectedCard.options.slice(0, 2);

    document.getElementById("option1").innerText = selectedOptions[0].text;
    document.getElementById("option2").innerText = selectedOptions[1].text;

    // Armazenar as mensagens para uso posterior
    document.getElementById("option1").dataset.message = selectedOptions[0].result;
    document.getElementById("option2").dataset.message = selectedOptions[1].result;
}

function flipCard() {
    const cardInner = document.getElementById("card-inner");
    const currentTransform = cardInner.style.transform;
    cardInner.style.transform = currentTransform === "rotateY(0deg)" ? "rotateY(180deg)" : "rotateY(0deg)";
}

function showMessage(option) {
    const message = document.getElementById(`option${option}`).dataset.message; // Corrigido aqui
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Inicializa a carta ao carregar a página
initializeCard();
