import { IMarvelCharacter, IMarvelResponse, IMarvelCharacterProjection } from "../types"
import { BASE_URL, PRIVATE_KEY,  PUBLIC_KEY,  ts,  hash } from "./marvelDBSrc"
import axios from "axios";

async function loadCharacters() {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}

async function loadCharacterById(id:any) {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}



export {
    loadCharacters,
    loadCharacterById
}

