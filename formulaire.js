export default class Formulaire {
    // Définition du constructeur
    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id); // Trouver le formulaire par son id
        this.awnser = []; // Tableau pour stocker les réponses
    }

    // Méthode pour récupérer les réponses
    getAwnsers() {
        const formdata = new FormData(this.formulaireHtml); // Créer un FormData pour ce formulaire
        this.awnser = []; // Réinitialiser les réponses

        // Parcourir les données du formulaire
        formdata.forEach((value, key) => {
            if (value !== "") {
                this.awnser.push([key, value]); // Ajouter clé et valeur non vides
            }
        });

        return this.awnser; // Retourner les réponses
    }
    
    // Méthode pour afficher dans une alerte un récapitulatif des valeurs entrées dans le formulaire
    affAwnsers(){
        let recapitulatif = "Vous avez entré ces valeurs :\n\n";
        this.awnser.forEach(ligne => {
            recapitulatif += `${ligne[0]} : ${ligne[1]}\n`; // Utilisation des backticks pour l'interpolation
        });
        alert(recapitulatif);
    }
}



    