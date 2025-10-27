import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ButtonAdd({ photo, name, phone, city, bio }) {

  const navigation = useNavigation();

  const onAddClient = () => {
    const client = { photo, name, phone, city, bio };
    navigation.navigate('Clientspage', { newClient: client });
  };

  return (
    <View style={styles.buttonShowMoreContainer}>
      <TouchableOpacity style={styles.buttonAdd} 
        onPress={onAddClient}>
          <Text style={styles.buttonShowMoreText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonShowMoreContainer: {
    alignItems: 'center',
    // justifyContent: '',
  },
  buttonAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // marginTop: 70,
    fontWeight: 600,
    borderWidth: 2,
    borderColor: '#FB7360',
    width: 300,
    height: 57,
    backgroundColor: '#FB7360',
  },
  buttonShowMoreText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
  },
});
