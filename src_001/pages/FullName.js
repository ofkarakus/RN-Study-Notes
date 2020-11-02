import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {useDispatch} from 'react-redux';

const FullName = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.name, {marginTop: 30}]}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your new name.."
          onChangeText={(value) => {
            setName(value);
          }}
        />
      </View>
      <Text style={styles.name}>Surname</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your new surname.."
          onChangeText={(value) => {
            setSurname(value);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch({type: 'UPDATE_NAME', payload: {newName: name}});
          dispatch({type: 'UPDATE_SURNAME', payload: {newSurname: surname}});
          // Works on both Android and iOS
          Alert.alert(
            'Update Info',
            'Your name and surname are successfully updated.',
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

export {FullName};
