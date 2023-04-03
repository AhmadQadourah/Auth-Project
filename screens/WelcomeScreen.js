import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-Context';



function WelcomeScreen() {

  const [message, setMessage] = useState('')


  const authCtx= useContext(AuthContext)
  const token = authCtx.token

useEffect(() => {
  
  axios
    .get(
      `https://react-native-course-29246-default-rtdb.firebaseio.com/Message.json?auth=${token}`
    )
    .then((response) => {
      setMessage(response.data)
    })
    .catch((error) => {
console.log(error);
    });
}, [token])


  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
