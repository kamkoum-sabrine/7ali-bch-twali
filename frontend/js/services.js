document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('recipe');

    fetch('http://localhost:8080/recipe/approuved')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                // Créer un div de membre d'équipe avec les classes spécifiées
                const recipeCardDiv = createRecipeCardDiv(item);
                // Ajouter le div de membre d'équipe au conteneur parent
                appContainer.appendChild(recipeCardDiv);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });

    const teamContainer = document.getElementById('team');

    fetch('http://localhost:8080/chefs/')
        .then(response => response.json())
        .then(data => {
            // Parcourir les données récupérées
            data.forEach(item => {
                // Créer un div de membre d'équipe avec les classes spécifiées
                const teamCardDiv = createTeamCardDiv(item);
                // Ajouter le div de membre d'équipe au conteneur parent
                teamContainer.appendChild(teamCardDiv);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données:', error);
        });
});

function createRecipeCardDiv(item) {
    const recipeCardDiv = document.createElement('div');
    recipeCardDiv.classList.add('col-md-4');

    const recipeCardContent = `
        <div class="team-card mb-5">
            <img class="img-fluid" height="450px" width="350px" src="${item.image}">
            <div class="team-desc">
                <h4 class="mb-0">${item.title}</h4>
                <p class="mb-1">${item.chef.firstname} ${item.chef.lastname}</p>
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

    recipeCardDiv.innerHTML = recipeCardContent;
    return recipeCardDiv;
}


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
