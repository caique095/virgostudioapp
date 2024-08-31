document.addEventListener('DOMContentLoaded', function() {
    // Array de cores para o jumbotron
    const colors = [
        '#007bff', // Azul
        '#28a745', // Verde
        '#dc3545', // Vermelho
        '#6610f2'  // Roxo
    ];

    let currentIndex = 0; // Índice da cor atual
    const jumbotron = document.querySelector('#jumbotron');

    function changeColor() {
        // Altera a cor de fundo do jumbotron
        jumbotron.style.backgroundColor = colors[currentIndex];
        // Atualiza o índice da cor
        currentIndex = (currentIndex + 1) % colors.length;
    }

    // Muda a cor a cada 1 segundo
    setInterval(changeColor, 1000);
});
