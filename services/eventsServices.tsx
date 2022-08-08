import { BASE_URL, PRIVATE_KEY,  PUBLIC_KEY,  ts,  hash } from "./marvelDBSrc"
import axios from "axios";

async function loadEvents() {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/events?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}

export {
    loadEvents
}
