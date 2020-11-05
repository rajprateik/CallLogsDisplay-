import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loglist from './Loglist';

function Button({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Loglist')}>
        <Text style={styles.Txt}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Button} />
        <Stack.Screen name="Loglist" component={Loglist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#820a0a',
    borderRadius: 20,
    height: 40,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txt: {
    fontSize: 20,
    color: '#ffffff',
  },
});
