import AuthContent from '../components/Auth/AuthContent';
import { useState, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../utils/auth'
import { Alert } from 'react-native';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticateUser } from '../store/redux/userAuthSlice';

function LoginScreen() {

  interface IloginProps {
    email: any,
    password: any
  } 

  const [ isRegistering, setIsRegistering] = useState(false)

  const dispatch = useDispatch()

  async function loginHandler({ email, password}:IloginProps) {
    try {
      setIsRegistering(true)
      const token = await login(email, password)
      dispatch(authenticateUser(token))

    } catch (error) {
      Alert.alert("Authentication failled, please check your credentials")
      setIsRegistering(false)
    }

  }

  if(isRegistering) {
    return <LoadingOverlay message="Loggin in"/>
  }

  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
}

export default LoginScreen;

function SET_AUTHENTICATED(): any {
  throw new Error('Function not implemented.');
}

