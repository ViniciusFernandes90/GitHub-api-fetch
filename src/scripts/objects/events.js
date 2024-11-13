import { getEvents } from "../services/events.js";

const events = {
    async getActualEvents(gitHubUser) {
        let filteredEvents = await getEvents(gitHubUser);

        let actualEvents = filteredEvents.map(event => {
            let message = "não possui mensagem"; 

            if (event.type === "PushEvent") {
                if (event.payload.commits && event.payload.commits.length > 0) {
                    message = event.payload.commits[0].message; 
                }
            } else if (event.type === "CreateEvent") {
                
                message = "não possui mensagem"; 
            }

            return {
                type: event.type,
                repoName: event.repo.name,
                message: message 
            };
        });

        return actualEvents;
    }
};


export { events };





