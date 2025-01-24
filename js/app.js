// Import des modules
import { initThemeToggle } from "./theme.js";
import { initMemoryGame } from "./game.js";
import { initConnect } from "./connect.js";
import { initProfil } from "./profil.js";
import { initUserList } from "./form.js";

// Au chargement du DOM, initialisation des modules
document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle(); // Initialisation du thème
  console.log("Thème entièrement chargé");
  initMemoryGame(); // Initialisation du jeu
  console.log("Jeu entièrement chargé");
  initConnect(); // Initialisation de la connection
  console.log("Connecteur entièrement chargé");
  initProfil(); // Initialisation de la page profil
  console.log("UserPage entièrement chargée");
  initUserList(); // Initialisation de la liste de joueurs
  console.log("UserList entièrement chargée");
});

// Sélectionner l'élément audio
const backgroundMusic = document.getElementById("background-music");

// Jouer la musique automatiquement au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
  backgroundMusic.play().catch((error) => {
    console.error("La musique n'a pas pu être lancée automatiquement :", error);
  });
});
