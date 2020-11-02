import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput,TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

const EmailPass = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();



  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.name, {marginTop: 30}]}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your new email.."
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
      </View>
      <Text style={styles.name}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your new password.."
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch({type: 'UPDATE_EMAIL', payload: {newEmail: email}});
          dispatch({type: 'UPDATE_PASSWORD', payload: {newPassword: password}});
          Alert.alert(
            'Update Info',
            'Your email and password are successfully updated.',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}]
          );
        }}>
        <Text>Update</Text>
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

export {EmailPass};