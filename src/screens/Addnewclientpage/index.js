import React, { useState } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ClientInfoFields from './components/clientInfoFields';
import ButtonAdd from './components/buttonAdd';

export default function Addnewclientpage() {
  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.buttonbackLeft}
            source={require('../../../assets/LeftAccessory.png')}
          />
        </TouchableOpacity>
          <Text style={styles.addNewUser}>Добавить нового</Text>
          <View></View>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.fieldContainer}>
            <ClientInfoFields 
              title="Фото" 
              value="Вставьте ссылку на фото" 
              text={photo} 
              setText={setPhoto}  
            />
            <ClientInfoFields 
              title="ФИО" 
              value="Введите фамилию и имя"
              text={name} 
              setText={setName}
              />
            <ClientInfoFields
              title="Номер телефона"
              value="+7 (700) 000 00 00"
              text={phone} 
              setText={setPhone} 
            />
            <ClientInfoFields 
              title="Город" 
              value="Выберите город"
              text={city} 
              setText={setCity} 
              />
            <ClientInfoFields
              title="Био"
              value="Укажите хобби, интересы, образование и стаж работы"
              text={bio} 
              setText={setBio} 
            />
          </View>
        </KeyboardAwareScrollView>

        <ButtonAdd 
          name={name} 
          city={city} 
          photo={photo} 
          bio={bio} 
          phone={phone} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF'
  },
  fieldContainer: {
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    // backgroundColor: 'yellow',
    marginBottom: 24,
  },
  buttonbackLeft: {
    width: 42,
    height: 44,
  },
  addNewUser: {
    fontWeight: 600,
    fontSize: 16,
    color: '#212322',
    marginRight: 44,
  },
});

