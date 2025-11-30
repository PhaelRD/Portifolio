// --- DADOS CONFIGURÁVEIS PELO USUÁRIO ---

const portfolioConfig = {
    userName: "Raphael Rodrigues Dias", // Opcional: Usado em títulos ou saudações
    title: "PORTFOLIO RAPHAEL", // Título principal na tela inicial
    about: {
        title: "SOBRE",
        content: "Olá! meu nome é Raphael, formado em Desenvolvimento de Software Multiplataforma na FATEC, sou um desenvolvedor apaixonado por criar experiências interativas, combinando design intuitivo com tecnologias inovadoras. Busco constantemente aprimorar minhas habilidades para transformar ideias em soluções digitais que impactam positivamente o dia a dia das pessoas."
    },
    skills: {
        title: "HABILIDADES",
        list: [
            "HTML/CSS",
            "JavaScript",
            "Flutter",
            "Dart",
            "Android Studio",
            "Java",
            "Python",
            "Flask",
            "Firebase",
            "SQL"
            // Adicione mais habilidades aqui
        ]
    },
    contact: {
        title: "CONTATO",
        email: "raphaelr2014@gmail.com",
        github: "https://github.com/PhaelRD",
        linkedin: "https://www.linkedin.com/in/raphael-rodrigues-598778b2",
        instagram: "https://www.instagram.com/phael.r.d",
        whatsapp: "https://w.app/zkqre4"
        // Adicione mais links ou informações de contato se desejar
    },
    projects: [
        {
            id: "projeto1",
            title: "Game Select",
            description: "Mini rede social de avalição de jogos.",
            detailTitle: "GAMER SELECT",
            detailContent: "Este projeto é uma plataforma web de gerenciamento e avaliação de jogos, integrada com Firebase para autenticação, banco de dados em tempo real e armazenamento. Os usuários podem cadastrar, avaliar e categorizar jogos como desejados, jogando ou zerados. Administradores podem adicionar, editar e excluir jogos. O sistema inclui funcionalidades de filtragem, paginação, resenhas e cálculo de médias de avaliação.",
            tools: ["HTML5/CSS3", "JavaScript", "Firebase"],
            links: [
                { text: "Ver Projeto Online", url: "https://phaelrd.github.io/GameSelect/public" },
                { text: "GitHub", url: "https://github.com/PhaelRD/GameSelect" }
            ]
        },
        {
            id: "projeto2",
            title: "Termo Clone",
            description: "Clone do jogo Termo.",
            detailTitle: "TERMO CLONE",
            detailContent: "O jogo sorteia uma palavra secreta de uma lista pré-definida. O jogador tem um número limitado de tentativas para adivinhar, inserindo letras via teclado virtual ou selecionando células. Após cada palpite, o jogo fornece feedback visual destacando letras corretas, presentes ou ausentes. O teclado e as células são atualizados conforme o progresso. Ao vencer ou perder, o jogo exibe uma mensagem e desativa novas entradas.",
            tools: ["HTML5/CSS3", "JavaScript"],
            links: [
                { text: "Ver Projeto Online", url: "https://phaelrd.github.io/termo-clone/" },
                { text: "GitHub", url: "https://github.com/PhaelRD/termo-clone" }
            ]
        },
         {
             id: "projeto3",
             title: "Rastreio Escolar",
             description: "Aplicação para rastrear alunos e transportador escolar.",
             detailTitle: "RASTREIO ESCOLAR",
             detailContent: "Os aplicativos 1 e 2 funcionam de forma complementar para gerenciar e rastrear o transporte escolar. O Aplicativo 1 é usado por motoristas para enviar sua localização em tempo real ao Firebase Realtime Database. O Aplicativo 2 é usado pelos pais para se cadastrar, fazer login e visualizar rastreamentos, permitindo acompanhar em um mapa a localização do transporte e do estudante. Ambos utilizam Firebase Authentication para autenticação e o Realtime Database para armazenar e sincronizar os dados. O sistema garante segurança e atualização em tempo real das informações de transporte escolar.",
             tools: ["Android Studio", "Java", "Firebase"],
             links: [
                 { text: "GitHub Aplicativo 1", url: "https://github.com/PhaelRD/rastreioaluno" },
                 { text: "GitHub Aplicativo 2", url: "https://github.com/PhaelRD/rastreioaluno2" }
             ]
         },
         {
             id: "projeto4",
             title: "Rota Escolar",
             description: "Solução de gerenciamento para transportadores escolares.",
             detailTitle: "ROTA ESCOLAR",
             detailContent: "O Rota Escolar é uma solução multiplataforma para transportadores escolares, permitindo gerenciar alunos, escolas, finanças e rastreamento em tempo real. Desenvolvido em Flutter com backend no Firebase, oferece autenticação, banco de dados e notificações automatizadas. Utiliza o Stripe para assinaturas e pagamentos, e a Brevo para envio de e-mails. Inclui funcionalidades como reajuste de mensalidades, envio de convites, controle de gastos e cobranças via WhatsApp. Disponível na web e Android, com segurança e escalabilidade garantidas.",
             tools: ["Flutter", "Dart","Firebase","Stripe"],
             links: [
                 { text: "GitHub", url: "https://github.com/PhaelRD/Rota-Escolar-Flutter-Readme" }
             ]
         },
        {
            id: "projeto5",
            title: "Bob",
            description: "Chat de Inteligencia Artificial.",
            detailTitle: "BOB",
            detailContent: "Bob é um assistente virtual feito com Flask (backend) e JavaScript (frontend) que entende comandos de texto e voz, responde com texto e fala suas respostas. Ele pode salvar, listar e excluir lembretes, informar data e hora, além de fazer pesquisas no Google.",
            tools: ["Python", "Flask", "Html", "Javascript"],
            links: [
                { text: "GitHub", url: "https://github.com/PhaelRD/Bob" },
                { text: "Ver Projeto Online", url: "https://phael.pythonanywhere.com/" }
            ]
        },
        {
            id: "projeto6",
            title: "Loja De Presentes",
            description: "E-commerce completo de loja de presentes.",
            detailTitle: "LOJA DE PRESENTES",
            detailContent: "Este é um e-commerce completo de loja de presentes desenvolvido com tecnologias modernas. O site permite que clientes naveguem por produtos, adicionem itens ao carrinho, façam login com Google, e realizem compras reais através do Stripe.",
            tools: ["Javascript ", "Firebase", "Stripe"],
            links: [
                { text: "GitHub", url: "https://github.com/PhaelRD/LojaDePresentes" },
                { text: "Ver Projeto Online", url: "https://lojadepresentes-22206.web.app" }
            ]
        },
        {
            id: "projeto7",
            title: "Youtube Bot",
            description: "Conecta o chat de uma live do YouTube ao teu teclado e rato.",
            detailTitle: "YOUTUBE BOT",
            detailContent: "conecta o chat de uma live do YouTube ao teu teclado e rato, permitindo que os teus espectadores controlem o jogo no teu PC em tempo real.",
            tools: ["Javascript ", "NodeJS"],
            links: [
                { text: "GitHub", url: "https://github.com/PhaelRD/YouTube-Plays-Bot" }
            ]
        }
    ]
};

// --- FIM DOS DADOS CONFIGURÁVEIS ---

// Variáveis globais
let currentScreen = 'boot';
let menuIndex = 0;
let projectIndex = 0;
const baseScreens = ['boot', 'title', 'menu', 'about', 'projects', 'skills', 'contact', 'snake-start', 'snake-game', 'snake-over'];
const menuItems = ['about', 'projects', 'skills', 'contact'];
const menuLabels = [portfolioConfig.about.title, 'PROJETOS', portfolioConfig.skills.title, portfolioConfig.contact.title];

const projectScreens = portfolioConfig.projects.map(p => p.id);
const screens = [...baseScreens, ...projectScreens];

// Variáveis Snake
let snake = [];
let food = { x: 0, y: 0 };
let direction = 'right';
let gameSpeed = 150;
let gameInterval;
let score = 0;
let gameActive = false;
let gamePaused = false;
let lastScreenBeforeSnake = 'menu';
let snakeCanvas, snakeCtx;
const gridSize = 10; // Tamanho de cada célula da grade em pixels
let canvasWidth, canvasHeight; // Dimensões do canvas em pixels
let gridWidth, gridHeight; // Dimensões do canvas em unidades de grade

let isSnakeMode = false;
let canSwitchCartridge = false;

// Web Audio API Setup
let audioCtx;
let soundEnabled = false;

function initAudio() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            soundEnabled = true;
            console.log("AudioContext initialized.");
        } catch (e) {
            console.error("Web Audio API is not supported in this browser.");
            soundEnabled = false;
        }
    }
}

function playTone(frequency = 440, duration = 0.05, type = 'square', volume = 0.1) {
    if (!soundEnabled || !audioCtx) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + duration);
}

function playNavSound() { playTone(660, 0.03, 'triangle', 0.08); }
function playConfirmSound() { playTone(880, 0.05, 'square', 0.1); }
function playBackSound() { playTone(440, 0.05, 'sawtooth', 0.08); }
function playSnakeEatSound() { playTone(1200, 0.04, 'sine', 0.1); }
function playSnakeDieSound() { playTone(220, 0.2, 'sawtooth', 0.15); }
function playPauseSound() { playTone(550, 0.08, 'triangle', 0.08); }

// Inicialização
(function() {
    if (window.gameInitialized) return;
    window.gameInitialized = true;

    generateTitleScreen();
    generateAboutScreen();
    generateSkillsScreen();
    generateContactScreen();
    generateProjectsScreen();
    generateProjectDetailScreens();
    generateSnakeStartScreen();
    generateSnakeOverScreen();

    resetScreens();
    const bootScreen = document.getElementById("boot-screen");
    if (bootScreen) bootScreen.classList.add("active");

    setTimeout(() => { changeScreen("title"); }, 2000);

    setupButtonEvents();
    setupKeyboardEvents();
    setupCartridgeEvents();
    animateCartridge();
    initSnakeGame();
    createMenuIcons();

    const initAudioOnce = () => {
        initAudio();
        document.body.removeEventListener('click', initAudioOnce);
        document.body.removeEventListener('keydown', initAudioOnce);
    };
    document.body.addEventListener('click', initAudioOnce, { once: true });
    document.body.addEventListener('keydown', initAudioOnce, { once: true });
})();

function generateSnakeStartScreen() {
    const screen = document.getElementById('snake-start-screen');
    if (!screen) return;
    screen.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
            <h2>SNAKE</h2>
            <p class="blink" style="margin-top: 20px;">PRESS START</p>
        </div>
    `;
}

function generateSnakeOverScreen() {
    const screen = document.getElementById('snake-over-screen');
    if (!screen) return;
    screen.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
            <h2>GAME OVER</h2>
            <p id="final-score" style="margin-top: 10px; margin-bottom: 20px;">SCORE: 0</p>
            <p class="blink">PRESS START</p>
        </div>
    `;
}

function updateSnakeOverScreen(finalScore) {
    const scoreElement = document.getElementById('final-score');
    if (scoreElement) {
        scoreElement.textContent = `SCORE: ${finalScore}`;
    }
}

function setupButtonEvents() {
    document.getElementById('btn-up')?.addEventListener('click', () => { simulateButtonPress('btn-up'); handleDpadPress('up'); });
    document.getElementById('btn-down')?.addEventListener('click', () => { simulateButtonPress('btn-down'); handleDpadPress('down'); });
    document.getElementById('btn-left')?.addEventListener('click', () => { simulateButtonPress('btn-left'); handleDpadPress('left'); });
    document.getElementById('btn-right')?.addEventListener('click', () => { simulateButtonPress('btn-right'); handleDpadPress('right'); });
    document.getElementById('btn-a')?.addEventListener('click', () => { simulateButtonPress('btn-a'); handleActionPress('a'); });
    document.getElementById('btn-b')?.addEventListener('click', () => { simulateButtonPress('btn-b'); handleActionPress('b'); });
    document.getElementById('btn-start')?.addEventListener('click', () => { simulateButtonPress('btn-start'); handleMenuPress('start'); });
    document.getElementById('btn-select')?.addEventListener('click', () => { simulateButtonPress('btn-select'); handleMenuPress('select'); });
}

function setupCartridgeEvents() {
    const cartridge = document.querySelector('.cartridge');
    if (cartridge) {
        cartridge.addEventListener('click', () => {
            if (canSwitchCartridge) {
                playConfirmSound(); 
                toggleCartridge();
            }
        });
    }
}

function toggleCartridge() {
    const cartridge = document.querySelector('.cartridge');
    if (!cartridge) return;
    cartridge.classList.add('eject');

    setTimeout(() => {
        isSnakeMode = !isSnakeMode;
        cartridge.classList.toggle('snake-mode', isSnakeMode);

        if (isSnakeMode) {
            if (currentScreen !== 'boot' && currentScreen !== 'title') {
                lastScreenBeforeSnake = currentScreen;
                stopSnakeGame();
                changeScreen('snake-start');
            }
        } else {
            stopSnakeGame();
            if (screens.includes(lastScreenBeforeSnake) && !['snake-start', 'snake-game', 'snake-over'].includes(lastScreenBeforeSnake)) {
                 changeScreen(lastScreenBeforeSnake);
            } else {
                 changeScreen('menu');
            }
        }

        setTimeout(() => { cartridge.classList.remove('eject'); }, 300);
    }, 500);
}

function simulateButtonPress(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}

function setupKeyboardEvents() {
    document.addEventListener('keydown', (event) => {
        initAudio(); 
        switch(event.key) {
            case 'ArrowUp': simulateButtonPress('btn-up'); handleDpadPress('up'); break;
            case 'ArrowDown': simulateButtonPress('btn-down'); handleDpadPress('down'); break;
            case 'ArrowLeft': simulateButtonPress('btn-left'); handleDpadPress('left'); break;
            case 'ArrowRight': simulateButtonPress('btn-right'); handleDpadPress('right'); break;
            case 'z': case 'Z': simulateButtonPress('btn-a'); handleActionPress('a'); break;
            case 'x': case 'X': simulateButtonPress('btn-b'); handleActionPress('b'); break;
            case 'Enter': simulateButtonPress('btn-start'); handleMenuPress('start'); break;
            case ' ': simulateButtonPress('btn-select'); handleMenuPress('select'); break;
        }
    });
}

function setupProjectItemEvents() {
    const projectItems = document.querySelectorAll('#projects-screen .project-item');
    projectItems.forEach((item, index) => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        newItem.addEventListener('click', () => {
             projectIndex = index;
             updateProjectSelection();
             handleActionPress('a');
         });
    });
     updateProjectSelection();
}

function setupContactLinks() {
     document.querySelectorAll('.contact-link').forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
            e.stopPropagation();
            playConfirmSound(); 
            newLink.style.opacity = '0.7';
            setTimeout(() => { newLink.style.opacity = '1'; }, 150);
        });
    });
}

function createMenuIcons() {
    const menuScreen = document.getElementById('menu-screen');
    if (!menuScreen) return;
    menuScreen.innerHTML = '';
    
    const menuIcons = document.createElement('div');
    menuIcons.className = 'menu-icons';
    
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-icon-item';
        menuItem.setAttribute('data-screen', item);
        if (index === menuIndex) menuItem.classList.add('selected');
        
        const iconBox = document.createElement('div');
        iconBox.className = 'icon-box';
        
        const pixelIcon = document.createElement('div');
        pixelIcon.className = `pixel-icon ${item}-icon`;
        
        const iconLabel = document.createElement('div');
        iconLabel.className = 'icon-label';
        iconLabel.textContent = menuLabels[index];
        
        iconBox.appendChild(pixelIcon);
        menuItem.appendChild(iconBox);
        menuItem.appendChild(iconLabel);
        
        menuItem.addEventListener('click', () => { 
            playConfirmSound();
            changeScreen(item); 
        });
        menuIcons.appendChild(menuItem);
    });
    
    menuScreen.appendChild(menuIcons);
    
    const footerHint = document.createElement('p');
    footerHint.className = 'footer-hint';
    footerHint.textContent = 'A: SELECIONAR B: VOLTAR';
    menuScreen.appendChild(footerHint);
    updateMenuSelection();
}

function handleDpadPress(newDirection) {
    playNavSound(); 
    if (currentScreen === 'snake-game' && gameActive && !gamePaused) {
        changeSnakeDirection(newDirection);
        return;
    }

    switch(currentScreen) {
        case 'menu': navigateMenu(newDirection); break;
        case 'projects': navigateProjects(newDirection); break;
    }
}

function handleActionPress(button) {
    if (button === 'a') {
        playConfirmSound(); 
        if (['snake-start', 'snake-over', 'snake-game'].includes(currentScreen)) return;

        switch(currentScreen) {
            case 'title': canSwitchCartridge = true; changeScreen('menu'); break;
            case 'menu': if (menuItems[menuIndex]) changeScreen(menuItems[menuIndex]); break;
            case 'projects':
                const projectItems = document.querySelectorAll('#projects-screen .project-item');
                const selectedProject = projectItems[projectIndex];
                if (selectedProject) {
                    const projectId = selectedProject.getAttribute('data-project');
                    if (projectId) changeScreen(projectId);
                }
                break;
        }
    } else if (button === 'b') {
        playBackSound(); 
        if (['snake-start', 'snake-game', 'snake-over'].includes(currentScreen)) return;

        // *** MODIFIED: Return to project list from project details ***
        if (projectScreens.includes(currentScreen)) {
            changeScreen('projects'); // Go back to the project list
        } else if (menuItems.includes(currentScreen)) {
            changeScreen('menu'); // Go back to the main menu from other sections (about, skills, contact, projects list)
        }
    }
}

function handleMenuPress(button) {
    if (button === 'start') {
        if (['snake-start', 'snake-over'].includes(currentScreen)) {
            playConfirmSound();
            startSnakeGame(); 
            return; 
        }
        if (currentScreen === 'snake-game') {
            playPauseSound();
            togglePauseSnakeGame(); 
            return; 
        }
        playConfirmSound();

        if (currentScreen === 'title') {
            canSwitchCartridge = true;
            changeScreen('menu');
        } else if (currentScreen !== 'boot') {
            if (currentScreen === 'menu') {
                 if (menuItems[menuIndex]) changeScreen(menuItems[menuIndex]);
            } else if (menuItems.includes(currentScreen)) {
                 changeScreen('menu');
            }
        }
    } else if (button === 'select') {
        playNavSound(); 
    }
}

function changeScreen(screenId) {
    if (!screens.includes(screenId) && !projectScreens.includes(screenId)) {
        console.error(`Screen ID "${screenId}" not found or not registered.`);
        return;
    }
    resetScreens();
    const targetScreen = document.getElementById(`${screenId}-screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
        if (screenId === 'menu') updateMenuSelection();
        if (screenId === 'projects') updateProjectSelection();
        if (screenId === 'snake-game') setupCanvas();
    } else {
        console.error(`Element with ID "${screenId}-screen" not found.`);
    }
}

function resetScreens() {
    document.querySelectorAll('.game-screen').forEach(screen => {
        if (screen.classList) screen.classList.remove('active');
    });
}

// --- Snake Game Logic ---

function initSnakeGame() {
    snakeCanvas = document.getElementById('snake-canvas');
    if (!snakeCanvas) {
        console.error("Snake canvas not found!");
        return;
    }
    snakeCtx = snakeCanvas.getContext('2d');
    // Desabilita anti-aliasing para visual pixelado
    if (snakeCtx) {
        snakeCtx.imageSmoothingEnabled = false;
    }
}

function setupCanvas() {
    if (!snakeCanvas || !snakeCtx) return;
    const screenElement = document.querySelector('.screen');
    let newWidth, newHeight;
    if (screenElement) {
        newWidth = screenElement.clientWidth;
        newHeight = screenElement.clientHeight;
    } else {
        newWidth = 160;
        newHeight = 144;
        console.warn("Screen element not found, using default canvas dimensions.");
    }

    if (canvasWidth !== newWidth || canvasHeight !== newHeight) {
        canvasWidth = newWidth;
        canvasHeight = newHeight;
        // Ajusta as dimensões do canvas para serem múltiplos do gridSize
        gridWidth = Math.floor(canvasWidth / gridSize);
        gridHeight = Math.floor(canvasHeight / gridSize);
        // Recalcula as dimensões reais do canvas para o alinhamento perfeito
        snakeCanvas.width = gridWidth * gridSize;
        snakeCanvas.height = gridHeight * gridSize;
        // Centraliza o canvas se ele for menor que a área da tela
        snakeCanvas.style.marginTop = `${Math.floor((newHeight - snakeCanvas.height) / 2)}px`;
        snakeCanvas.style.marginLeft = `${Math.floor((newWidth - snakeCanvas.width) / 2)}px`;

        console.log(`Canvas resized to: ${snakeCanvas.width}x${snakeCanvas.height}, Grid: ${gridWidth}x${gridHeight}`);
    }
}

function startSnakeGame() {
    if (!snakeCanvas || !snakeCtx) {
        console.error("Cannot start Snake game: canvas not initialized.");
        return;
    }
    stopSnakeGame();
    setupCanvas();

    score = 0;
    direction = 'right';
    if (!gridWidth || !gridHeight) {
        console.error("Grid dimensions not set, cannot start snake game.");
        return;
    }
    const startX = Math.floor(gridWidth / 2);
    const startY = Math.floor(gridHeight / 2);
    snake = [{ x: startX, y: startY }, { x: startX - 1, y: startY }];
    placeFood();

    gameActive = true;
    gamePaused = false;

    changeScreen('snake-game');
    gameInterval = setInterval(gameLoop, gameSpeed);
}

function stopSnakeGame(isGameOver = false) {
    clearInterval(gameInterval);
    gameActive = false;
    gamePaused = false;

    if (isGameOver) {
        playSnakeDieSound(); 
        updateSnakeOverScreen(score);
        changeScreen('snake-over');
    } else {
         if (snakeCtx && snakeCanvas) {
             // Limpa apenas a área do canvas real
             snakeCtx.fillStyle = '#e0f8d0';
             snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
         }
    }
}

function togglePauseSnakeGame() {
    if (!gameActive) return;
    gamePaused = !gamePaused;
    if (gamePaused) {
        clearInterval(gameInterval);
        if (snakeCtx && snakeCanvas) {
            snakeCtx.fillStyle = 'rgba(8, 24, 32, 0.7)';
            snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
            snakeCtx.fillStyle = '#e0f8d0';
            snakeCtx.font = '12px "Press Start 2P"';
            snakeCtx.textAlign = 'center';
            snakeCtx.fillText('PAUSED', snakeCanvas.width / 2, snakeCanvas.height / 2);
        }
    } else {
        drawSnakeGame(); 
        gameInterval = setInterval(gameLoop, gameSpeed);
    }
}

function placeFood() {
    if (!gridWidth || !gridHeight) return;
    // Garante que a comida não apareça na borda (se houver paredes visuais)
    food.x = Math.floor(Math.random() * gridWidth);
    food.y = Math.floor(Math.random() * gridHeight);
    // Verifica colisão com a cobra
    for (let segment of snake) {
        if (food.x === segment.x && food.y === segment.y) {
            placeFood(); // Tenta novamente se colidir
            return;
        }
    }
}

function changeSnakeDirection(newDirection) {
    const goingUp = direction === 'up';
    const goingDown = direction === 'down';
    const goingLeft = direction === 'left';
    const goingRight = direction === 'right';

    if (newDirection === 'up' && !goingDown) direction = 'up';
    if (newDirection === 'down' && !goingUp) direction = 'down';
    if (newDirection === 'left' && !goingRight) direction = 'left';
    if (newDirection === 'right' && !goingLeft) direction = 'right';
}

function gameLoop() {
    if (!gameActive || gamePaused || !gridWidth || !gridHeight) return;

    let head = { ...snake[0] };
    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }

    // Colisão com paredes (limites da grade)
    if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
        stopSnakeGame(true);
        return;
    }
    // Colisão consigo mesma
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            stopSnakeGame(true);
            return;
        }
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        playSnakeEatSound(); 
        placeFood();
    } else {
        snake.pop();
    }

    drawSnakeGame();
}

// *** MODIFICATION: drawSnakeGame - Pixel Perfect Alignment ***
function drawSnakeGame() {
    if (!snakeCtx || !snakeCanvas || !gridWidth || !gridHeight) return;

    // Limpa o canvas com a cor de fundo
    snakeCtx.fillStyle = '#e0f8d0'; 
    snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    // Desenha a comida (ocupando exatamente uma célula da grade)
    snakeCtx.fillStyle = '#9b2256'; // Cor da comida
    snakeCtx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Desenha a cobra (cada segmento ocupa exatamente uma célula)
    snakeCtx.fillStyle = '#081820'; // Cor da cobra
    snake.forEach(segment => {
        snakeCtx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Desenha a pontuação (fora da área de jogo, se possível, ou no topo)
    snakeCtx.fillStyle = '#081820';
    snakeCtx.font = '8px "Press Start 2P"';
    snakeCtx.textAlign = 'right';
    snakeCtx.textBaseline = 'top'; // Alinha pelo topo para melhor controle
    const scorePadding = 2;
    snakeCtx.fillText(`SCORE:${score}`, snakeCanvas.width - scorePadding, scorePadding);
}


// --- Portfolio Content Generation Functions ---

function generateTitleScreen() {
    const screen = document.getElementById('title-screen');
    if (screen) {
        const titleElement = screen.querySelector('.title');
        if (titleElement) titleElement.textContent = portfolioConfig.title;
    }
}

function generateAboutScreen() {
    const screen = document.getElementById('about-screen');
    if (screen) {
        screen.innerHTML = `
            <h2>${portfolioConfig.about.title}</h2>
            <div class="content-area">
                <p>${portfolioConfig.about.content}</p>
            </div>
            <p class="footer-hint">B: VOLTAR</p>
        `;
    }
}

function generateSkillsScreen() {
    const screen = document.getElementById('skills-screen');
    if (screen) {
        let skillsListHTML = portfolioConfig.skills.list.map(skill => `<li>- ${skill}</li>`).join('');
        screen.innerHTML = `
            <h2>${portfolioConfig.skills.title}</h2>
            <div class="content-area">
                <ul class="skills-list" style="padding-left: 0; list-style: none;">${skillsListHTML}</ul>
            </div>
            <p class="footer-hint">B: VOLTAR</p>
        `;
    }
}

function generateContactScreen() {
    const screen = document.getElementById('contact-screen');
    if (screen) {
        let contactHTML = `
            <p>Email: <a href="mailto:${portfolioConfig.contact.email}" class="contact-link">${portfolioConfig.contact.email}</a></p>
            <p>GitHub: <a href="${portfolioConfig.contact.github}" target="_blank" class="contact-link">${portfolioConfig.contact.github.split('/').pop()}</a></p>
            <p>LinkedIn: <a href="${portfolioConfig.contact.linkedin}" target="_blank" class="contact-link">${'Raphael'}</a></p>
            <p>Instagram: <a href="${portfolioConfig.contact.instagram}" target="_blank" class="contact-link">${portfolioConfig.contact.instagram.split('/').pop()}</a></p>
            <p>WhatsApp: <a href="${portfolioConfig.contact.whatsapp}" target="_blank" class="contact-link">${portfolioConfig.contact.whatsapp.split('/').pop()}</a></p>
        `;
        screen.innerHTML = `
            <h2>${portfolioConfig.contact.title}</h2>
            <div class="content-area">
                ${contactHTML}
            </div>
            <p class="footer-hint">B: VOLTAR</p>
        `;
        setupContactLinks();
    }
}

function generateProjectsScreen() {
    const screen = document.getElementById('projects-screen');
    if (screen) {
        let projectsListHTML = portfolioConfig.projects.map((project, index) => `
            <div class="project-item ${index === projectIndex ? 'selected' : ''}" data-project="${project.id}">
                <strong>${project.title}</strong><br>
                <span style="font-size: 7px;">${project.description}</span>
            </div>
        `).join('');
        screen.innerHTML = `
            <h2>PROJETOS</h2>
            <div class="content-area" style="overflow-y: auto;">
                ${projectsListHTML}
            </div>
            <p class="footer-hint">↑↓: NAVEGAR A: VER B: VOLTAR</p>
        `;
        setupProjectItemEvents();
    }
}

function generateProjectDetailScreens() {
    const container = document.getElementById('project-details-container');
    if (!container) return;
    container.innerHTML = '';
    portfolioConfig.projects.forEach(project => {
        const screenDiv = document.createElement('div');
        screenDiv.id = `${project.id}-screen`;
        screenDiv.className = 'game-screen project-detail-screen';
        let linksHTML = project.links.map(link =>
            `<a href="${link.url}" target="_blank" class="project-link contact-link">${link.text}</a>`
        ).join('<br>');
        let toolsHTML = project.tools.join(', ');
        screenDiv.innerHTML = `
            <h2>${project.detailTitle}</h2>
            <div class="content-area" style="overflow-y: auto;">
                <p>${project.detailContent}</p>
                <p style="margin-top:10px;"><strong>Ferramentas:</strong> ${toolsHTML}</p>
                <div style="margin-top:10px;">${linksHTML}</div>
            </div>
            <p class="footer-hint">B: VOLTAR</p>
        `;
        container.appendChild(screenDiv);
    });
     setupContactLinks();
}

// --- Navigation Helpers ---

function navigateMenu(dir) {
    const items = document.querySelectorAll('#menu-screen .menu-icon-item');
    const itemsCount = items.length;
    if (itemsCount === 0) return;
    items[menuIndex]?.classList.remove('selected');
    if (dir === 'up' || dir === 'left') {
        menuIndex = (menuIndex - 1 + itemsCount) % itemsCount;
    } else if (dir === 'down' || dir === 'right') {
        menuIndex = (menuIndex + 1) % itemsCount;
    }
    items[menuIndex]?.classList.add('selected');
}

function updateMenuSelection() {
     let items = document.querySelectorAll('#menu-screen .menu-icon-item');
     items.forEach((item, index) => {
         item.classList.toggle('selected', index === menuIndex);
     });
}

function navigateProjects(dir) {
    const projectItems = document.querySelectorAll('#projects-screen .project-item');
    const itemsCount = projectItems.length;
    if (itemsCount === 0) return;
    projectItems[projectIndex]?.classList.remove('selected');
    if (dir === 'up') {
        projectIndex = (projectIndex - 1 + itemsCount) % itemsCount;
    } else if (dir === 'down') {
        projectIndex = (projectIndex + 1) % itemsCount;
    }
    const newSelection = projectItems[projectIndex];
    if (newSelection) {
        newSelection.classList.add('selected');
        newSelection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function updateProjectSelection() {
    const projectItems = document.querySelectorAll('#projects-screen .project-item');
     projectItems.forEach((item, index) => {
         item.classList.toggle('selected', index === projectIndex);
     });
     const selectedItem = projectItems[projectIndex];
     if (selectedItem) {
         selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
     }
}

// Placeholder for cartridge animation
function animateCartridge() {
    // console.log("Animating cartridge...");
}

