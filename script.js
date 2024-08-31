document.addEventListener('DOMContentLoaded', function() {
    // Array de imagens para o jumbotron
    const images = [
        './IMG/banner01.png',
        './IMG/banner02.png',
        './IMG/banner03.png',
        './IMG/banner04.png'
    ];

    let currentIndex = 0; // Índice da imagem atual
    const jumbotron = document.querySelector('#jumbotron');

    function changeBackgroundImage() {
        if (jumbotron) {
            // Altera a imagem de fundo do jumbotron
            jumbotron.style.backgroundImage = `url(${images[currentIndex]})`;
            // Atualiza o índice da imagem
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            console.error('Elemento com id "jumbotron" não encontrado.');
        }
    }

    // Inicializa com a primeira imagem
    changeBackgroundImage();
    // Muda a imagem a cada 5 segundos
    setInterval(changeBackgroundImage, 5000);

    // Função para mudar a cor do título
    function changeTitleColor(color) {
        const title = document.querySelector('.title-banner');
        if (title) {
            title.style.color = color;
        } else {
            console.error('Elemento com a classe "title-banner" não encontrado.');
        }
    }

    // Adiciona eventos de clique aos botões
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            changeTitleColor(color);
        });
    });
});
