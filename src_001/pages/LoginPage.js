import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Login = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const lgn = useSelector((globalState) => globalState.isLogin);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.name, {marginTop: 30}]}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name.."
          onChangeText={(value) => {
            setName(value);
          }}
        />
      </View>
      <Text style={styles.name}>Surname</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your surname.."
          onChangeText={(value) => {
            setSurname(value);
          }}
        />
      </View>
      <Text style={styles.name}>Email Address</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email adress.."
          keyboardType="email-address"
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
      </View>
      <Text style={styles.name}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password.."
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch({type: 'UPDATE_NAME', payload: {newName: name}});
          dispatch({type: 'UPDATE_SURNAME', payload: {newSurname: surname}});
          dispatch({type: 'UPDATE_EMAIL', payload: {newEmail: email}});
          dispatch({type: 'UPDATE_PASSWORD', payload: {newPassword: password}});
          dispatch({type: 'LOGGED_IN'});
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    marginLeft: 15,
  },
  inputContainer: {
    margin: 10,
    backgroundColor: '#efefef',
    borderRadius: 10,
  },
  input: {
    borderWidth: 0,
  },
  btn: {
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    marginTop: 50,
    padding: 5,
  },
});

export {Login};
