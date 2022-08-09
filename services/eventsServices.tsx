import { BASE_URL, PRIVATE_KEY,  PUBLIC_KEY,  ts,  hash } from "./marvelDBSrc"
import axios from "axios";

async function loadEventsByOrder(limit = 10, offset = 0) {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/events?orderBy=startDate&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`

    })
}

async function loadEventById(id:any) {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/events/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}

async function loadEventsComics(id:any) {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/events/${id}/comics?apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}



// /https://gateway.marvel.com:443/v1/public/events/3/comics?apikey=

export {
    loadEventsByOrder, 
    loadEventsComics,
    loadEventById

}
