window.onload = function() {
    setTimeout(() => {
        document.getElementById("mensaje").textContent = "¡Haz clic para continuar!";
        document.getElementById("texto").textContent = "Tu sorpresa está cerca...";
        document.getElementById("jesus").outerHTML = '<a href="final.html"><img src="final.png" alt="lo tenés" class="clickable"></a>';
    }, 5000); // Espera 3 segundos antes de cambiar el contenido
};
