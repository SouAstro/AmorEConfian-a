// Função para fazer o nome "Emilly" pulsar quando o mouse passar por cima
const nameElement = document.querySelector('.highlight-name');

nameElement.addEventListener('mouseenter', () => {
    nameElement.classList.add('pulse');
});

nameElement.addEventListener('mouseleave', () => {
    nameElement.classList.remove('pulse');
});

// Função para criar partículas do coração
const heartElement = document.querySelector('.heart');

heartElement.addEventListener('click', (event) => {
    createParticles(event);
});

// Função que cria partículas do coração
function createParticles(event) {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    document.body.appendChild(particlesContainer);

    const particleCount = 20; // Número de partículas

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        // Define uma posição aleatória para cada partícula
        particle.style.left = `${event.clientX - 10 + Math.random() * 20}px`;
        particle.style.top = `${event.clientY - 10 + Math.random() * 20}px`;

        // Animação da partícula
        setTimeout(() => {
            particle.style.opacity = 0;
            particle.style.transform = `scale(0.5) translateY(-30px)`;
        }, 0);

        setTimeout(() => {
            particlesContainer.removeChild(particle);
        }, 1000); // Remove a partícula após 1 segundo
    }

    // Remove o container de partículas após todas as partículas saírem
    setTimeout(() => {
        document.body.removeChild(particlesContainer);
    }, 1200);
}
