import Formulaire from "./formulaire.js";


// Ajout d'une action lorsqu'on clique sur le bouton vérifier -> affichage d'un récapitulatif 

const ids_formulaires = ['formulaire_nom', 'formulaire_commentaire', 'formulaire_HTML', 'formulaire_javascript'];

for (const id of ids_formulaires) {
    const Formulaire_id = new Formulaire(id);
    Formulaire_id.formulaireHtml.addEventListener('submit', (event) => {
    event.preventDefault();
    Formulaire_id.getAwnsers();
    Formulaire_id.affAwnsers();
    console.log(Formulaire_id.awnser);
});
}

// Façade pour charger l'iframe youtube en différé

// Sélectionne tous les éléments avec la classe "video-container"
const videoContainers = document.querySelectorAll('.video-container'); 
// Parcourt chaque élément sélectionné
videoContainers.forEach(container => { 
// Ajoute un écouteur d'événement au clic sur chaque conteneur
container.addEventListener('click', () => { 
// Récupère l'URL de la vidéo YouTube à partir de l'attribut "data-video-url" du conteneur
const videoUrl = container.getAttribute('data-video-url'); 
// Crée un élément <iframe> pour afficher la vidéo
const iframe = document.createElement('iframe'); 
// Définit l'URL de la vidéo en ajoutant "?autoplay=1" pour démarrer automatiquement la lecture
iframe.setAttribute('src', `${videoUrl}?autoplay=1`); 
// Définit les attributs de l'iframe pour la compatibilité et le style
iframe.setAttribute('frameborder', '0'); // Supprime la bordure autour de l'iframe
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'); 
// Ajoute les autorisations pour activer des fonctionnalités telles que l'accéléromètre, l'autoplay, etc.
iframe.setAttribute('allowfullscreen', 'true'); // Permet d'afficher la vidéo en plein écran
// Définit la taille de l'iframe pour qu'elle remplisse le conteneur
iframe.style.width = '100%'; 
iframe.style.height = '100%'; 
// Supprime tout le contenu existant du conteneur (vignette et bouton)
container.innerHTML = ''; 
// Ajoute l'iframe au conteneur pour afficher la vidéo
container.appendChild(iframe); 
    });
});


// Action lorsque le bouton "soummettre" est cliqué et lorsque le bouton "quitter la page est cliqué"

const envoyer = document.getElementById("envoi");

envoyer.addEventListener('click', () => {
  let validation = window.open(
    "Validation_formulaire.html", // URL de la page
    "_blank",           // Nom de la fenêtre
    "width=500,height=250"        // Options de la fenêtre
  );
  validation.addEventListener('load', () => {
    const bouton_fermer = validation.document.getElementById("ferme");
    bouton_fermer.addEventListener('click', () => {
      validation.close();
    })
  })
});

// Action pour enregistrer les données du formulaire de connections sous forme de cookies

// Fonction pour créer un cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Durée en jours
  const expires = "expires=" + date.toUTCString();
  const secure = "Secure"; // Ajout de l'option Secure
  document.cookie = `${name}=${value}; ${expires}; ${secure}`; // path=; domain= ; secure;
}

// Gestion du clic sur le bouton "Connexion"
document.getElementById("connexion").addEventListener("click", function () {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const email = document.getElementById("email").value;

  // Enregistrer les informations sous forme de cookies
  setCookie("nom", nom, 7); // Durée de 7 jours
  setCookie("prenom", prenom, 7);
  setCookie("email", email, 7);

  alert("Informations enregistrées sous forme de cookies !");
  console.log(document.cookie);
});





