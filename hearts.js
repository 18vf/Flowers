const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Variar colores
  const emojis = ["❤️", "💛", "💕"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Posición y tamaño aleatorios
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Generar corazones cada 800ms
setInterval(createHeart, 800);
