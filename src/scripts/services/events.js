import { baseUrl, baseQuantity } from "../variables.js";

async function getEvents(userName) {
    let response = await fetch(`${baseUrl}/${userName}/events?per_page=${baseQuantity}`);
    
    if (!response.ok) {
        throw new Error(`Erro ao buscar eventos: ${response.statusText}`);
    }

    let responseJson = await response.json();

   
    return responseJson.filter((event) => {
        return event.type === "PushEvent" || event.type === "CreateEvent";
    });
}

export { getEvents };
