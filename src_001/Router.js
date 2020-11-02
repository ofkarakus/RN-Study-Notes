import * as React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Login, Home, Update, FullName, EmailPass} from './pages';
import {reducer, initialState} from '../src_001/context';
import {useSelector} from 'react-redux';

const store = createStore(reducer, initialState);
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Lgn = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
};

const LoginStack = () => {
  return (
    <Lgn.Navigator>
      <Lgn.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Login Page',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
        }}
      />
    </Lgn.Navigator>
  );
};

const MyStack = () => {
  const name = useSelector((globalState) => globalState.name);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => <Text style={{marginRight: 10}}>Hi {name}!</Text>,
          headerLeft: () => (
            <TouchableOpacity
              style={{width: 20, height: 15, marginLeft: 10}}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                style={{width: 20, height: 15}}
                source={require('./assets/hamburger-icon.png')}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: 'LinkedIn',
          headerTitleStyle: {
            color: 'purple',
            fontSize: 22,
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  const isLogin = useSelector((globalState) => globalState.isLogin);

  return (
    <NavigationContainer>
      {isLogin ? (
        <Drawer.Navigator>
          <Drawer.Screen name="HomePage" component={MyStack} />
          <Drawer.Screen name="UpdatePage" component={MyTabs} />
        </Drawer.Navigator>
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {justifyContent: 'center'},
        activeTintColor: 'white',
        activeBackgroundColor: '#9c27b0',
        inactiveBackgroundColor: '#e1bee7',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: 15,
        },
      }}
      initialRouteName="UpdatePage">
      <Tab.Screen name="FullNamePage" component={FullName} />
      <Tab.Screen name="UpdatePage" component={Update} />
      <Tab.Screen name="EmailPassPage" component={EmailPass} />
    </Tab.Navigator>
  );
};

export default App;
