// Script para o modo Standard
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos no modo standard
    if (!document.querySelector('.standard-header')) return;
    
    // Referência ao objeto de configuração do portfólio do script original
    const portfolioConfig = window.portfolioConfig || {
        userName: "Raphael Rodrigues Dias",
        title: "PORTFOLIO RAPHAEL",
        about: {
            title: "SOBRE",
            content: "Olá! meu nome é Raphael, formado em Desenvolvimento de Software Multiplataforma na FATEC, sou um desenvolvedor apaixonado por criar experiências interativas, combinando design intuitivo com tecnologias inovadoras. Busco constantemente aprimorar minhas habilidades para transformar ideias em soluções digitais que impactam positivamente o dia a dia das pessoas.",
            image: "img/standard/profile.jpg" // Imagem de perfil para a seção Sobre
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
                "Firebase",
                "SQL"
            ]
        },
        contact: {
            title: "CONTATO",
            email: "raphaelr2014@gmail.com",
            github: "https://github.com/PhaelRD",
            linkedin: "https://www.linkedin.com/in/raphael-rodrigues-598778b2",
            instagram: "https://www.instagram.com/phael.r.d",
            whatsapp: "https://w.app/zkqre4"
        },
        projects: [
            {
                id: "projeto1",
                title: "Game Select",
                description: "Mini rede social de avalição de jogos.",
                detailTitle: "GAMER SELECT",
                detailContent: "Este projeto é uma plataforma web de gerenciamento e avaliação de jogos, integrada com Firebase para autenticação, banco de dados em tempo real e armazenamento. Os usuários podem cadastrar, avaliar e categorizar jogos como desejados, jogando ou zerados. Administradores podem adicionar, editar e excluir jogos. O sistema inclui funcionalidades de filtragem, paginação, resenhas e cálculo de médias de avaliação.",
                image: "img/standard/project1.jpg", // Imagem ilustrativa do projeto
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
                image: "img/standard/project2.jpg", // Imagem ilustrativa do projeto
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
                image: "img/standard/project3.jpg", // Imagem ilustrativa do projeto
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
                image: "img/standard/project4.jpg", // Imagem ilustrativa do projeto
                tools: ["Flutter", "Dart","Firebase","Stripe"],
                links: [
                    { text: "GitHub", url: "https://github.com/PhaelRD/Rota-Escolar-Flutter-Readme" }
                ]
            }
        ]
    };

    // Inicialização
    initStandardMode();
    setupEventListeners();
    animateElements();

    // Função para inicializar o modo standard
    function initStandardMode() {
        // Configurar imagem de perfil
        setupProfileImage();
        
        // Gerar conteúdo dinâmico
        generateProjectCards();
        generateSkillCards();
        generateContactLinks();
        setupSnakeGame();
    }
    
    // Função para configurar a imagem de perfil
    function setupProfileImage() {
        const profileImage = document.getElementById('profile-image');
        if (profileImage && portfolioConfig.about && portfolioConfig.about.image) {
            profileImage.src = portfolioConfig.about.image;
            profileImage.alt = portfolioConfig.userName || 'Raphael Rodrigues';
        }
    }

    // Função para gerar cards de projetos
    function generateProjectCards() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !portfolioConfig.projects) return;
        
        portfolioConfig.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const imageContainer = document.createElement('div');
            imageContainer.className = 'project-image';
            
            // Verificar se o projeto tem uma imagem definida
            if (project.image) {
                const img = document.createElement('img');
                img.src = project.image;
                img.alt = project.title;
                imageContainer.appendChild(img);
            } else {
                // Criar um elemento visual representativo para o projeto (fallback)
                const projectVisual = document.createElement('div');
                projectVisual.style.width = '100%';
                projectVisual.style.height = '100%';
                projectVisual.style.display = 'flex';
                projectVisual.style.justifyContent = 'center';
                projectVisual.style.alignItems = 'center';
                projectVisual.style.backgroundColor = getRandomColor(project.title);
                projectVisual.style.color = '#fff';
                projectVisual.style.fontSize = '2rem';
                projectVisual.style.fontWeight = 'bold';
                projectVisual.textContent = project.title.charAt(0);
                imageContainer.appendChild(projectVisual);
            }
            
            card.appendChild(imageContainer);
            
            const content = document.createElement('div');
            content.className = 'project-content';
            
            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = project.title;
            content.appendChild(title);
            
            const description = document.createElement('p');
            description.className = 'project-description';
            description.textContent = project.description;
            content.appendChild(description);
            
            const tools = document.createElement('div');
            tools.className = 'project-tools';
            
            project.tools.forEach(tool => {
                const toolSpan = document.createElement('span');
                toolSpan.className = 'project-tool';
                toolSpan.textContent = tool;
                tools.appendChild(toolSpan);
            });
            
            content.appendChild(tools);
            
            const links = document.createElement('div');
            links.className = 'project-links';
            
            project.links.forEach(link => {
                const a = document.createElement('a');
                a.className = 'project-link';
                a.href = link.url;
                a.target = '_blank';
                a.textContent = link.text;
                links.appendChild(a);
            });
            
            content.appendChild(links);
            card.appendChild(content);
            
            // Adicionar evento de clique para mostrar detalhes
            card.addEventListener('click', function() {
                showProjectDetails(project);
            });
            
            projectsGrid.appendChild(card);
        });
    }
    
    // Função para mostrar detalhes do projeto
    function showProjectDetails(project) {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        
        let imageHtml = '';
        if (project.image) {
            imageHtml = `<img src="${project.image}" alt="${project.title}" class="modal-image">`;
        }
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${project.detailTitle}</h2>
                ${imageHtml}
                <p>${project.detailContent}</p>
                <div class="modal-tools">
                    ${project.tools.map(tool => `<span class="project-tool">${tool}</span>`).join('')}
                </div>
                <div class="modal-links">
                    ${project.links.map(link => `<a href="${link.url}" target="_blank" class="btn">${link.text}</a>`).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Fechar modal ao clicar no X
        modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // Fechar modal ao clicar fora do conteúdo
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    // Função para gerar cards de habilidades
    function generateSkillCards() {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer || !portfolioConfig.skills || !portfolioConfig.skills.list) return;
        
        portfolioConfig.skills.list.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            
            const icon = document.createElement('div');
            icon.className = 'skill-icon';
            // Usar ícones do Font Awesome baseados na habilidade
            let iconClass = 'fas fa-code';
            
            if (skill.toLowerCase().includes('html') || skill.toLowerCase().includes('css')) {
                iconClass = 'fab fa-html5';
            } else if (skill.toLowerCase().includes('javascript')) {
                iconClass = 'fab fa-js';
            } else if (skill.toLowerCase().includes('flutter')) {
                iconClass = 'fab fa-android';
            } else if (skill.toLowerCase().includes('dart')) {
                iconClass = 'fas fa-bullseye';
            } else if (skill.toLowerCase().includes('android')) {
                iconClass = 'fab fa-android';
            } else if (skill.toLowerCase().includes('java')) {
                iconClass = 'fab fa-java';
            } else if (skill.toLowerCase().includes('python')) {
                iconClass = 'fab fa-python';
            } else if (skill.toLowerCase().includes('firebase')) {
                iconClass = 'fas fa-fire';
            } else if (skill.toLowerCase().includes('sql')) {
                iconClass = 'fas fa-database';
            }
            
            icon.innerHTML = `<i class="${iconClass}"></i>`;
            card.appendChild(icon);
            
            const name = document.createElement('div');
            name.className = 'skill-name';
            name.textContent = skill;
            card.appendChild(name);
            
            skillsContainer.appendChild(card);
        });
    }
    
    // Função para gerar links de contato
    function generateContactLinks() {
        const contactLinks = document.getElementById('contact-links');
        if (!contactLinks || !portfolioConfig.contact) return;
        
        const contactInfo = portfolioConfig.contact;
        
        // Email
        if (contactInfo.email) {
            const link = createContactLink(
                contactInfo.email,
                'mailto:' + contactInfo.email,
                'fa-envelope',
                'Email'
            );
            contactLinks.appendChild(link);
        }
        
        // GitHub
        if (contactInfo.github) {
            const link = createContactLink(
                'GitHub',
                contactInfo.github,
                'fa-github',
                'GitHub'
            );
            contactLinks.appendChild(link);
        }
        
        // LinkedIn
        if (contactInfo.linkedin) {
            const link = createContactLink(
                'LinkedIn',
                contactInfo.linkedin,
                'fa-linkedin',
                'LinkedIn'
            );
            contactLinks.appendChild(link);
        }
        
        // Instagram
        if (contactInfo.instagram) {
            const link = createContactLink(
                'Instagram',
                contactInfo.instagram,
                'fa-instagram',
                'Instagram'
            );
            contactLinks.appendChild(link);
        }
        
        // WhatsApp
        if (contactInfo.whatsapp) {
            const link = createContactLink(
                'WhatsApp',
                contactInfo.whatsapp,
                'fa-whatsapp',
                'WhatsApp'
            );
            contactLinks.appendChild(link);
        }
    }
    
    // Função auxiliar para criar link de contato
    function createContactLink(text, href, iconClass, ariaLabel) {
        const link = document.createElement('a');
        link.className = 'contact-link';
        link.href = href;
        link.target = '_blank';
        link.setAttribute('aria-label', ariaLabel);
        
        const icon = document.createElement('div');
        icon.className = 'contact-icon';
        icon.innerHTML = `<i class="fab ${iconClass}"></i>`;
        
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        
        link.appendChild(icon);
        link.appendChild(textSpan);
        
        return link;
    }
    
    // Configurar event listeners
    function setupEventListeners() {
        // Toggle do menu mobile
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
        
        // Links de navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Fechar menu mobile se estiver aberto
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (menuToggle) menuToggle.classList.remove('active');
                    }
                    
                    // Scroll suave
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Botão de alternância para o modo Gameboy
        const switchButton = document.getElementById('mode-switch-button');
        if (switchButton) {
            switchButton.addEventListener('click', function() {
                // Salvar o estado atual para uso posterior
                const currentState = {
                    section: getCurrentSection()
                };
                
                // Salvar o estado em localStorage para recuperação na página Gameboy
                localStorage.setItem('standardState', JSON.stringify(currentState));
                
                // Iniciar animação de transição
                startTransitionAnimation();
                
                // Redirecionar para a página Gameboy após a animação
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 600);
            });
        }
        
        // Observador de interseção para animar elementos quando entram na viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section-title, .about-content, .projects-grid, .skills-container, .contact-content').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Função para obter a seção atual
    function getCurrentSection() {
        const sections = ['about', 'projects', 'skills', 'contact', 'snake'];
        let currentSection = 'about';
        let minDistance = Infinity;
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const distance = Math.abs(rect.top);
                if (distance < minDistance) {
                    minDistance = distance;
                    currentSection = section;
                }
            }
        });
        
        return currentSection;
    }
    
    // Função para iniciar a animação de transição
    function startTransitionAnimation() {
        // Criar overlay para a animação
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = '#081820';
        overlay.style.zIndex = '10000';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.6s ease';
        
        document.body.appendChild(overlay);
        
        // Iniciar animação de fade
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
    }
    
    // Função para animar elementos na entrada
    function animateElements() {
        // Animar elementos do hero
        document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }
    
    // Função para configurar o jogo Snake
    function setupSnakeGame() {
        const snakeSection = document.getElementById('snake');
        const snakeLink = document.querySelector('a[href="#snake"]');
        
        if (snakeLink && snakeSection) {
            snakeLink.addEventListener('click', function() {
                snakeSection.style.display = 'block';
                initSnakeGame();
            });
        }
    }
    
    // Função para inicializar o jogo Snake
    function initSnakeGame() {
        const canvas = document.getElementById('snake-canvas-standard');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const gridSize = 10;
        const gridWidth = canvas.width / gridSize;
        const gridHeight = canvas.height / gridSize;
        
        let snake = [{ x: 10, y: 10 }];
        let food = { x: 15, y: 15 };
        let direction = 'right';
        let score = 0;
        let gameInterval;
        let gameActive = false;
        
        const startBtn = document.getElementById('snake-start-btn');
        const scoreDisplay = document.getElementById('snake-score');
        
        if (startBtn) {
            startBtn.addEventListener('click', toggleGame);
        }
        
        function toggleGame() {
            if (gameActive) {
                stopGame();
                startBtn.textContent = 'Iniciar Jogo';
            } else {
                startGame();
                startBtn.textContent = 'Pausar Jogo';
            }
        }
        
        function startGame() {
            if (gameActive) return;
            
            // Resetar jogo
            snake = [{ x: 10, y: 10 }];
            direction = 'right';
            score = 0;
            updateScore();
            placeFood();
            
            gameActive = true;
            gameInterval = setInterval(gameLoop, 100);
            
            // Configurar controles
            document.addEventListener('keydown', handleKeyPress);
        }
        
        function stopGame() {
            if (!gameActive) return;
            
            gameActive = false;
            clearInterval(gameInterval);
            
            // Remover controles
            document.removeEventListener('keydown', handleKeyPress);
        }
        
        function gameLoop() {
            // Mover cobra
            const head = { ...snake[0] };
            
            switch (direction) {
                case 'up': head.y--; break;
                case 'down': head.y++; break;
                case 'left': head.x--; break;
                case 'right': head.x++; break;
            }
            
            // Verificar colisão com paredes
            if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
                gameOver();
                return;
            }
            
            // Verificar colisão com o próprio corpo
            for (let i = 0; i < snake.length; i++) {
                if (snake[i].x === head.x && snake[i].y === head.y) {
                    gameOver();
                    return;
                }
            }
            
            // Verificar se comeu a comida
            if (head.x === food.x && head.y === food.y) {
                // Aumentar pontuação
                score += 10;
                updateScore();
                
                // Gerar nova comida
                placeFood();
            } else {
                // Remover a cauda se não comeu
                snake.pop();
            }
            
            // Adicionar nova cabeça
            snake.unshift(head);
            
            // Desenhar jogo
            drawGame();
        }
        
        function drawGame() {
            // Limpar canvas
            ctx.fillStyle = '#e0f8d0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Desenhar cobra
            ctx.fillStyle = '#081820';
            snake.forEach(segment => {
                ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
            });
            
            // Desenhar comida
            ctx.fillStyle = '#9b2256';
            ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
            
            // Desenhar borda
            ctx.strokeStyle = '#9bbc0f';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
        
        function placeFood() {
            food = {
                x: Math.floor(Math.random() * gridWidth),
                y: Math.floor(Math.random() * gridHeight)
            };
            
            // Verificar se a comida não está sobre a cobra
            for (let i = 0; i < snake.length; i++) {
                if (snake[i].x === food.x && snake[i].y === food.y) {
                    placeFood(); // Tentar novamente
                    return;
                }
            }
        }
        
        function handleKeyPress(e) {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'down') direction = 'up';
                    break;
                case 'ArrowDown':
                    if (direction !== 'up') direction = 'down';
                    break;
                case 'ArrowLeft':
                    if (direction !== 'right') direction = 'left';
                    break;
                case 'ArrowRight':
                    if (direction !== 'left') direction = 'right';
                    break;
            }
        }
        
        function gameOver() {
            stopGame();
            startBtn.textContent = 'Reiniciar Jogo';
        }
        
        function updateScore() {
            if (scoreDisplay) {
                scoreDisplay.textContent = `Pontuação: ${score}`;
            }
        }
        
        // Inicializar o jogo
        drawGame();
    }
    
    // Função para gerar cor aleatória baseada em string
    function getRandomColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        const colors = [
            '#4CAF50', '#2196F3', '#9C27B0', '#FF5722', '#607D8B',
            '#3F51B5', '#009688', '#FFC107', '#795548', '#E91E63'
        ];
        
        return colors[Math.abs(hash) % colors.length];
    }
    
    // Verificar se há um estado salvo do modo Gameboy
    const savedState = localStorage.getItem('gameboyState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            // Navegar para a seção correspondente após um breve delay
            if (state.screen && ['about', 'projects', 'skills', 'contact'].includes(state.screen)) {
                setTimeout(() => {
                    const section = document.getElementById(state.screen);
                    if (section) {
                        window.scrollTo({
                            top: section.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }, 1000);
            }
        } catch (e) {
            console.error('Erro ao processar estado salvo:', e);
        }
    }
});
