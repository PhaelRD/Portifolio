// Script para adicionar o botão de alternância entre modos
document.addEventListener('DOMContentLoaded', function() {
    // Criar o botão de alternância
    const switchButton = document.createElement('div');
    switchButton.id = 'mode-switch-button';
    switchButton.title = 'Alternar para modo standard';
    
    // Estilizar o botão
    switchButton.style.position = 'fixed';
    switchButton.style.top = '20px';
    switchButton.style.right = '20px';
    switchButton.style.width = '50px';
    switchButton.style.height = '50px';
    switchButton.style.borderRadius = '50%';
    switchButton.style.backgroundColor = '#9bbc0f'; // Verde do GameBoy
    switchButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    switchButton.style.cursor = 'pointer';
    switchButton.style.zIndex = '9999';
    switchButton.style.display = 'flex';
    switchButton.style.justifyContent = 'center';
    switchButton.style.alignItems = 'center';
    switchButton.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    
    // Criar o ícone do botão (desktop)
    const switchIcon = document.createElement('div');
    switchIcon.style.width = '30px';
    switchIcon.style.height = '30px';
    switchIcon.style.position = 'relative';
    
    // Criar o monitor do ícone
    const monitor = document.createElement('div');
    monitor.style.position = 'absolute';
    monitor.style.top = '0';
    monitor.style.left = '0';
    monitor.style.width = '30px';
    monitor.style.height = '20px';
    monitor.style.backgroundColor = '#081820'; // Cor escura do GameBoy
    monitor.style.borderRadius = '2px 2px 0 0';
    
    // Criar a base do ícone
    const base = document.createElement('div');
    base.style.position = 'absolute';
    base.style.bottom = '0';
    base.style.left = '10px';
    base.style.width = '10px';
    base.style.height = '10px';
    base.style.backgroundColor = '#081820'; // Cor escura do GameBoy
    base.style.borderRadius = '0 0 2px 2px';
    
    // Adicionar partes do ícone ao ícone principal
    switchIcon.appendChild(monitor);
    switchIcon.appendChild(base);
    
    // Adicionar ícone ao botão
    switchButton.appendChild(switchIcon);
    
    // Adicionar efeito hover
    switchButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    switchButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Adicionar evento de clique
    switchButton.addEventListener('click', function() {
        // Reproduzir som de confirmação se disponível
        if (typeof playConfirmSound === 'function') {
            playConfirmSound();
        }
        
        // Salvar o estado atual para uso posterior
        const currentState = {
            screen: currentScreen,
            menuIndex: menuIndex,
            projectIndex: projectIndex,
            isSnakeMode: isSnakeMode
        };
        
        // Salvar o estado em localStorage para recuperação na página standard
        localStorage.setItem('gameboyState', JSON.stringify(currentState));
        
        // Redirecionar para a página standard
        window.location.href = 'standard.html';
    });
    
    // Adicionar o botão ao corpo do documento
    document.body.appendChild(switchButton);
});
