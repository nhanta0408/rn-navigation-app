import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MashButton from './Button';

function ScreenB({navigation}) {
  return (
    <View style={styles.body}>
      <Text style={styles.screenTitle}>Screen B</Text>
      <View style={{flex: 1}}>
        <MashButton
          style={{backgroundColor: '#040899'}}
          title="Screen B"
          textColor="white"
          onClick={() => navigation.navigate('Screen_A')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    flex: 1,
    marginTop: 100,
    fontSize: 30,
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
export default ScreenB;
