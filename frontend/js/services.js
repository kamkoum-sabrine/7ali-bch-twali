
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8080/recipe')
        .then(response => response.json())
        .then(data => {
            // Récupérer le conteneur parent où nous allons ajouter les éléments
            const appContainer = document.getElementById('recipe');

            // Parcourir les données récupérées
            data.forEach(item => {
                // Créer un élément div avec les classes spécifiées
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('col-xl-4', 'col-lg-4', 'col-md-6', 'mb-4');

                // Créer le contenu interne de la recette
                const recipeContent = `
                <div class="single_recepie text-center">
                    <div class="recepie_thumb">
                        <img height="220px" width="200px" src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                </div>
            `;

                // Injecter le contenu de la recette dans le div créé
                recipeDiv.innerHTML = recipeContent;

                // Ajouter le div de la recette au conteneur parent
                appContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });
});