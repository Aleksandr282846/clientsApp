import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClientItem({ client, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(client)}>
      <View style={[styles.clientContainer, styles.shadow]}>
        <View>
          <Image source={client.photo} style={styles.avatar} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.nametext}>{client.name}</Text>
          <Text style={styles.citytext}>{client.city}</Text>
        </View>

        <View style={styles.arrowContainer}>
          <Image style={styles.arrow} source={require('../../../../assets/Navigationright.png')} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clientContainer: {
    height: 92,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 3,
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 16,
    alignItems: 'center',

  },

  avatar: {
    width: 44,
    height: 44,
    marginLeft: 40,
  },

  textContainer: {
    flex: 1,
    marginLeft: 16,
  },

  nametext: {
    fontsize: 16,
    fontWeight: 600,
    lineHeight: 24,
    color: '#212322',
  },

  citytext: {
    fontsize: 13,
    fontWeight: 400,
    lineHeight: 16,
    marginTop: 4,
    color: '#A3A3A3',
  },

  arrowContainer: {
    height: 24,
    width: 24,
    marginRight: 16,
  },

  arrow: {
    height: 24,
    width: 24,
    marginRight: 20,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
