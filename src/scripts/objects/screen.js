const screen = {
    userProfile: document.querySelector('.profile-data'),
    userEvents: document.querySelector('.user-events'), 

    renderUser(user) {
        this.userProfile.innerHTML = 
            `<div class="info">
                <img src="${user.avatarUrl}" alt="foto de perfil do usuário"/>
                <div class="data">
                    <h1>${user.name ?? 'Usuário não possui nome cadastrado 😰'}</h1>
                    <p>${user.bio ?? 'Usuário não possui bio cadastrado 😰'}</p>
                    <p>followers: ${user.followers}</p>
                    <p>following: ${user.following}</p>
                </div>
            </div>`;

            let repositoriesItems = '';
            if (Array.isArray(user.repositories) && user.repositories.length > 0) { // Verificação adicionada
                user.repositories.forEach(repo => {
                    repositoriesItems += `<li><div class="repo-container"><a href="${repo.html_url}" target="_blank">${repo.name} <div class="repo-info"> <p>🍴 ${repo.forks}</p> <p>⭐${repo.stars}</p> <p>👀${repo.watchers}</p> <p>👨‍💻${repo.language}</p>  </div> </div></a></li>`;
                });
            } else {
                repositoriesItems = "<li>O usuário não possui repositórios.</li>";
            }
        
            if (repositoriesItems) {
                this.userProfile.innerHTML += 
                `<div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItems}</ul>
                </div>`;
            }
        },

    renderEvents(events) {
        if (!this.userEvents) {
            console.error("Elemento userEvents não encontrado!");
            return;
        }

        this.userEvents.innerHTML = ''; 

        if (!events || events.length === 0) {
            this.userEvents.innerHTML += "<h3>Não há eventos para mostrar</h3>";
            return;
        }

        let eventsItems = '';
        events.forEach(event => {
            const message = event.type === "CreateEvent" ? "Não possui mensagem" : event.message || "não possui mensagem";
            eventsItems += `<li><p>${event.repoName} <a class="message">-${message}</a></p></li>`;
        });

        this.userEvents.innerHTML += 
            `<h2>Eventos</h2>
             <ul>${eventsItems}</ul>`;
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
};

export { screen };
