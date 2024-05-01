
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

document.addEventListener('DOMContentLoaded', () => {
    const teamContainer = document.getElementById('team');

    fetch('http://localhost:8080/chefs/')
        .then(response => response.json())
        .then(data => {
            // Parcourir les données récupérées
            data.forEach(item => {
                // Créer un div de membre d'équipe avec les classes spécifiées
                console.log(item)
                const teamCardDiv = createTeamCardDiv(item);
                teamContainer.appendChild(teamCardDiv);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });
});

function createTeamCardDiv(item) {
    const teamCardDiv = document.createElement('div');
    teamCardDiv.classList.add('col-md-4');

    const teamCardContent = `
        <div class="team-card mb-5">
            <img class="img-fluid" height="450px" width="350px" src="${item.image}">
            <div class="team-desc">
                <h4 class="mb-0">${item.firstname} ${item.lastname}</h4>
                <p class="mb-1">Chef</p>
                <ul class="list-inline mb-0 team-social-links">
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `;

    teamCardDiv.innerHTML = teamCardContent;
    return teamCardDiv;
}
