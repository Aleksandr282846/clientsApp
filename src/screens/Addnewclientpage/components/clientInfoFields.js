import React, {useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default function ClientInfoFields({title, value, text, setText}) {

  return (
    <View style={styles.clientInfo}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={value}
        multiline={true}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  clientInfo: {
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 2.5
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    color: '#A3A3A3',
    marginBottom: 20
  },
});
