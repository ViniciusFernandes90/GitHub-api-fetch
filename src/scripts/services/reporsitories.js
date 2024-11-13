import { baseUrl, baseQuantity } from "../variables.js"


async function getReporsitories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${baseQuantity}`)
    return await response.json()
}

export{getReporsitories}