import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MashButton from './Button';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'home';
            } else if (route.name == 'Screen_B') {
              iconName = 'settings';
            }
            return (
              <MaterialIcons
                name={iconName}
                size={30}
                color={focused ? '#040899' : '#cccccc'}
              />
            );
          },
          tabBarActiveTintColor: '#040899',
          tabBarLabelStyle: {fontSize: 14},
          tabBarStyle: {height: 70},
        })}>
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
