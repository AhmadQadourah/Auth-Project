import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-Context';

function SignupScreen() {


const authCtx= useContext(AuthContext)

  const [isAuthenticating, setIsAuthenticating] = useState(false);

async function signUpHandler ({email,password}){
  setIsAuthenticating(true)
  try {
   const token = await createUser(email,password)
  authCtx.authenticate(token);

  } catch (error) {
    Alert.alert("Authentication Failed !", "Could not Create user");
    setIsAuthenticating (false)
  }
}

if (isAuthenticating){
  return <LoadingOverlay message='Creating User .... '/>
}


  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
