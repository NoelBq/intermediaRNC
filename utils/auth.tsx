import axios from 'axios'

const API_KEY = 'AIzaSyAMsUatr0-sTQ5byKEw_F0D1OaUzJ4xZSQ'

async function authenticate(mode: string, email: any, password: any) {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response =  await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )
    const token = response.data.idToken
    return token
} 

export async function registerUser(email: string, password: string) {
   const token =  await authenticate("signUp", email, password)

}

export async function login(email: any, password: any) {
  const token = await authenticate("signInWithPassword", email, password)
  return token 
}   