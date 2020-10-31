import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Component_A = (props) => {
  const myCounter = useSelector((myGlobalState) => myGlobalState.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Component_A</Text>
      <Text>Counter: {myCounter}</Text>
      <TouchableOpacity
        onPress={() => dispatch({type: 'INCREASE_COUNTER'})}
        style={styles.btn}>
        <Text>increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch({type: 'DECREASE_COUNTER'})}
        style={styles.btn}>
        <Text>decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          dispatch({type: 'UPDATE_USERNAME', payload: {newUserName: 'Omer'}})
        }
        style={styles.btn}>
        <Text>update username</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    backgroundColor: 'darkgray',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    width: 150
    },
});

export default Component_A;
