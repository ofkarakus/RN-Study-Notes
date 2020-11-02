import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Update = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            style={{width: 20, height: 15}}
            source={require('../assets/hamburger-icon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>UpdatePage</Text>
      </View>
      <View style={styles.main}>
        <Text style={[styles.text, {color: 'blue'}]}>
          You can change your name and surname in FullNamePage
        </Text>
        <Text style={[styles.text, {color: 'blue'}]}>
          You can change your email and password in EmailPassPage
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#efefef',
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
  },

  heading: {
    fontSize: 17,
    color: 'red',
  },

  btn: {
    width: 20,
    height: 15,
    marginLeft: 10,
    position: 'absolute',
    left: 5,
  },
});
export {Update};
