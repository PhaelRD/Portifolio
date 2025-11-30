# 🎮 Portfólio Interativo: Game Boy & Standard Mode

Um portfólio pessoal único que oferece duas experiências distintas de navegação: uma interface nostálgica e interativa baseada em um **Game Boy Color** (com som e cartuchos) e uma interface **Standard (Moderna)**, responsiva e profissional.

---

## ✨ Funcionalidades

O projeto é dividido em dois modos principais que compartilham os mesmos dados de configuração:

### 🕹️ Modo Game Boy (Retro)

* **Design em CSS Puro:** o console é desenhado inteiramente usando CSS (sem imagens estáticas do dispositivo).
* **Interatividade Total:** botões clicáveis (D-Pad, A, B, Start, Select) com efeitos sonoros 8-bit via Web Audio API.
* **Animações:** animação de "troca de fita" (cartucho) para alternar entre o modo Portfólio e o Jogo.
* **Snake Game:** jogo da cobrinha totalmente funcional embutido no console, usando Canvas API.
* **Navegação por Teclado:** suporte a setas e teclas (Z=A, X=B, Enter=Start).

### 💻 Modo Standard (Moderno)

* **Design Responsivo:** layout limpo e profissional para Mobile e Desktop.
* **Seções Completas:** Sobre, Projetos (cards interativos), Habilidades e Contato.
* **Modais de Detalhes:** clique nos projetos para ver descrições, ferramentas e imagens.
* **Snake Integrado:** o jogo da cobrinha também aparece como um "easter egg" na versão moderna.

### 🔄 Sistema de Alternância

* Botão flutuante persistente para alternar instantaneamente entre os modos "Gamer" e "Profissional".
* O estado da navegação é salvo para uma transição fluida entre modos.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — estrutura semântica.
* **CSS3** — variáveis (custom properties), Flexbox, Grid e CSS Shapes para desenhar o Game Boy.
* **JavaScript (ES6+)** — lógica, manipulação do DOM, Canvas API e Web Audio API.
* **Fontes:** `Press Start 2P` (Google Fonts) para visual retro e `Roboto` para o modo moderno.

---

## 🚀 Como Executar

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Abra o projeto:**

Basta abrir `index.html` em qualquer navegador moderno. Para evitar possíveis bloqueios CORS em alguns navegadores, recomendo rodar um servidor local (ex.: Live Server do VSCode):

```bash
# usando http-server (Node.js)
npm install -g http-server
http-server .
```

> Não é necessário backend. O projeto roda inteiramente no cliente.

---

## ⚙️ Configuração e Personalização

Todo o conteúdo do portfólio é dinâmico e centralizado em um único objeto de configuração. Não é preciso alterar o HTML para mudar textos ou projetos — edite apenas o arquivo `js/script.js`.

### Exemplo de `portfolioConfig`

```javascript
const portfolioConfig = {
  userName: "Seu Nome",
  title: "SEU PORTFOLIO",
  about: {
    title: "SOBRE",
    content: "Sua descrição aqui..."
  },
  skills: {
    title: "HABILIDADES",
    list: ["HTML", "CSS", "JS", "React", "Node"]
  },
  contact: {
    email: "seu@email.com",
    github: "https://github.com/seu-user"
  },
  projects: [
    {
      id: "projeto1",
      title: "Nome do Projeto",
      description: "Breve descrição.",
      detailContent: "Descrição longa para o modal...",
      tools: ["Ferramenta 1", "Ferramenta 2"],
      image: "img/standard/project1.jpg",
      links: [
        { text: "Ver Online", url: "https://..." }
      ]
    }
  ]
};
```

**Passos para personalizar:**

1. Abra `js/script.js` e localize `portfolioConfig`.
2. Atualize `userName`, `about.content`, `skills.list`, `contact` e `projects` conforme necessário.
3. Substitua imagens na pasta `img/` e atualize caminhos em `projects.image`.

---

## 🎮 Controles (Modo Game Boy)

Você pode usar o mouse para clicar nos botões do console ou o teclado:

| Ação                 | Tecla                       |
| -------------------- | --------------------------- |
| Mover / Navegar      | Setas direcionais (↑ ↓ ← →) |
| Botão A (Confirmar)  | Z                           |
| Botão B (Voltar)     | X                           |
| Start (Menu / Pausa) | Enter                       |
| Select               | Espaço                      |

---

## 📂 Estrutura de Pastas

```
/ (raiz)
├── index.html              # Entrada principal (Modo Game Boy)
├── standard.html           # Layout Moderno
├── css/
│   ├── style.css           # Estilos do Game Boy (pixel art)
│   └── standard/
│       └── style.css       # Estilos do Modo Moderno
├── js/
│   ├── script.js           # Lógica principal, configuração e Snake Game
│   ├── switcher.js         # Lógica do botão de alternância de modos
│   └── standard/
│       └── script.js       # Lógica específica do Modo Moderno
└── img/                    # Imagens de perfil, projetos e favicon
```
