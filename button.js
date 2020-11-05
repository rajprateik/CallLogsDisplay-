/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => props.navigation.navigate('Loglist')}>
        <Text style={styles.Txt}>Click me</Text>
      </TouchableOpacity>
    </View>
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
