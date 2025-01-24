import { restartGame } from "./game.js";

/* ------------------- Gestion du thème avec Pitch Audio ------------------- */
export function initThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle button");
  const body = document.body;

  // Variables pour la gestion audio
  const audioElement = document.getElementById("background-music");
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const track = audioContext.createMediaElementSource(audioElement);
  const playbackRateControl = audioContext.createGain(); // Contrôle de gain pour simuler le pitch
  
  // Connecter l'audio à la sortie
  track.connect(playbackRateControl).connect(audioContext.destination);

  // Fonction pour appliquer un thème
  const applyTheme = (theme) => {
    const isDarkMode = theme === "dark-mode";
    body.classList.toggle("dark-mode", isDarkMode);
    toggleButton.classList.toggle("light-mode", isDarkMode);

    // Ajuster le playback rate et le pitch
    if (isDarkMode) {
      audioElement.playbackRate = 0.5; // Ralentir la vitesse
      playbackRateControl.gain.value = 0.5; // Réduire le gain pour un pitch grave
    } else {
      audioElement.playbackRate = 1.0; // Vitesse normale
      playbackRateControl.gain.value = 1.0; // Pitch normal
    }
  };

  // Récupération du thème stocké et application
  const storedTheme = localStorage.getItem("theme") || "light-mode";
  applyTheme(storedTheme);

  // Gestion du clic sur le bouton de thème
  toggleButton.addEventListener("click", function () {
    const newTheme = body.classList.contains("dark-mode")
      ? "light-mode"
      : "dark-mode";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);

    // Exemple d'appel à une fonction externe
    restartGame();
  });

  // Lancer la lecture de l'audio
  audioElement.play().catch((error) => {
    console.error("Erreur lors de la lecture de l'audio :", error);
  });
}



