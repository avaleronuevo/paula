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

        // Posición inicial aleatoria
        img.style.left = `${Math.random() * 100}vw`;
        img.style.top = `${Math.random() * 100}vh`;

        // Variables CSS para animación
        img.style.setProperty("--x-move", `${(Math.random() - 0.5) * 200}px`);
        img.style.setProperty("--y-move", `${(Math.random() - 0.5) * 200}px`);
        img.style.setProperty("--rotation", `${(Math.random() - 0.5) * 360}deg`);

        container.appendChild(img);
    }
}

// Llamamos a la función al cargar la página
window.onload = function() {
    generateFloatingImages();
};