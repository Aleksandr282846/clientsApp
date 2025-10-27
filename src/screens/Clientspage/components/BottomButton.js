import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function BottomButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('Addnewclientpage')}
        Добавить нового
    >
    <View>
      <Text style={styles.field}>Добавить нового</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  field: {
    height: 52,
    backgroundColor: '#FB7360',
    borderRadius: 16,
    textAlign: 'center',
    paddingTop: 14,
    paddingRight: 24,
    paddingBottom: 14,
    paddingLeft: 24,
    marginRight: 24,
    marginLeft: 24,
    color: '#FFFFFF',
    lineHeight: 24,
    fontWeight: 600,
    fontSize: 16,
  },
});
