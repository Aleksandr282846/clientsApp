import { StyleSheet, Text, View, Image } from 'react-native';

export default function IntroClientContainer( {client} ) {
  return (
    <View style={styles.introclientContainer}>
      <Image
        style={styles.clientImage}
        source={client.photo}
      />
      <Text style={styles.nameClient}>{client.name}</Text>
      <Text style={styles.nameCity}>{client.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  introclientContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  clientImage: {
    height: 156,
    width: 156,
  },
  nameClient: {
    marginTop: 16,
    fontWeight: 700,
    fontSize: 24,
  },
  nameCity: {
    marginTop: 4,
    fontWeight: 400,
    fontSize: 13,
    color: '#A3A3A3',
  },
});
