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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
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
                size={25}
                color={focused ? '#040899' : '#ffffff'}
              />
            );
          },
        })}
        activeColor="#040899">
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
