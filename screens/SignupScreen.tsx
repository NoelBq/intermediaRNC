import AuthContent from '../components/Auth/AuthContent';
import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { registerUser } from '../utils/auth'
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useDispatch} from 'react-redux'

function SignupScreen({navigation}: {navigation: any}) {

  const [ isRegistering, setIsRegistering] = useState(false)

  const dispatch = useDispatch()

  interface ISignupProps {
    email: string,
    password: string
  }

  async function signInHandler({ email, password}:ISignupProps) {
    try {
      setIsRegistering(true)
      const token = await registerUser(email, password)
      setIsRegistering(false)
      Alert.alert('Registration Successfull','', [{text: 'Login', onPress:() => navigation.navigate('Login')}] )
      
    } catch (error) {
      console.error(error)
    }
  }

  if(isRegistering) {
    return <LoadingOverlay message="Creating user.."/>
  } 
  return <AuthContent isLogin={undefined} onAuthenticate={signInHandler} />;
}

export default SignupScreen;
function authenticateUser(token: void): any {
  throw new Error('Function not implemented.');
}

