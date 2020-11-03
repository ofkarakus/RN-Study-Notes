import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Omer Mail</Text>
      <Text style={{marginLeft: 10}}>Email</Text>
      <View style={styles.input}>
        <TextInput
          style={{borderWidth: 0}}
          placeholder="Enter your email.."
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <Text style={{marginLeft: 10}}>Password</Text>
      <View style={styles.input}>
        <TextInput
          style={{borderWidth: 0}}
          placeholder="Enter your password.."
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              alert('Signed in successfully!');
            })
            .catch((error) => {
              alert(error.code);
            });
        }}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              alert('User account created & signed in!');
            })
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!');
              }
              alert(error);
            })
        }>
        <Text style={{color: 'white'}}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    margin: 10,
    backgroundColor: '#eee',
  },
  btn: {
    width: Dimensions.get('window').width * 0.3,
    padding: 5,
    backgroundColor: '#62757f',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default App;
