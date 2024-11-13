import { getUser } from "./services/user.js"
import { getReporsitories } from "./services/reporsitories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

import { events } from "./objects/events.js"



document.getElementById('btn-search').addEventListener('click', ()=>{
    const userName = document.getElementById('input-search').value
    if(validateEmptyImput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if(isEnterKeyPressed){
        getUserData(userName)
    }
})

function validateEmptyImput (userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome de usuário antes de buscar')
        return true
    }
}


async function getUserData(userName) {
    
    const userResponse = await getUser(userName);

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
    }

    const repositoriesResponse = await getReporsitories(userName);
    const actualEvents = await events.getActualEvents(userName);
    


    user.setRepositories(repositoriesResponse);
    user.setInfo(userResponse);

    screen.renderEvents(actualEvents);
    screen.renderUser(user);
}



