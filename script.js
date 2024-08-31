document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS
    AOS.init({
        duration: 1200, // duração das animações em milissegundos
        easing: 'ease-in-out', // tipo de easing para as animações
    });

    // Array de imagens para o jumbotron
    const images = [
        './IMG/banner01.png',
        './IMG/banner02.png',
        './IMG/banner03.png'
    ];

    let currentIndex = 0; // Índice da imagem atual
    const jumbotron = document.querySelector('#jumbotron');

    function changeBackgroundImage() {
        if (jumbotron) {
            jumbotron.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            console.error('Elemento com id "jumbotron" não encontrado.');
        }
    }

    // Inicializa com a primeira imagem
    changeBackgroundImage();
    // Muda a imagem a cada 3 segundos
    setInterval(changeBackgroundImage, 3000);

    // Função para mudar a cor do título
    function changeTitleColor(color) {
        const title = document.querySelector('.title-banner');
        if (title) {
            title.style.color = color;
        } else {
            console.error('Elemento com a classe "title-banner" não encontrado.');
        }
    }

    // Evento de clique nos botões de cor
    document.querySelectorAll('.color-button').forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            changeTitleColor(color);
        });
    });

    // Alterna a classe "open" no botão do menu hamburger
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
        toggler.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    } else {
        console.error('Elemento com a classe "navbar-toggler" não encontrado.');
    }
});
