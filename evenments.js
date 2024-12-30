import Formulaire from "./formulaire.js";

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

const envoyer = document.getElementById("envoi");

envoyer.addEventListener('click', () => {
  window.open("Validation_formulaire.html", "_blank");
});

const fermer = document.getElementById("ferme");

fermer.addEventListener('click', () => {
  window.close()
})




