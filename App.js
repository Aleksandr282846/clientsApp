import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";


import Clientmainpage from './src/screens/Clientmainpage';
import Clientspage from './src/screens/Clientspage';
import Addnewclientpage from './src/screens/Addnewclientpage';

const Stack = createStackNavigator();


function MainStack() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Clientspage" component={Clientspage} />
        <Stack.Screen name="Clientmainpage" component={Clientmainpage} />
        <Stack.Screen name="Addnewclientpage" component={Addnewclientpage} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack/> 
    </NavigationContainer>

  );
}








