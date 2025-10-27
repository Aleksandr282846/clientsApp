import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InactiveButton from './components/InactiveButton';
import ActiveButton from './components/ActiveButton';
import TopButtons from './components/TopButtons';
import IntroClientContainer from './components/IntroClientContainer';
import ContainerDescription from './components/ContainerDescription';
import ButtonShowMore from './components/ButtonShowMore';


export default function Clientmainpage( {route} ) {

  const { client } = route.params;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TopButtons/>
        <IntroClientContainer client={client}/>
        <View style={styles.connectButtons}>
          <InactiveButton/> 
          <ActiveButton/>
        </View>
        <ContainerDescription/>
        <ButtonShowMore/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF'
  },
  connectButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
    alignItems: 'center',
  },
});










