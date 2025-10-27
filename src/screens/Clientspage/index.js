import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ClientItem from './components/ClientItem';
import SearchField from './components/SearchField';
import Headline from './components/Headline';
import BottomButton from './components/BottomButton';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@clients', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@clients');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default function Clientspage({ route }) {
  const defaultClients = [
    {
      id: '1',
      name: 'Иван Игнатов',
      city: 'Калининград',
      photo: require('../../../assets/IvanIgnatov.png'),
    },

    {
      id: '2',
      name: 'Сергей Иванов',
      city: 'Москва',
      photo: require('../../../assets/OlegIvanov.png'),
    },

    {
      id: '3',
      name: 'Сергей Чернышев',
      city: 'Казань',
      photo: require('../../../assets/SergeyChernyshev.png'),
    },
  ];

  const [clients, setClients] = useState(defaultClients);
  const [filteredClients, setFilteredClients] = useState(defaultClients);
  const navigation = useNavigation();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    (async () => {
      const jsonValue = await AsyncStorage.getItem('@clients');
      const storedClients = jsonValue ? JSON.parse(jsonValue) : defaultClients;
      setClients(storedClients);
    })();
  }, []);

  useEffect(() => {
    if (route.params?.newClient) {
      setClients((prev) => {
        const updated = [...prev, route.params.newClient];
        AsyncStorage.setItem('@clients', JSON.stringify(updated));
        return updated;
      });
      navigation.setParams({ newClient: undefined });
    }
  }, [route.params?.newClient, navigation]);

  useEffect(() => {
    const clientsAfterFilter = clients.filter((client) =>
      client.city.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredClients(clientsAfterFilter);
  }, [filter, clients]);

  const onClientClick = (client) => {
    navigation.navigate('Clientmainpage', { client });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <View>
            <Headline />
          </View>

          <View>
            <SearchField value={filter} onChange={setFilter} />
          </View>

          <KeyboardAwareScrollView style={{ flex: 1 }}>
            <View style={styles.clientlist}>
              <FlatList
                data={filteredClients}
                renderItem={({ item }) => (
                  <ClientItem client={item} onPress={onClientClick} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.bottomButtonContainer}>
            <BottomButton />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },

  clientlist: {
    flex: 1,
  },

  bottomButtonContainer: {
    justifyContent: 'flex-end',
  },
});
