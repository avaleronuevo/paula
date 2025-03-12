function playMusic() {
    var audio = document.getElementById("audio");
    audio.play();
}

// Función para generar imágenes flotantes
function generateFloatingImages() {
    const container = document.getElementById("floating-container");
    const numImages = 6; // Número de imágenes flotantes
    const imageSources = ["agus.jpeg", "diego1.jpeg", "diego2.jpeg", "diegopaula.jpeg", "diegopaula2.jpg", "paula1.jpeg"]; // Agrega más imágenes si quieres

    for (let i = 0; i < numImages; i++) {
        let img = document.createElement("img");
        img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
        img.classList.add("floating-image");

        // Posición inicial aleatoria dentro de la pantalla
        img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        img.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

        // Variables CSS para animación
        img.style.setProperty("--x-move", `${(Math.random() - 0.5) * 400}px`);
        img.style.setProperty("--y-move", `${(Math.random() - 0.5) * 400}px`);
        img.style.setProperty("--rotation", `${(Math.random() - 0.5) * 360}deg`);

        // Tamaño aleatorio
        const size = Math.random() * 400 + 100; // Tamaño entre 100px y 500px
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;

        container.appendChild(img);
    }
}

// Llamamos a la función al cargar la página
window.onload = function() {
    generateFloatingImages();
    setInterval(generateFloatingImages, 5000); // Generar nuevas imágenes cada 5 segundos
};