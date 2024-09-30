const cards = [
    {
        text: "Você encontra uma pessoa sofrendo bullying em uma quadra de basquete.",
        image: "https://via.placeholder.com/150x100?text=Bully",
        options: [
            { text: "Ignorar e sair rapidamente.", result: "Você finge que não vê. Permaneça na sua casa." },
            { text: "Dizer ao agressor para parar.", result: "O Agressor não te escuta. Mas valeu a tentativa. Avance uma casa." },
            { text: "Espere o agressor ir embora e ajude a vítima.", result: "A vítima agradece. Avance 1 casa." },
            { text: "Chamar alguem para resolver.", result: "O Agressor vai embora, e a vítima te agradece. Avance 2 casas." }
        ]
    },
    {
        text: "Você descobre que um amigo está usando drogas.",
        image: "https://via.placeholder.com/150x100?text=Drogas",
        options: [
            { text: "Confrontá-lo agressivamente.", result: "Ele não te escuta. Volte 1 casa." },
            { text: "Perguntar se ele precisa de ajuda.", result: "Você tenta ajudar ele, mas dificilmente mudará sua mente. Permaneça em sua casa." },
            { text: "Ignorar e não se envolver.", result: "Você perde um amigo. Volte 2 casas." },
            { text: "Contar aos pais dele.", result: "Você resolve o problema dele, mas ele não confia mais em você. Avance 1 casa." }
        ]
    },
    {
        text: "Você encontra um cachorro perdido na rua. Tudo indica que ele possa ter uma doença.",
        image: "https://via.placeholder.com/150x100?text=Cachorro",
        options: [
            { text: "Ignorar o cachorro e seguir em frente.", result: "No proximo dia, você não vê mais o cachorro. Volte 1 casa." },
            { text: "Levar o cachorro ao veterinário.", result: "O cachorro estava com uma doença. Você inicia um tratamento e leva ele para sua casa. Avance 3 casas." },
            { text: "Procurar o dono do cachorro.", result: "Você encontra o dono do cachorro. Ele agradece. Avance 2 casas." },
            { text: "Ficar com o cachorro até encontrar o dono.", result: "O dono nunca aparece. Como você ficou com o cachorro, não se encomodou." }
        ]
    },
    {
        text: "Você assiste a um amigo se machucar jogando bola.",
        image: "https://via.placeholder.com/150x100?text=Amigo",
        options: [
            { text: "Ficar paralisado sem fazer nada.", result: "Volte 1 casa." },
            { text: "Ajudar seu amigo a se levantar.", result: "Avance 2 casas." },
            { text: "Chamar um adulto para ajudar.", result: "Avance 1 casa." },
            { text: "Verificar se ele está bem.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você encontra uma bolsa esquecida na escola.",
        image: "https://via.placeholder.com/150x100?text=Bolsa",
        options: [
            { text: "Abrir a bolsa para ver o que tem dentro.", result: "Volte 2 casas." },
            { text: "Levar a bolsa à coordenação da escola.", result: "Avance 3 casas." },
            { text: "Deixar a bolsa onde encontrou.", result: "Volte 1 casa." },
            { text: "Tentar encontrar o dono perguntando a amigos.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você vê uma pessoa idosa tentando atravessar a rua.",
        image: "https://via.placeholder.com/150x100?text=Idoso",
        options: [
            { text: "Ignorar e seguir seu caminho.", result: "Volte 1 casa." },
            { text: "Ajudá-la a atravessar.", result: "Avance 3 casas." },
            { text: "Chamar um guarda de trânsito.", result: "Avance 2 casas." },
            { text: "Esperar até que ela atravesse.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você descobre que seu amigo está sendo excluído de um grupo.",
        image: "https://via.placeholder.com/150x100?text=Exclusão",
        options: [
            { text: "Ignorar a situação.", result: "Volte 2 casas." },
            { text: "Convidar seu amigo para sair com você.", result: "Avance 2 casas." },
            { text: "Falar com o grupo sobre o que está acontecendo.", result: "Avance 1 casa." },
            { text: "Contar a um adulto sobre a exclusão.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você vê um cartaz de um animal perdido.",
        image: "https://via.placeholder.com/150x100?text=Animal+Perdido",
        options: [
            { text: "Ignorar o cartaz.", result: "Volte 1 casa." },
            { text: "Perguntar aos vizinhos se eles viram o animal.", result: "Avance 2 casas." },
            { text: "Colar cartazes com informações sobre o animal.", result: "Avance 3 casas." },
            { text: "Procurar o animal na sua vizinhança.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você se depara com alguém sendo alvo de piadas.",
        image: "https://via.placeholder.com/150x100?text=Piadas",
        options: [
            { text: "Rir junto com os outros.", result: "Volte 1 casa." },
            { text: "Defender a pessoa e pedir que parem.", result: "Avance 2 casas." },
            { text: "Ignorar e sair do lugar.", result: "Volte 2 casas." },
            { text: "Convidar a pessoa para se juntar a você.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você encontra um novo aluno na escola.",
        image: "https://via.placeholder.com/150x100?text=Novo+Aluno",
        options: [
            { text: "Ignorar e continuar seu dia.", result: "Volte 1 casa." },
            { text: "Apresentar-se e oferecer ajuda.", result: "Avance 2 casas." },
            { text: "Fazer amizade com ele.", result: "Avance 3 casas." },
            { text: "Chamar um amigo para ajudar a integrar o novo aluno.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você se sente excluído em um grupo de amigos.",
        image: "https://via.placeholder.com/150x100?text=Exclusão",
        options: [
            { text: "Ignorar e não dizer nada.", result: "Volte 1 casa." },
            { text: "Falar com seus amigos sobre como se sente.", result: "Avance 2 casas." },
            { text: "Tentar se integrar de novo.", result: "Avance 1 casa." },
            { text: "Sair do grupo e procurar novos amigos.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você descobre que um amigo está triste.",
        image: "https://via.placeholder.com/150x100?text=Amigo+Triste",
        options: [
            { text: "Ignorar o sentimento dele.", result: "Volte 1 casa." },
            { text: "Perguntar se ele quer conversar.", result: "Avance 2 casas." },
            { text: "Convidá-lo para fazer algo divertido.", result: "Avance 1 casa." },
            { text: "Fazer algo especial para animá-lo.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você vê um amigo sendo criticado.",
        image: "https://via.placeholder.com/150x100?text=Crítica",
        options: [
            { text: "Concordar com a crítica.", result: "Volte 1 casa." },
            { text: "Defender seu amigo.", result: "Avance 2 casas." },
            { text: "Fazer piada para aliviar a tensão.", result: "Avance 1 casa." },
            { text: "Ignorar e não se envolver.", result: "Volte 2 casas." }
        ]
    },
    {
        text: "Você está em um projeto em grupo.",
        image: "https://via.placeholder.com/150x100?text=Projeto",
        options: [
            { text: "Fazer tudo sozinho.", result: "Volte 1 casa." },
            { text: "Distribuir tarefas entre os membros.", result: "Avance 2 casas." },
            { text: "Ignorar a participação dos outros.", result: "Volte 2 casas." },
            { text: "Pedir ajuda quando necessário.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você recebe uma mensagem negativa sobre você.",
        image: "https://via.placeholder.com/150x100?text=Mensagem+Negativa",
        options: [
            { text: "Ficar triste e não responder.", result: "Volte 1 casa." },
            { text: "Responder com positividade.", result: "Avance 2 casas." },
            { text: "Ignorar a mensagem.", result: "Avance 1 casa." },
            { text: "Contar a alguém em quem confia.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você escuta rumores sobre alguém na escola.",
        image: "https://via.placeholder.com/150x100?text=Rumores",
        options: [
            { text: "Espalhar os rumores.", result: "Volte 1 casa." },
            { text: "Perguntar a pessoa se é verdade.", result: "Avance 2 casas." },
            { text: "Ignorar e não se envolver.", result: "Volte 2 casas." },
            { text: "Conversar com amigos sobre os rumores.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você vê uma pessoa sendo assediada.",
        image: "https://via.placeholder.com/150x100?text=Assédio",
        options: [
            { text: "Ignorar e sair rapidamente.", result: "Volte 1 casa." },
            { text: "Intervir e pedir para parar.", result: "Avance 3 casas." },
            { text: "Contar a um adulto.", result: "Avance 2 casas." },
            { text: "Apoiar a pessoa assediada depois.", result: "Avance 1 casa." }
        ]
    },
    {
        text: "Você está se sentindo sozinho.",
        image: "https://via.placeholder.com/150x100?text=Solidão",
        options: [
            { text: "Ficar em casa sem fazer nada.", result: "Volte 1 casa." },
            { text: "Convidar alguém para sair.", result: "Avance 2 casas." },
            { text: "Ligar para um amigo.", result: "Avance 1 casa." },
            { text: "Participar de um clube ou atividade.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você é escolhido para ser o líder de um projeto.",
        image: "https://via.placeholder.com/150x100?text=Líder",
        options: [
            { text: "Não ouvir as opiniões dos outros.", result: "Volte 2 casas." },
            { text: "Ouvir todos os membros do grupo.", result: "Avance 3 casas." },
            { text: "Fazer tudo sozinho.", result: "Volte 1 casa." },
            { text: "Delegar tarefas de forma justa.", result: "Avance 2 casas." }
        ]
    },
    {
        text: "Você testemunha uma discussão entre amigos.",
        image: "https://via.placeholder.com/150x100?text=Discussão",
        options: [
            { text: "Ignorar e não se envolver.", result: "Volte 1 casa." },
            { text: "Tentar mediar a discussão.", result: "Avance 2 casas." },
            { text: "Falar mal de um dos amigos para o outro.", result: "Volte 2 casas." },
            { text: "Sugerir que eles conversem em particular.", result: "Avance 3 casas." }
        ]
    },
    {
        text: "Você descobre que alguém está se sentindo inseguro.",
        image: "https://via.placeholder.com/150x100?text=Insegurança",
        options: [
            { text: "Ignorar a situação.", result: "Volte 1 casa." },
            { text: "Oferecer apoio e ouvir a pessoa.", result: "Avance 3 casas." },
            { text: "Falar sobre isso com outros amigos.", result: "Volte 2 casas." },
            { text: "Sugerir que a pessoa busque ajuda profissional.", result: "Avance 2 casas." }
        ]
    },
    {
        text: "Você vê alguém passando por um momento difícil.",
        image: "https://via.placeholder.com/150x100?text=Momento+Dificil",
        options: [
            { text: "Ignorar e não se envolver.", result: "Volte 1 casa." },
            { text: "Oferecer sua ajuda.", result: "Avance 3 casas." },
            { text: "Contar a um adulto sobre a situação.", result: "Avance 2 casas." },
            { text: "Apoiar a pessoa com palavras de incentivo.", result: "Avance 1 casa." }
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

    // Embaralhar opções
    const shuffledOptions = shuffleArray(selectedCard.options);
    const selectedOptions = shuffledOptions.slice(0, 2); // Selecionar as duas primeiras opções

    document.getElementById("option1").innerText = selectedOptions[0].text;
    document.getElementById("option2").innerText = selectedOptions[1].text;
    // Armazenar as mensagens para uso posterior
    document.getElementById("option1").dataset.message = selectedOptions[0].result;
    document.getElementById("option2").dataset.message = selectedOptions[1].result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard() {
    const cardInner = document.getElementById("card-inner");
    const currentTransform = cardInner.style.transform;
    cardInner.style.transform = currentTransform === "rotateY(0deg)" ? "rotateY(180deg)" : "rotateY(0deg)";
}

function showMessage(option) {
    const message = document.getElementById(`option${option}`).dataset.message;
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Inicializa a carta ao carregar a página
initializeCard();
