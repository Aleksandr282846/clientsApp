import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

export default function SearchField( { value, onChange } ) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loopContainer}>
        <Image
          style={styles.loop}
          source={require('../../../../assets/Loop.png')}
        />
      </View>

      <TextInput
        style={styles.field}
        placeholder="Поиск по городу"
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#A3A3A3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
    borderRadius: 12,
  },

  loopContainer: {
    height: 24,
  },

  loop: {
    height: 24,
    width: 24,
    marginLeft: 12,
  },

  field: {
    // backgroundColor: 'green',
    flex: 1,
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 8,
    lineHeight: 24,
  },
});
