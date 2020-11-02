import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const name = useSelector((globalState) => globalState.name);
  const surname = useSelector((globalState) => globalState.surname);
  const email = useSelector((globalState) => globalState.email);
  const password = useSelector((globalState) => globalState.password);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {color: 'red', fontWeight: 'bold'}]}>
        User Informations
      </Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Surname: {surname}</Text>
      <Text style={styles.text}>Email Address: {email}</Text>
      <Text style={styles.text}>Password: {password}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export {Home};
