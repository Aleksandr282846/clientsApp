import { StyleSheet, View } from 'react-native';

export default function CallButton() {
  return (
    <View style={styles.buttonCall}>Звонок</View>
  )
}

const styles = StyleSheet.create({
  buttonCall: {
    backgroundColor: '#FB7360',
    width: 160,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: 16,
    marginRight: 24,
    fontWeight: 600,
  }
});

