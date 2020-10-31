import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Component_B = () => {
  const yourCounter = useSelector((yourGlobalState) => yourGlobalState.counter);
  const myUsername = useSelector((globalState) => globalState.username);
  return (
    <View style={styles.container}>
      <Text>Component_B</Text>
      <Text>Counter: {yourCounter} </Text>
      <Text>Username: {myUsername}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Component_B;
