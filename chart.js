let ctx = document.getElementById("#graphique");
new Chart(ctx, {
            type: "pie",
            data: {
                labels: ['Paris', 'New-York', 'Madrid', 'Moscou', 'Berlin', 'Auckland'],
                datasets: [{
                  label: 'Nombre d’habitants',
                  data: [12, 19, 7, 5, 2, 3],
                  backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
              }]
            },
            options: {
                plugins: {
                   title: {
                    display: true,
                    text: 'Mon premier graphique avec Chart Js'
                 },
                },
                legend: {
                    position: 'bottom'
                }

}
});

const dessin_canva = document.getElementById("dessin_canva");
const dessin_2d_canva = dessin_canva.getContext('2d'); // Correction du nom de méthode

// Commencer un chemin
dessin_2d_canva.beginPath();
dessin_2d_canva.moveTo(25, 25); // Point de départ
dessin_2d_canva.lineTo(50, 0); // Dessine une ligne jusqu'à ce point
dessin_2d_canva.lineTo(0, 0); // Ajoute une autre ligne
dessin_2d_canva.closePath(); // Ferme le chemin (facultatif)
dessin_2d_canva.fill();

// Dessiner le chemin
dessin_2d_canva.stroke(); // Trace les lignes

/* Quelques commandes de base :
    beginPath() : ouvre un nouveau chemin.

    moveTo(x, y) : ajoute un nouveau point au chemin sans le connecter au précédent point.

    lineTo(x, y) : ajoute un nouveau point au chemin en le connectant au précédent point sous forme de ligne. (Crée donc un vecteur qui connecte le point précédent et le nouveau point).

    closePath() : connecte le premier et le dernier point en ligne.

    stroke()  : dessine les contours des chemins (soit les connexions entre les points).

    fill() : dessine l’intérieur des chemins (soit l’espace créé par la connexion de plusieurs points).
    
    fillRect(),strokeRect(),clearRect() : ces méthodes permettent respectivement de dessiner un rectangle rempli, les contours d’un rectangle, et d’effacer une partie du Canvas sous forme de rectangle.
    Elles prennent toutes les mêmes paramètres x, y, width et height qui correspondent aux coordonnées ainsi qu’aux dimensions du rectangle.

    rect() : fonctionne comme les méthodes précédentes, mais au lieu de dessiner un rectangle, l’ajoute sous forme de chemin au Path actuel.

    fillText(), strokeText() : respectivement dessine du texte et dessine les contours du texte grâce aux paramètres text, x et y qui correspondent respectivement au texte et à ses coordonnées.

    arc() : ajoute un cercle ou un arc sous forme de chemin au Path actuel grâce aux paramètres suivants : x, y, radius, startAngle, endAngle qui
    correspondent respectivement aux coordonnées du centre, au rayon du cercle, et les mesures de l’angle de l’arc en radians (pour un cercle, startAngle et endAngle
    doivent donc avoir une différence de 2 * pi). Cette méthode possède aussi un 5e paramètre optionnel, counterclockwise, qui détermine la direction de dessin de l’arc.

    strokeStyle : couleur du contour du dessin.

    fillStyle : couleur de remplissage du dessin.

    shadowOffsetX : distance de décalage de l’ombre du trait en X.

    shadowOffsetY : distance de décalage de l’ombre du trait en Y.

    shadowBlur : niveau de flou de l’ombre.

    shadowColor : couleur de l’ombre.

    font : paramètre de la police de texte.
*/

// Dessiner un graphique statistique

const graphique_points = document.getElementById("graphique_point");
const graphique_point = graphique_points.getContext("2d");

const createAxeX = (marks, scale, unit, label) => {
    graphique_point.beginPath();
    graphique_point.moveTo(50, graphique_point.canvas.height - 50);
    graphique_point.lineTo(graphique_point.canvas.width - 50, graphique_point.canvas.height - 50);
    graphique_point.stroke();
    if (label) {
        graphique_point.textAlign = "center";
        graphique_point.fillText(label, graphique_point.canvas.width / 2, graphique_point.canvas.height - 10);
    }
    for (var i = 0; i <= marks; i += 1) {
        const distance = (graphique_point.canvas.width - 100) / marks;
        graphique_point.beginPath();
        graphique_point.moveTo(50 + i * distance, graphique_point.canvas.height - 50);
        graphique_point.lineTo(50 + i * distance, graphique_point.canvas.height - 45);
        graphique_point.stroke();
        graphique_point.textAlign = "center";
        if (unit) graphique_point.fillText(scale * i + unit, 50 + i * distance, graphique_point.canvas.height - 35);
        else graphique_point.fillText(scale * i, 50 + i * distance, graphique_point.canvas.height - 35);        
    }
}

const createAxeY = (marks, scale, unit, label) => {
    graphique_point.beginPath();
    graphique_point.moveTo(50, 50);
    graphique_point.lineTo(50, graphique_point.canvas.height - 50);
    graphique_point.stroke();
    if (label) {
        graphique_point.textAlign = "center";
        graphique_point.fillText(label, 20, graphique_point.canvas.height / 2 - 10);
    }
    for (var i = 0; i <= marks; i +=1) {
        const distance = (graphique_point.canvas.height - 100) / marks;
        graphique_point.beginPath();
        graphique_point.moveTo(50, graphique_point.canvas.height - 50 - i * distance);
        graphique_point.lineTo(45, graphique_point.canvas.height - 50 - i * distance);
        graphique_point.stroke();
        graphique_point.textAlign = "center";
        if (unit) graphique_point.fillText(scale * i + unit, 35, graphique_point.canvas.height - 50 - i * distance);
        else graphique_point.fillText(scale * i, 40, graphique_point.canvas.height - 50 - i * distance);
    }
}

const generatePoints = (size, x_min, x_max, y_min, y_max, color) => {
    const points = []; 
    for (var i = 0; i < size; i += 1) {
        points.push({
            x: Math.random() * (x_max - x_min) + x_min,
            y: Math.random() * (y_max - y_min) + y_min,
            color: color 
        });
}
return points;   
}

const placePoints = (points, marks_x, scale_x, marks_y, scale_y) => {
    const transform_x = marks_x * scale_x / (graphique_point.canvas.width - 100);
    const transform_y = marks_y * scale_y / (graphique_point.canvas.height - 100);
    points.forEach(point => {
        const x = 50 + point.x / transform_x;
        const y = graphique_point.canvas.height - 50 - point.y / transform_y;
        graphique_point.beginPath();
        graphique_point.arc(x, y, 5, 0, 2 * Math.PI);
        graphique_point.fillStyle = point.color;
        graphique_point.fill();
    });
    
}

createAxeX(10, 100, "m", "Données");
createAxeY(10, 100, "m", "Données");
const points = generatePoints(50, 0, 1000, 0, 1000, "red");
placePoints(points, 10, 100, 10, 100);

