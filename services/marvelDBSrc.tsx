
import axios from "axios";
import CryptoJS from "react-native-crypto-js";
const PUBLIC_KEY = '3a783b25c80e1c44875356dd363f272d'
const PRIVATE_KEY = 'aa1141953df8c088f39a97de10008578e834580f'
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/';
const ts = Date.now()
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();


interface IMarvelProps {
    pathName: string
    params?: string
}


async function loadCharacters() {
    return  axios({
        method: 'GET',
        url:  `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    })
}

export {
    PRIVATE_KEY, 
    PUBLIC_KEY, 
    BASE_URL, 
    ts, 
    hash
}

export {
    loadCharacters
}


    